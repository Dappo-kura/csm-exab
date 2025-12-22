"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Play, RotateCcw, Trash2, AlertTriangle, Settings, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";
import {
  getWrongQuestionIds,
  clearWrongQuestions,
  getReviewSettings,
  saveReviewSettings,
  ReviewSettings,
} from "@/lib/wrongQuestionsStorage";

interface ReviewScreenProps {
  onBack: () => void;
  onStart: (removeOnCorrect: boolean) => void;
}

export function ReviewScreen({ onBack, onStart }: ReviewScreenProps) {
  const [wrongQuestionIds, setWrongQuestionIds] = useState<number[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ReviewSettings>({ removeOnCorrect: true });
  
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

  // 間違えた問題のIDと設定を読み込み
  useEffect(() => {
    setWrongQuestionIds(getWrongQuestionIds());
    setSettings(getReviewSettings());
  }, []);

  // 全てクリア
  const handleClearAll = () => {
    clearWrongQuestions();
    setWrongQuestionIds([]);
    setShowClearConfirm(false);
  };

  // 設定を変更
  const handleSettingsChange = (key: keyof ReviewSettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveReviewSettings(newSettings);
  };

  // 復習開始
  const handleStart = () => {
    onStart(settings.removeOnCorrect);
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === "dark"
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
    }`}>
      {/* ヘッダー */}
      <header className={`sticky top-0 z-10 backdrop-blur border-b px-4 py-4 ${
        theme === "dark"
          ? "bg-slate-900/90 border-slate-800"
          : "bg-white/90 border-slate-200"
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "hover:bg-slate-800 text-slate-400 hover:text-white"
                  : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-orange-500" />
              <h1 className={`text-lg font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t("review.title")}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {wrongQuestionIds.length > 0 && (
              <>
                <button
                  onClick={() => setShowSettings(true)}
                  className={`p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "hover:bg-slate-800 text-slate-400 hover:text-white"
                      : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label={t("review.settings")}
                >
                  <Settings className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className={`p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                      : "hover:bg-red-50 text-slate-500 hover:text-red-500"
                  }`}
                  aria-label={t("review.clearAll")}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 py-6">
        {wrongQuestionIds.length === 0 ? (
          // 問題がない場合
          <div className="flex flex-col items-center justify-center py-16">
            <RotateCcw className={`w-16 h-16 mb-4 ${
              theme === "dark" ? "text-slate-700" : "text-slate-300"
            }`} />
            <p className={`text-center whitespace-pre-line ${
              theme === "dark" ? "text-slate-500" : "text-slate-400"
            }`}>
              {t("review.noQuestions")}
            </p>
          </div>
        ) : (
          // 問題がある場合
          <div className="space-y-4">
            <p className={`text-sm ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}>
              {t("review.description")}
            </p>

            {/* 問題数表示 */}
            <div className={`backdrop-blur-sm p-6 border text-center ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-700/50"
                : "bg-white/80 border-slate-200"
            }`}>
              <div className={`text-5xl font-bold mb-2 ${
                theme === "dark" ? "text-orange-400" : "text-orange-500"
              }`}>
                {wrongQuestionIds.length}
              </div>
              <div className={theme === "dark" ? "text-slate-400" : "text-slate-500"}>
                {t("review.questionCount")}
              </div>
            </div>

            {/* 設定表示 */}
            <div className={`backdrop-blur-sm p-4 border ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-700/50"
                : "bg-white/80 border-slate-200"
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}>
                  {t("review.removeOnCorrect")}
                </span>
                <span className={`text-sm font-medium ${
                  settings.removeOnCorrect
                    ? "text-emerald-500"
                    : theme === "dark"
                    ? "text-slate-500"
                    : "text-slate-400"
                }`}>
                  {settings.removeOnCorrect ? "ON" : "OFF"}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* フッター - 開始ボタン */}
      {wrongQuestionIds.length > 0 && (
        <footer className={`sticky bottom-0 p-4 pb-8 pt-8 ${
          theme === "dark"
            ? "bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent"
            : "bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent"
        }`}>
          <button
            onClick={handleStart}
            className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/25 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <Play className="w-6 h-6" />
            {t("review.startReview")}
          </button>
        </footer>
      )}

      {/* クリア確認モーダル */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`rounded-2xl p-6 max-w-sm w-full border shadow-xl animate-fade-in ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h3 className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t("review.clearConfirmTitle")}
              </h3>
            </div>
            <p className={`mb-6 ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}>
              {t("review.clearConfirmMessage")}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className={`flex-1 py-3 px-4 rounded-full font-medium transition-colors ${
                  theme === "dark"
                    ? "bg-slate-700 text-white hover:bg-slate-600"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {t("dialog.back")}
              </button>
              <button
                onClick={handleClearAll}
                className="flex-1 py-3 px-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-400 transition-colors"
              >
                {t("review.clearAll")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 設定モーダル */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`rounded-2xl p-6 max-w-sm w-full border shadow-xl animate-fade-in ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-slate-400" />
              <h3 className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t("review.settings")}
              </h3>
            </div>
            
            {/* 設定項目 */}
            <div className="space-y-4 mb-6">
              <button
                onClick={() => handleSettingsChange("removeOnCorrect", !settings.removeOnCorrect)}
                className={`w-full p-4 border rounded-lg flex items-center justify-between transition-colors ${
                  settings.removeOnCorrect
                    ? theme === "dark"
                      ? "bg-emerald-500/10 border-emerald-500/50"
                      : "bg-emerald-50 border-emerald-500/50"
                    : theme === "dark"
                    ? "bg-slate-900/60 border-slate-700/50"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <span className={`text-sm ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}>
                  {t("review.removeOnCorrect")}
                </span>
                {settings.removeOnCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                )}
              </button>
            </div>
            
            <button
              onClick={() => setShowSettings(false)}
              className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                theme === "dark"
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {t("exam.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}






