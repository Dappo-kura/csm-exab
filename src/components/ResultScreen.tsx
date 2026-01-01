"use client";

import { useState } from "react";
import {
  Trophy,
  XCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Target,
  BookOpen,
} from "lucide-react";
import { ExamResult, Question, categoryLabels, categoryColors, getLocalizedText } from "@/types";
import { EXAM_CONFIG } from "@/data/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";

interface ResultScreenProps {
  result: ExamResult;
  questions: Question[];
  onRetry: () => void;
}

export function ResultScreen({ result, questions, onRetry }: ResultScreenProps) {
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(
    new Set()
  );
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

  // questionIdで回答を検索するヘルパー関数
  const getUserAnswerByQuestionId = (questionId: number) => {
    return result.answers.find((a) => a.questionId === questionId);
  };

  const wrongQuestions = questions.filter((q) => {
    const userAnswer = getUserAnswerByQuestionId(q.id);
    if (!userAnswer) return true; // 回答が見つからない場合は不正解扱い
    // 両方向でチェック: ユーザーの回答と正答が完全に一致するか
    const userSet = new Set(userAnswer.selectedAnswers);
    const correctSet = new Set(q.correctAnswers);
    const isCorrect =
      userSet.size === correctSet.size &&
      Array.from(userSet).every((ans) => correctSet.has(ans));
    return !isCorrect;
  });

  const toggleExpanded = (questionId: number) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const getQuestionIndex = (questionId: number) => {
    return questions.findIndex((q) => q.id === questionId);
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark"
      ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
      }`}>
      {/* ヘッダー - 合否表示 */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div
          className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${result.passed
            ? "bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30"
            : "bg-gradient-to-br from-red-400 to-rose-500 shadow-lg shadow-red-500/30"
            }`}
        >
          {result.passed ? (
            <Trophy className="w-10 h-10 text-white" />
          ) : (
            <XCircle className="w-10 h-10 text-white" />
          )}
        </div>

        <h1
          className={`text-3xl font-bold mb-2 ${result.passed ? "text-emerald-500" : "text-red-500"
            }`}
        >
          {result.passed ? t("result.passed") : t("result.failed")}
        </h1>

        <p className={theme === "dark" ? "text-slate-400" : "text-slate-500"}>
          {result.passed
            ? t("result.passedMessage")
            : t("result.failedMessage")}
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 pb-8">
        {/* スコアカード */}
        <section className={`backdrop-blur-sm p-5 mb-4 border ${theme === "dark"
          ? "bg-slate-900/60 border-slate-700/50"
          : "bg-white/80 border-slate-200"
          }`}>
          {/* 正答率の円グラフ風表示 */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className={theme === "dark" ? "text-slate-700" : "text-slate-200"}
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeDasharray={`${(result.percentage / 100) * 352} 352`}
                  strokeLinecap="round"
                  className={
                    result.passed ? "text-emerald-500" : "text-red-500"
                  }
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className={`text-3xl font-bold ${result.passed ? "text-emerald-500" : "text-red-500"
                    }`}
                >
                  {result.percentage}%
                </span>
                <span className={`text-xs ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                  }`}>{t("result.percentage")}</span>
              </div>
            </div>
          </div>

          {/* 詳細スコア */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 text-center ${theme === "dark" ? "bg-slate-800/60" : "bg-slate-100"
              }`}>
              <div className="flex items-center justify-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}>{t("result.correct")}</span>
              </div>
              <p className="text-2xl font-bold text-emerald-500">
                {result.correctCount}
                <span className={`text-sm font-normal ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                  }`}>
                  /{result.totalQuestions}
                </span>
              </p>
            </div>
            <div className={`p-4 text-center ${theme === "dark" ? "bg-slate-800/60" : "bg-slate-100"
              }`}>
              <div className="flex items-center justify-center gap-2 mb-1">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}>{t("result.wrong")}</span>
              </div>
              <p className="text-2xl font-bold text-red-500">
                {result.wrongCount}
                <span className={`text-sm font-normal ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                  }`}>
                  /{result.totalQuestions}
                </span>
              </p>
            </div>
          </div>

          {/* 合格ライン表示 */}
          <div className={`mt-4 pt-4 border-t flex items-center justify-center gap-2 text-sm ${theme === "dark"
            ? "border-slate-700/50 text-slate-500"
            : "border-slate-200 text-slate-400"
            }`}>
            <Target className="w-4 h-4" />
            <span>
              {t("result.passingLine")}: {EXAM_CONFIG.PASSING_SCORE}%
            </span>
          </div>
        </section>

        {/* 間違えた問題セクション */}
        {wrongQuestions.length > 0 && (
          <section className={`backdrop-blur-sm border overflow-hidden ${theme === "dark"
            ? "bg-slate-900/60 border-slate-700/50"
            : "bg-white/80 border-slate-200"
            }`}>
            <button
              onClick={() => setShowWrongAnswers(!showWrongAnswers)}
              className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors ${theme === "dark"
                ? "hover:bg-slate-700/30"
                : "hover:bg-slate-50"
                }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-amber-500" />
                <div>
                  <span className={`font-medium ${theme === "dark" ? "text-white" : "text-slate-900"
                    }`}>{t("result.wrongQuestions")}</span>
                  <span className={`text-sm ml-2 ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                    }`}>
                    ({wrongQuestions.length})
                  </span>
                </div>
              </div>
              {showWrongAnswers ? (
                <ChevronUp className={`w-5 h-5 ${theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`} />
              ) : (
                <ChevronDown className={`w-5 h-5 ${theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`} />
              )}
            </button>

            {showWrongAnswers && (
              <div className={`border-t ${theme === "dark" ? "border-slate-700/50" : "border-slate-200"
                }`}>
                {wrongQuestions.map((question) => {
                  const questionIndex = getQuestionIndex(question.id);
                  const userAnswer = getUserAnswerByQuestionId(question.id);
                  const isExpanded = expandedQuestions.has(question.id);

                  return (
                    <div
                      key={question.id}
                      className={`border-b last:border-b-0 ${theme === "dark" ? "border-slate-700/50" : "border-slate-200"
                        }`}
                    >
                      <button
                        onClick={() => toggleExpanded(question.id)}
                        className={`w-full px-5 py-4 text-left transition-colors ${theme === "dark"
                          ? "hover:bg-slate-700/20"
                          : "hover:bg-slate-50"
                          }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium ${theme === "dark"
                            ? "bg-slate-700 text-slate-400"
                            : "bg-slate-200 text-slate-600"
                            }`}>
                            {questionIndex + 1}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-xs font-medium px-1.5 py-0.5 ${categoryColors[question.category].bg
                                  } ${categoryColors[question.category].text}`}
                              >
                                {categoryLabels[question.category][language]}
                              </span>
                            </div>
                            <p className={`text-sm line-clamp-2 ${theme === "dark" ? "text-slate-300" : "text-slate-600"
                              }`}>
                              {getLocalizedText(question.question, language)}
                            </p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className={`w-4 h-4 flex-shrink-0 ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                              }`} />
                          ) : (
                            <ChevronDown className={`w-4 h-4 flex-shrink-0 ${theme === "dark" ? "text-slate-500" : "text-slate-400"
                              }`} />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-4 space-y-3">
                          {/* 選択肢と回答 */}
                          <div className="space-y-2">
                            {question.choices.map((choice) => {
                              const isCorrect = question.correctAnswers.includes(
                                choice.id
                              );
                              const wasSelected = userAnswer?.selectedAnswers.includes(
                                choice.id
                              ) ?? false;

                              return (
                                <div
                                  key={choice.id}
                                  className={`text-sm px-3 py-2 ${isCorrect
                                    ? "bg-emerald-500/15 border border-emerald-500/40"
                                    : wasSelected
                                      ? "bg-red-500/15 border border-red-500/40"
                                      : theme === "dark"
                                        ? "bg-slate-800/50"
                                        : "bg-slate-100"
                                    }`}
                                >
                                  <div className="flex items-start gap-2">
                                    {isCorrect && (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    {wasSelected && !isCorrect && (
                                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    {!isCorrect && !wasSelected && (
                                      <div className="w-4 h-4 flex-shrink-0" />
                                    )}
                                    <span
                                      className={
                                        isCorrect
                                          ? "text-emerald-600"
                                          : wasSelected
                                            ? "text-red-600"
                                            : theme === "dark"
                                              ? "text-slate-400"
                                              : "text-slate-500"
                                      }
                                    >
                                      {getLocalizedText(choice.text, language)}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* 解説 */}
                          <div className={`p-3 border-l-2 border-amber-500/50 ${theme === "dark" ? "bg-slate-800/50" : "bg-amber-50"
                            }`}>
                            <p className="text-xs text-amber-600 font-medium mb-1">
                              {t("result.explanation")}
                            </p>
                            <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"
                              }`}>
                              {getLocalizedText(question.explanation, language)}
                            </p>
                          </div>

                          {/* デバッグ情報 */}
                          <div className={`mt-2 p-3 rounded text-sm ${theme === "dark" ? "bg-slate-800/70" : "bg-slate-100"
                            }`}>
                            <p className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                              {language === "ja" ? "あなたの回答" : "Your answer"}:
                              <span className="font-mono ml-1 text-red-500">
                                [{userAnswer?.selectedAnswers.slice().sort().join(", ") || (language === "ja" ? "未回答" : "No answer")}]
                              </span>
                            </p>
                            <p className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                              {language === "ja" ? "正答" : "Correct answer"}:
                              <span className="font-mono ml-1 text-emerald-500">
                                [{question.correctAnswers.slice().sort().join(", ")}]
                              </span>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}
      </main>

      {/* フッター - リトライボタン */}
      <footer className={`sticky bottom-0 p-4 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-8 ${theme === "dark"
        ? "bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent"
        : "bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent"
        }`} style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1.5rem)' }}>
        <button
          onClick={onRetry}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <RotateCcw className="w-6 h-6" />
          {t("result.retry")}
        </button>
      </footer>
    </div>
  );
}
