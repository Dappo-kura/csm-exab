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
import { ExamResult, Question } from "@/types";
import { EXAM_CONFIG } from "@/data/constants";

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

  const wrongQuestions = questions.filter((q, index) => {
    const userAnswer = result.answers[index];
    // 両方向でチェック: ユーザーの回答と正答が完全に一致するか
    const userSet = new Set(userAnswer.selectedAnswers);
    const correctSet = new Set(q.correctAnswers);
    const isCorrect =
      userSet.size === correctSet.size &&
      [...userSet].every((ans) => correctSet.has(ans));
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* ヘッダー - 合否表示 */}
      <header className="pt-8 pb-6 px-4 text-center">
        <div
          className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            result.passed
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
          className={`text-3xl font-bold mb-2 ${
            result.passed ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {result.passed ? "合格！" : "不合格"}
        </h1>
        
        <p className="text-slate-400">
          {result.passed
            ? "おめでとうございます！素晴らしい結果です。"
            : "もう少しです。復習して再チャレンジしましょう。"}
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 pb-8">
        {/* スコアカード */}
        <section className="bg-slate-800/50 backdrop-blur rounded-2xl p-5 mb-4 border border-slate-700/50">
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
                  className="text-slate-700"
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
                  className={`text-3xl font-bold ${
                    result.passed ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {result.percentage}%
                </span>
                <span className="text-xs text-slate-500">正答率</span>
              </div>
            </div>
          </div>

          {/* 詳細スコア */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-400 text-sm">正解</span>
              </div>
              <p className="text-2xl font-bold text-emerald-400">
                {result.correctCount}
                <span className="text-sm text-slate-500 font-normal">
                  /{result.totalQuestions}問
                </span>
              </p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-slate-400 text-sm">不正解</span>
              </div>
              <p className="text-2xl font-bold text-red-400">
                {result.wrongCount}
                <span className="text-sm text-slate-500 font-normal">
                  /{result.totalQuestions}問
                </span>
              </p>
            </div>
          </div>

          {/* 合格ライン表示 */}
          <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-center gap-2 text-sm">
            <Target className="w-4 h-4 text-slate-500" />
            <span className="text-slate-500">
              合格ライン: {EXAM_CONFIG.PASSING_SCORE}%
            </span>
          </div>
        </section>

        {/* 間違えた問題セクション */}
        {wrongQuestions.length > 0 && (
          <section className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50 overflow-hidden">
            <button
              onClick={() => setShowWrongAnswers(!showWrongAnswers)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-white font-medium">間違えた問題</span>
                  <span className="text-slate-500 text-sm ml-2">
                    ({wrongQuestions.length}問)
                  </span>
                </div>
              </div>
              {showWrongAnswers ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {showWrongAnswers && (
              <div className="border-t border-slate-700/50">
                {wrongQuestions.map((question) => {
                  const questionIndex = getQuestionIndex(question.id);
                  const userAnswer = result.answers[questionIndex];
                  const isExpanded = expandedQuestions.has(question.id);

                  return (
                    <div
                      key={question.id}
                      className="border-b border-slate-700/50 last:border-b-0"
                    >
                      <button
                        onClick={() => toggleExpanded(question.id)}
                        className="w-full px-5 py-4 text-left hover:bg-slate-700/20 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-slate-400 text-xs flex items-center justify-center font-medium">
                            {questionIndex + 1}
                          </span>
                          <p className="text-slate-300 text-sm line-clamp-2 flex-1">
                            {question.question}
                          </p>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
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
                              const wasSelected = userAnswer.selectedAnswers.includes(
                                choice.id
                              );

                              return (
                                <div
                                  key={choice.id}
                                  className={`text-sm px-3 py-2 rounded-lg ${
                                    isCorrect
                                      ? "bg-emerald-500/10 border border-emerald-500/30"
                                      : wasSelected
                                      ? "bg-red-500/10 border border-red-500/30"
                                      : "bg-slate-700/30"
                                  }`}
                                >
                                  <div className="flex items-start gap-2">
                                    {isCorrect && (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    )}
                                    {wasSelected && !isCorrect && (
                                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                    )}
                                    {!isCorrect && !wasSelected && (
                                      <div className="w-4 h-4 flex-shrink-0" />
                                    )}
                                    <span
                                      className={
                                        isCorrect
                                          ? "text-emerald-300"
                                          : wasSelected
                                          ? "text-red-300"
                                          : "text-slate-400"
                                      }
                                    >
                                      {choice.text}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* 解説 */}
                          <div className="bg-slate-700/30 rounded-lg p-3 border-l-2 border-amber-500/50">
                            <p className="text-xs text-amber-400 font-medium mb-1">
                              解説
                            </p>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {question.explanation}
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
      <footer className="sticky bottom-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent pt-8">
        <button
          onClick={onRetry}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/25 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <RotateCcw className="w-6 h-6" />
          もう一度挑戦する
        </button>
      </footer>
    </div>
  );
}

