"use client";

import { PlayCircle, Clock, FileQuestion, Target, Info } from "lucide-react";
import { EXAM_CONFIG } from "@/data/constants";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { getTranslation } from "@/locales/translations";

interface StartScreenProps {
  onStart: () => void;
}

// 言語切り替えトグルコンポーネント
function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center border border-slate-600 rounded-full overflow-hidden">
      <button
        onClick={() => handleToggle("ja")}
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === "ja"
            ? "bg-emerald-500 text-white"
            : "bg-transparent text-slate-400 hover:text-white"
        }`}
      >
        JA
      </button>
      <button
        onClick={() => handleToggle("en")}
        className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-emerald-500 text-white"
            : "bg-transparent text-slate-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export function StartScreen({ onStart }: StartScreenProps) {
  const { language } = useLanguage();
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* 言語切り替えトグル - 右上に固定 */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>

      {/* ヘッダー */}
      <header className="pt-8 pb-4 px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 mb-4 shadow-lg shadow-emerald-500/25">
          <FileQuestion className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">
          Professional Scrum Master™ I (PSM I)
        </h1>
        <p className="text-emerald-400 font-medium">
          {language === "ja" ? "模擬試験" : "Practice Exam"}
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 pb-8">
        {/* 試験ルール */}
        <section className="bg-slate-900/60 backdrop-blur-sm p-5 mb-4 border border-slate-700/50">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            {t("start.overview")}
          </h2>
          <div className="space-y-3">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-10 h-10 bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                  {index === 0 && <Clock className="w-5 h-5 text-emerald-400" />}
                  {index === 1 && <FileQuestion className="w-5 h-5 text-teal-400" />}
                  {index === 2 && <Target className="w-5 h-5 text-cyan-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm">{rule.label}</p>
                  <p className="font-semibold text-lg">{rule.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意事項 */}
        <section className="bg-slate-900/60 backdrop-blur-sm p-5 border border-slate-700/50">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-amber-400" />
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              {t("start.caution")}
            </h2>
          </div>
          <ul className="space-y-2">
            {instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed"
              >
                <span className="text-emerald-400 mt-0.5">•</span>
                {instruction}
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* フッター - 開始ボタン */}
      <footer className="sticky bottom-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent pt-8">
        <button
          onClick={onStart}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <PlayCircle className="w-6 h-6" />
          {t("start.button")}
        </button>
      </footer>
    </div>
  );
}



