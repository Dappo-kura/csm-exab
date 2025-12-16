"use client";

import { useState, useEffect } from "react";
import { PlayCircle, Clock, FileQuestion, Target, Info, Sun, Moon, History, FolderOpen, RotateCcw, Settings, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { EXAM_CONFIG } from "@/data/constants";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";
import { getAppSettings } from "@/lib/settingsStorage";
import { getAdRemovalPackage, purchaseAdRemoval, restorePurchases } from "@/lib/purchases";

interface StartScreenProps {
  onStart: () => void;
  onShowHistory: () => void;
  onShowCategorySelect: () => void;
  onShowReview: () => void;
  onShowSettings: () => void;
}

// 言語切り替えトグルコンポーネント
function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className={`flex items-center border rounded-full overflow-hidden ${theme === "dark" ? "border-slate-600" : "border-slate-300"
      }`}>
      <button
        onClick={() => handleToggle("ja")}
        className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${language === "ja"
          ? "bg-emerald-500 text-white"
          : theme === "dark"
            ? "bg-transparent text-slate-400 hover:text-white"
            : "bg-transparent text-slate-500 hover:text-slate-900"
          }`}
      >
        JA
      </button>
      <button
        onClick={() => handleToggle("en")}
        className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${language === "en"
          ? "bg-emerald-500 text-white"
          : theme === "dark"
            ? "bg-transparent text-slate-400 hover:text-white"
            : "bg-transparent text-slate-500 hover:text-slate-900"
          }`}
      >
        EN
      </button>
    </div>
  );
}

// テーマ切り替えトグルコンポーネント
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-200 ${theme === "dark"
        ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
        }`}
      aria-label={theme === "dark" ? "ライトモードに切り替え" : "ダークモードに切り替え"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}

export function StartScreen({ onStart, onShowHistory, onShowCategorySelect, onShowReview, onShowSettings }: StartScreenProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isAdRemoved, setIsAdRemoved] = useState(false);

  useEffect(() => {
    const settings = getAppSettings();
    setIsAdRemoved(settings.isAdRemoved);
  }, []);

  const handlePurchase = async () => {
    const pkg = await getAdRemovalPackage();
    if (!pkg) {
      alert(language === "ja" ? "商品情報の取得に失敗しました" : "Failed to load product info");
      return;
    }

    const success = await purchaseAdRemoval(pkg);
    if (success) {
      setIsAdRemoved(true);
      alert(language === "ja" ? "広告を削除しました！" : "Ads removed successfully!");
    }
  };

  const handleRestore = async () => {
    const success = await restorePurchases();
    if (success) {
      setIsAdRemoved(true);
      alert(language === "ja" ? "購入を復元しました！" : "Purchases restored!");
    }
  };

  // 言語別の注意事項
  const instructions = language === "ja"
    ? [
      "全ての問題に回答してから「試験終了」ボタンを押してください。",
      "「あとで見直す」機能で気になる問題にマークできます。",
      "制限時間が終了すると自動的に採点されます。",
    ]
    : [
      "Please answer all questions before pressing the \"Finish Exam\" button.",
      "You can mark questions for review using the \"Flag for Review\" feature.",
      "The exam will be automatically graded when time runs out.",
    ];

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark"
      ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
      }`}>
      {/* 右上のコントロール */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* ヘッダー */}
      <header className="pt-6 pb-3 px-4 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 mb-3 shadow-lg shadow-emerald-500/25">
          <FileQuestion className="w-7 h-7 text-white" />
        </div>
        <h1 className={`text-xl font-bold mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
          Pocket Scrum Master
        </h1>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 pb-4 flex flex-col">
        {/* 試験ルール - 横並び3カラム */}
        <section className="flex justify-center gap-6 mb-4">
          {/* 制限時間 */}
          <div className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <Clock className="w-6 h-6 text-emerald-500" />
            </div>
            <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
              {t("start.rule.timeLimit")}
            </p>
            <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {language === "ja" ? `${EXAM_CONFIG.TIME_LIMIT_MINUTES}分` : `${EXAM_CONFIG.TIME_LIMIT_MINUTES} min`}
            </p>
          </div>

          {/* 問題数 */}
          <div className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <FileQuestion className="w-6 h-6 text-amber-500" />
            </div>
            <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
              {t("start.rule.questions")}
            </p>
            <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {language === "ja" ? `${EXAM_CONFIG.TOTAL_QUESTIONS}問` : `${EXAM_CONFIG.TOTAL_QUESTIONS}`}
            </p>
          </div>

          {/* 合格ライン */}
          <div className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <Target className="w-6 h-6 text-cyan-500" />
            </div>
            <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
              {t("start.rule.passingScore")}
            </p>
            <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {language === "ja" ? `正答率${EXAM_CONFIG.PASSING_SCORE}%以上` : `${EXAM_CONFIG.PASSING_SCORE}%+`}
            </p>
          </div>
        </section>

        {/* 注意事項 - アコーディオン */}
        <section className={`backdrop-blur-sm border rounded-lg mb-4 ${theme === "dark"
          ? "bg-slate-900/60 border-slate-700/50"
          : "bg-white/80 border-slate-200"
          }`}>
          <button
            onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
            className="w-full p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-500" />
              <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}>
                {t("start.caution")}
              </span>
            </div>
            {isInstructionsOpen ? (
              <ChevronUp className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
            ) : (
              <ChevronDown className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
            )}
          </button>
          {isInstructionsOpen && (
            <div className="px-3 pb-3">
              <ul className="space-y-1.5">
                {instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"
                      }`}
                  >
                    <span className="text-emerald-500 mt-0.5">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* メニューボタン - 2x2グリッド */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* カテゴリー別練習 */}
          <button
            onClick={onShowCategorySelect}
            className={`backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              }`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <FolderOpen className="w-5 h-5 text-purple-500" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("mode.categoryPractice")}
            </span>
            <span className={`text-xs mt-0.5 ${theme === "dark" ? "text-slate-500" : "text-slate-400"
              }`}>
              {t("mode.categoryPracticeDesc")}
            </span>
          </button>

          {/* 間違えた問題を復習 */}
          <button
            onClick={onShowReview}
            className={`backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              }`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <RotateCcw className="w-5 h-5 text-orange-500" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("review.title")}
            </span>
          </button>

          {/* 学習履歴 */}
          <button
            onClick={onShowHistory}
            className={`backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              }`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <History className="w-5 h-5 text-indigo-500" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("start.history")}
            </span>
          </button>

          {/* 設定 */}
          <button
            onClick={onShowSettings}
            className={`backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              }`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <Settings className="w-5 h-5 text-slate-400" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("settings.title")}
            </span>
          </button>
        </div>

        {/* 広告削除エリア */}
        {!isAdRemoved && (
          <div className="mt-2">
            <button
              onClick={handlePurchase}
              className={`w-full p-4 border rounded-lg flex items-center justify-center gap-3 transition-colors mb-2 ${theme === "dark"
                ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60 text-emerald-400"
                : "bg-white/80 border-slate-200 hover:bg-slate-50 text-emerald-600"
                }`}
            >
              <Zap className="w-5 h-5" />
              <span className="font-bold">
                {language === "ja" ? "広告を非表示にする (¥980)" : "Remove Ads"}
              </span>
            </button>

            <button
              onClick={handleRestore}
              className={`text-xs w-full text-center underline ${theme === "dark" ? "text-slate-500 hover:text-slate-400" : "text-slate-400 hover:text-slate-600"}`}
            >
              {language === "ja" ? "購入を復元" : "Restore Purchase"}
            </button>
          </div>
        )}
      </main>

      {/* フッター - 通常試験開始ボタン */}
      <footer className={`sticky bottom-0 p-4 pb-6 ${theme === "dark"
        ? "bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent"
        : "bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent"
        }`}>
        <button
          onClick={onStart}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <PlayCircle className="w-6 h-6" />
          {t("mode.normalExam")}
        </button>
      </footer>
    </div>
  );
}
