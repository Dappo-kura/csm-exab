"use client";

import {
  ChevronLeft,
  ChevronRight,
  Flag,
  Clock,
  CheckSquare,
  Square,
  Circle,
  CheckCircle2,
  AlertTriangle,
  Grid3X3,
  Home,
} from "lucide-react";
import { Question, categoryLabels, categoryColors, getLocalizedText } from "@/types";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";

interface ExamScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  answeredCount: number;
  flaggedCount: number;
  selectedAnswers: string[];
  isFlagged: boolean;
  formattedTime: string;
  remainingSeconds: number;
  onSelectAnswer: (choiceId: string) => void;
  onToggleFlag: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onFinish: () => void;
  onGoToQuestion: (index: number) => void;
  isAnsweredAt: (index: number) => boolean;
  isFlaggedAt: (index: number) => boolean;
  onBackToTop: () => void;
}

export function ExamScreen({
  question,
  currentIndex,
  totalQuestions,
  answeredCount,
  flaggedCount,
  selectedAnswers,
  isFlagged,
  formattedTime,
  remainingSeconds,
  onSelectAnswer,
  onToggleFlag,
  onNext,
  onPrevious,
  onFinish,
  onGoToQuestion,
  isAnsweredAt,
  isFlaggedAt,
  onBackToTop,
}: ExamScreenProps) {
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [showBackToTopConfirm, setShowBackToTopConfirm] = useState(false);
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

  const isLastQuestion = currentIndex === totalQuestions - 1;
  const isFirstQuestion = currentIndex === 0;

  // 残り時間が5分以下で警告色
  const isTimeWarning = remainingSeconds <= 300;
  // 残り時間が1分以下で危険色
  const isTimeDanger = remainingSeconds <= 60;

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"
      }`}>
      {/* 固定ヘッダー */}
      <header className={`sticky top-0 z-20 backdrop-blur border-b ${theme === "dark"
          ? "bg-slate-900/95 border-slate-800"
          : "bg-white/95 border-slate-200"
        }`}>
        <div className="px-4 py-3">
          {/* 上段: タイマーと問題リストボタン */}
          <div className="flex items-center justify-between mb-2">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${isTimeDanger
                  ? "bg-red-500/20 text-red-400"
                  : isTimeWarning
                    ? "bg-amber-500/20 text-amber-400"
                    : theme === "dark"
                      ? "bg-slate-800 text-white"
                      : "bg-slate-100 text-slate-900"
                }`}
            >
              <Clock className="w-4 h-4" />
              <span className="font-mono font-bold text-lg">{formattedTime}</span>
            </div>
            <button
              onClick={() => setShowQuestionList(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${theme === "dark"
                  ? "bg-slate-800 text-slate-300 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900"
                }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span className="text-sm font-medium">{t("exam.questionList")}</span>
            </button>
          </div>

          {/* 下段: 進捗バー */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className={`h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                }`}>
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
                  style={{
                    width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>
            <span className={`text-sm whitespace-nowrap ${theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}>
              {currentIndex + 1}/{totalQuestions}
            </span>
          </div>

          {/* 統計情報 */}
          <div className={`flex items-center gap-4 mt-2 text-xs ${theme === "dark" ? "text-slate-500" : "text-slate-400"
            }`}>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              {t("exam.answered")}: {answeredCount}
            </span>
            {flaggedCount > 0 && (
              <span className="flex items-center gap-1">
                <Flag className="w-3 h-3 text-amber-500" />
                {t("exam.flagged")}: {flaggedCount}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 py-6 overflow-y-auto">
        {/* 問題タイプ・カテゴリ表示 */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`text-xs font-medium px-2 py-1 ${question.type === "multiple"
                ? "bg-purple-500/25 text-purple-400"
                : theme === "dark"
                  ? "bg-slate-800/80 text-slate-400"
                  : "bg-slate-200 text-slate-600"
              }`}
          >
            {question.type === "multiple" ? t("exam.multiple") : t("exam.single")}
          </span>
          <span
            className={`text-xs font-medium px-2 py-1 ${categoryColors[question.category].bg
              } ${categoryColors[question.category].text}`}
          >
            {categoryLabels[question.category][language]}
          </span>
          <span className={`text-xs ${theme === "dark" ? "text-slate-500" : "text-slate-400"
            }`}>
            {t("exam.question")} {currentIndex + 1}
          </span>
        </div>

        {/* 問題文 */}
        <div className="mb-6">
          <p className={`text-lg leading-relaxed font-medium ${theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
            {getLocalizedText(question.question, language)}
          </p>
        </div>

        {/* 選択肢 - 1つのコンテナにまとめる */}
        <div className={`backdrop-blur-sm border overflow-hidden ${theme === "dark"
            ? "bg-slate-900/60 border-slate-700/50"
            : "bg-white/80 border-slate-200"
          }`}>
          {question.choices.map((choice, index) => {
            const isSelected = selectedAnswers.includes(choice.id);
            const isLast = index === question.choices.length - 1;
            return (
              <button
                key={choice.id}
                onClick={() => onSelectAnswer(choice.id)}
                className={`w-full text-left p-4 transition-all duration-200 active:scale-[1.02] ${!isLast ? `border-b ${theme === "dark" ? "border-slate-700/50" : "border-slate-200"}` : ""
                  } ${isSelected
                    ? theme === "dark"
                      ? "bg-emerald-500/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10 relative"
                      : "bg-emerald-50 text-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.2)] z-10 relative"
                    : theme === "dark"
                      ? "bg-transparent text-slate-300 hover:bg-slate-800/50"
                      : "bg-transparent text-slate-700 hover:bg-slate-50"
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {question.type === "multiple" ? (
                      isSelected ? (
                        <CheckSquare className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Square className={`w-5 h-5 ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                          }`} />
                      )
                    ) : isSelected ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Circle className={`w-5 h-5 ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                        }`} />
                    )}
                  </div>
                  <span className="flex-1 leading-relaxed">{getLocalizedText(choice.text, language)}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* TOPに戻るボタン */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowBackToTopConfirm(true)}
            className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-full transition-colors ${theme === "dark"
                ? "text-slate-500 hover:text-slate-300"
                : "text-slate-400 hover:text-slate-600"
              }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>{language === "ja" ? "TOPに戻る" : "Back to TOP"}</span>
          </button>
        </div>
      </main>

      {/* フッター - ナビゲーション */}
      <footer className={`sticky bottom-0 backdrop-blur-md border-t p-4 pb-8 space-y-3 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] ${theme === "dark"
          ? "bg-slate-900/90 border-slate-800"
          : "bg-white/90 border-slate-200"
        }`}>
        {/* 見直しフラグボタン */}
        <button
          onClick={onToggleFlag}
          className={`w-full py-3 px-4 rounded-full border transition-all flex items-center justify-center gap-2 ${isFlagged
              ? "bg-amber-500/15 border-amber-500/60 text-amber-500"
              : theme === "dark"
                ? "bg-slate-900/60 border-slate-700/50 text-slate-400 hover:bg-slate-800/50"
                : "bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200"
            }`}
        >
          <Flag className={`w-5 h-5 ${isFlagged ? "fill-current" : ""}`} />
          <span className="font-medium">
            {isFlagged ? t("exam.flagButton.remove") : t("exam.flagButton.add")}
          </span>
        </button>

        {/* ナビゲーションボタン */}
        <div className="flex gap-3">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`flex-1 py-3 px-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all ${isFirstQuestion
                ? theme === "dark"
                  ? "bg-slate-900/40 text-slate-600 cursor-not-allowed"
                  : "bg-slate-100 text-slate-300 cursor-not-allowed"
                : theme === "dark"
                  ? "bg-slate-900/60 border border-slate-700/50 text-white hover:bg-slate-800/60 active:scale-[0.98]"
                  : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 active:scale-[0.98]"
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
            {t("exam.prev")}
          </button>

          {isLastQuestion ? (
            <button
              onClick={onFinish}
              className="flex-1 py-3 px-4 rounded-full font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center gap-2 hover:from-emerald-400 hover:to-teal-400 active:scale-[0.98] transition-all"
            >
              {t("exam.finish")}
              <AlertTriangle className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex-1 py-3 px-4 rounded-full font-medium bg-emerald-600 text-white flex items-center justify-center gap-2 hover:bg-emerald-500 active:scale-[0.98] transition-all"
            >
              {t("exam.next")}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </footer>

      {/* 問題一覧モーダル */}
      {showQuestionList && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center">
          <div className={`w-full max-h-[80vh] border-t overflow-hidden animate-slide-up ${theme === "dark"
              ? "bg-slate-900 border-slate-700/50"
              : "bg-white border-slate-200"
            }`}>
            <div className={`sticky top-0 px-4 py-4 border-b flex items-center justify-between ${theme === "dark"
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"
              }`}>
              <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-slate-900"
                }`}>{t("exam.questionList")}</h3>
              <button
                onClick={() => setShowQuestionList(false)}
                className={`px-3 py-1 rounded-lg transition-colors ${theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                {t("exam.close")}
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-60px)]">
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: totalQuestions }, (_, i) => {
                  const answered = isAnsweredAt(i);
                  const flagged = isFlaggedAt(i);
                  const isCurrent = i === currentIndex;

                  return (
                    <button
                      key={i}
                      onClick={() => {
                        onGoToQuestion(i);
                        setShowQuestionList(false);
                      }}
                      className={`aspect-square rounded-lg font-medium text-sm flex items-center justify-center relative transition-all ${isCurrent
                          ? "bg-emerald-500 text-white ring-2 ring-emerald-400 ring-offset-2"
                          : answered
                            ? theme === "dark"
                              ? "bg-slate-700 text-white"
                              : "bg-slate-300 text-slate-900"
                            : theme === "dark"
                              ? "bg-slate-800 text-slate-400"
                              : "bg-slate-100 text-slate-500"
                        } ${isCurrent ? (theme === "dark" ? "ring-offset-slate-900" : "ring-offset-white") : ""}`}
                    >
                      {i + 1}
                      {flagged && (
                        <Flag className="absolute -top-1 -right-1 w-3 h-3 text-amber-400 fill-current" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 凡例 */}
              <div className={`mt-4 pt-4 border-t flex flex-wrap gap-4 text-xs ${theme === "dark"
                  ? "border-slate-800 text-slate-400"
                  : "border-slate-200 text-slate-500"
                }`}>
                <span className="flex items-center gap-1">
                  <span className={`w-4 h-4 rounded ${theme === "dark" ? "bg-slate-700" : "bg-slate-300"
                    }`}></span>
                  {t("exam.legend.answered")}
                </span>
                <span className="flex items-center gap-1">
                  <span className={`w-4 h-4 rounded ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"
                    }`}></span>
                  {t("exam.legend.unanswered")}
                </span>
                <span className="flex items-center gap-1">
                  <Flag className="w-3 h-3 text-amber-400 fill-current" />
                  {t("exam.legend.flagged")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOPに戻る確認モーダル */}
      {showBackToTopConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className={`p-6 max-w-sm w-full border shadow-xl animate-fade-in ${theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
            }`}>
            <h3 className={`text-xl font-bold mb-4 text-center ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {language === "ja" ? "試験を中断しますか？" : "Quit the exam?"}
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBackToTopConfirm(false)}
                className={`flex-1 py-3 px-4 rounded-full font-medium transition-colors ${theme === "dark"
                    ? "bg-slate-700 text-white hover:bg-slate-600"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
              >
                {language === "ja" ? "いいえ" : "No"}
              </button>
              <button
                onClick={() => {
                  setShowBackToTopConfirm(false);
                  onBackToTop();
                }}
                className="flex-1 py-3 px-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-400 transition-colors"
              >
                {language === "ja" ? "はい" : "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
