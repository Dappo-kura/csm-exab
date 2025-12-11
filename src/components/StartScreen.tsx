"use client";

import { PlayCircle, Clock, FileQuestion, Target, Info, Sun, Moon, History, FolderOpen } from "lucide-react";
import { EXAM_CONFIG } from "@/data/constants";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";

interface StartScreenProps {
  onStart: () => void;
  onShowHistory: () => void;
  onShowCategorySelect: () => void;
}

// 言語切り替えトグルコンポーネント
function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className={`flex items-center border rounded-full overflow-hidden ${
      theme === "dark" ? "border-slate-600" : "border-slate-300"
    }`}>
      <button
        onClick={() => handleToggle("ja")}
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === "ja"
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
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === "en"
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
      className={`p-2 rounded-full transition-all duration-200 ${
        theme === "dark"
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

export function StartScreen({ onStart, onShowHistory, onShowCategorySelect }: StartScreenProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

  // 言語別のルール表示
  const rules = [
    {
      label: t("start.rule.timeLimit"),
      value: language === "ja" 
        ? `${EXAM_CONFIG.TIME_LIMIT_MINUTES}分` 
        : `${EXAM_CONFIG.TIME_LIMIT_MINUTES} min`,
    },
    {
      label: t("start.rule.questions"),
      value: language === "ja"
        ? `${EXAM_CONFIG.TOTAL_QUESTIONS}問`
        : `${EXAM_CONFIG.TOTAL_QUESTIONS} questions`,
    },
    {
      label: t("start.rule.passingScore"),
      value: language === "ja"
        ? `正答率${EXAM_CONFIG.PASSING_SCORE}%以上`
        : `${EXAM_CONFIG.PASSING_SCORE}% or higher`,
    },
  ];

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
    <div className={`min-h-screen flex flex-col ${
      theme === "dark"
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
    }`}>
      {/* 右上のコントロール */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* ヘッダー */}
      <header className="pt-8 pb-4 px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 mb-4 shadow-lg shadow-emerald-500/25">
          <FileQuestion className="w-8 h-8 text-white" />
        </div>
        <h1 className={`text-2xl font-bold mb-1 ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}>
          Professional Scrum Master™ I (PSM I)
        </h1>
        <p className="text-emerald-500 font-medium">
          {language === "ja" ? "模擬試験" : "Practice Exam"}
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 pb-8">
        {/* 試験ルール */}
        <section className={`backdrop-blur-sm p-5 mb-4 border ${
          theme === "dark"
            ? "bg-slate-900/60 border-slate-700/50"
            : "bg-white/80 border-slate-200"
        }`}>
          <h2 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
            theme === "dark" ? "text-slate-400" : "text-slate-500"
          }`}>
            {t("start.overview")}
          </h2>
          <div className="space-y-3">
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                  theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
                }`}>
                  {index === 0 && <Clock className="w-5 h-5 text-emerald-500" />}
                  {index === 1 && <FileQuestion className="w-5 h-5 text-teal-500" />}
                  {index === 2 && <Target className="w-5 h-5 text-cyan-500" />}
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}>{rule.label}</p>
                  <p className="font-semibold text-lg">{rule.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意事項 */}
        <section className={`backdrop-blur-sm p-5 mb-4 border ${
          theme === "dark"
            ? "bg-slate-900/60 border-slate-700/50"
            : "bg-white/80 border-slate-200"
        }`}>
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-amber-500" />
            <h2 className={`text-sm font-semibold uppercase tracking-wider ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}>
              {t("start.caution")}
            </h2>
          </div>
          <ul className="space-y-2">
            {instructions.map((instruction, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 text-sm leading-relaxed ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <span className="text-emerald-500 mt-0.5">•</span>
                {instruction}
              </li>
            ))}
          </ul>
        </section>

        {/* メニューボタン */}
        <div className="space-y-2">
          {/* カテゴリー別練習 */}
          <button
            onClick={onShowCategorySelect}
            className={`w-full backdrop-blur-sm p-4 border flex items-center justify-between transition-colors ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
                : "bg-white/80 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 flex items-center justify-center ${
                theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
                <FolderOpen className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-left">
                <span className={`font-medium block ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  {t("mode.categoryPractice")}
                </span>
                <span className={`text-sm ${
                  theme === "dark" ? "text-slate-500" : "text-slate-400"
                }`}>
                  {t("mode.categoryPracticeDesc")}
                </span>
              </div>
            </div>
            <span className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
              →
            </span>
          </button>

          {/* 学習履歴 */}
          <button
            onClick={onShowHistory}
            className={`w-full backdrop-blur-sm p-4 border flex items-center justify-between transition-colors ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
                : "bg-white/80 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 flex items-center justify-center ${
                theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
                <History className="w-5 h-5 text-indigo-500" />
              </div>
              <span className={`font-medium ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t("start.history")}
              </span>
            </div>
            <span className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
              →
            </span>
          </button>
        </div>
      </main>

      {/* フッター - 通常試験開始ボタン */}
      <footer className={`sticky bottom-0 p-4 pb-8 pt-8 ${
        theme === "dark"
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
