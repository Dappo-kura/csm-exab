"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Settings, Shuffle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";
import { getAppSettings, saveAppSettings, AppSettings } from "@/lib/settingsStorage";

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const [settings, setSettings] = useState<AppSettings>({
    shuffleQuestions: true,
    shuffleChoices: true,
    isPremium: false,
  });

  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

  // 設定を読み込み
  useEffect(() => {
    setSettings(getAppSettings());
  }, []);

  // 設定を変更
  const handleSettingChange = (key: keyof AppSettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveAppSettings(newSettings);
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark"
      ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
      }`}>
      {/* ヘッダー */}
      <header className={`sticky top-0 z-10 backdrop-blur border-b px-4 py-4 ${theme === "dark"
        ? "bg-slate-900/90 border-slate-800"
        : "bg-white/90 border-slate-200"
        }`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className={`p-2 rounded-full transition-colors ${theme === "dark"
              ? "hover:bg-slate-800 text-slate-400 hover:text-white"
              : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
              }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-slate-400" />
            <h1 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("settings.title")}
            </h1>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 py-6">
        {/* シャッフル設定セクション */}
        <section className={`backdrop-blur-sm border overflow-hidden ${theme === "dark"
          ? "bg-slate-900/60 border-slate-700/50"
          : "bg-white/80 border-slate-200"
          }`}>
          <div className={`px-4 py-3 border-b ${theme === "dark" ? "border-slate-700/50" : "border-slate-200"
            }`}>
            <div className="flex items-center gap-2">
              <Shuffle className="w-4 h-4 text-cyan-500" />
              <h2 className={`text-sm font-semibold uppercase tracking-wider ${theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}>
                {t("settings.shuffleSection")}
              </h2>
            </div>
          </div>

          {/* 問題のシャッフル */}
          <button
            onClick={() => handleSettingChange("shuffleQuestions", !settings.shuffleQuestions)}
            className={`w-full px-4 py-4 flex items-center justify-between border-b transition-colors ${theme === "dark"
              ? "border-slate-700/50 hover:bg-slate-800/30"
              : "border-slate-200 hover:bg-slate-50"
              }`}
          >
            <div className="text-left">
              <p className={`font-medium ${theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                {t("settings.shuffleQuestions")}
              </p>
              <p className={`text-sm ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                }`}>
                {t("settings.shuffleQuestionsDesc")}
              </p>
            </div>
            <div className={`w-12 h-7 rounded-full p-1 transition-colors ${settings.shuffleQuestions
              ? "bg-emerald-500"
              : theme === "dark"
                ? "bg-slate-700"
                : "bg-slate-300"
              }`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.shuffleQuestions ? "translate-x-5" : "translate-x-0"
                }`} />
            </div>
          </button>

          {/* 選択肢のシャッフル */}
          <button
            onClick={() => handleSettingChange("shuffleChoices", !settings.shuffleChoices)}
            className={`w-full px-4 py-4 flex items-center justify-between transition-colors ${theme === "dark"
              ? "hover:bg-slate-800/30"
              : "hover:bg-slate-50"
              }`}
          >
            <div className="text-left">
              <p className={`font-medium ${theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                {t("settings.shuffleChoices")}
              </p>
              <p className={`text-sm ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                }`}>
                {t("settings.shuffleChoicesDesc")}
              </p>
            </div>
            <div className={`w-12 h-7 rounded-full p-1 transition-colors ${settings.shuffleChoices
              ? "bg-emerald-500"
              : theme === "dark"
                ? "bg-slate-700"
                : "bg-slate-300"
              }`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.shuffleChoices ? "translate-x-5" : "translate-x-0"
                }`} />
            </div>
          </button>
        </section>
      </main>
    </div>
  );
}






