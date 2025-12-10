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
} from "lucide-react";
import { Question, categoryLabels, categoryColors } from "@/types";
import { useState } from "react";

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
}: ExamScreenProps) {
  const [showQuestionList, setShowQuestionList] = useState(false);
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const isFirstQuestion = currentIndex === 0;

  // 残り時間が5分以下で警告色
  const isTimeWarning = remainingSeconds <= 300;
  // 残り時間が1分以下で危険色
  const isTimeDanger = remainingSeconds <= 60;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* 固定ヘッダー */}
      <header className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="px-4 py-3">
          {/* 上段: タイマーと問題リストボタン */}
          <div className="flex items-center justify-between mb-2">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                isTimeDanger
                  ? "bg-red-500/20 text-red-400"
                  : isTimeWarning
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-slate-800 text-white"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span className="font-mono font-bold text-lg">{formattedTime}</span>
            </div>
            <button
              onClick={() => setShowQuestionList(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors"
            >
              <Grid3X3 className="w-4 h-4" />
              <span className="text-sm font-medium">問題一覧</span>
            </button>
          </div>

          {/* 下段: 進捗バー */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>
            <span className="text-sm text-slate-400 whitespace-nowrap">
              {currentIndex + 1}/{totalQuestions}
            </span>
          </div>

          {/* 統計情報 */}
          <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              回答済: {answeredCount}
            </span>
            {flaggedCount > 0 && (
              <span className="flex items-center gap-1">
                <Flag className="w-3 h-3 text-amber-500" />
                見直し: {flaggedCount}
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
            className={`text-xs font-medium px-2 py-1 rounded-md ${
              question.type === "multiple"
                ? "bg-purple-500/20 text-purple-400"
                : "bg-slate-700 text-slate-400"
            }`}
          >
            {question.type === "multiple" ? "複数選択" : "単一選択"}
          </span>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-md ${
              categoryColors[question.category].bg
            } ${categoryColors[question.category].text}`}
          >
            {categoryLabels[question.category]}
          </span>
          <span className="text-xs text-slate-500">
            問題 {currentIndex + 1}
          </span>
        </div>

        {/* 問題文 */}
        <div className="mb-6">
          <p className="text-white text-lg leading-relaxed font-medium">
            {question.question}
          </p>
        </div>

        {/* 選択肢 */}
        <div className="space-y-3">
          {question.choices.map((choice) => {
            const isSelected = selectedAnswers.includes(choice.id);
            return (
              <button
                key={choice.id}
                onClick={() => onSelectAnswer(choice.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 active:scale-[0.98] ${
                  isSelected
                    ? "bg-emerald-500/10 border-emerald-500 text-white"
                    : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {question.type === "multiple" ? (
                      isSelected ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" />
                      )
                    ) : isSelected ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500" />
                    )}
                  </div>
                  <span className="flex-1 leading-relaxed">{choice.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* フッター - ナビゲーション */}
      <footer className="sticky bottom-0 bg-slate-900/95 backdrop-blur border-t border-slate-800 p-4 space-y-3">
        {/* 見直しフラグボタン */}
        <button
          onClick={onToggleFlag}
          className={`w-full py-3 px-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
            isFlagged
              ? "bg-amber-500/10 border-amber-500 text-amber-400"
              : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600"
          }`}
        >
          <Flag className={`w-5 h-5 ${isFlagged ? "fill-current" : ""}`} />
          <span className="font-medium">
            {isFlagged ? "見直しマークを外す" : "あとで見直す"}
          </span>
        </button>

        {/* ナビゲーションボタン */}
        <div className="flex gap-3">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`flex-1 py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
              isFirstQuestion
                ? "bg-slate-800/30 text-slate-600 cursor-not-allowed"
                : "bg-slate-800 text-white hover:bg-slate-700 active:scale-[0.98]"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            前へ
          </button>
          
          {isLastQuestion ? (
            <button
              onClick={onFinish}
              className="flex-1 py-3 px-4 rounded-xl font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center gap-2 hover:from-emerald-400 hover:to-teal-400 active:scale-[0.98] transition-all"
            >
              試験終了
              <AlertTriangle className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex-1 py-3 px-4 rounded-xl font-medium bg-emerald-600 text-white flex items-center justify-center gap-2 hover:bg-emerald-500 active:scale-[0.98] transition-all"
            >
              次へ
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </footer>

      {/* 問題一覧モーダル */}
      {showQuestionList && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center">
          <div className="bg-slate-900 w-full max-h-[80vh] rounded-t-3xl border-t border-slate-700 overflow-hidden animate-slide-up">
            <div className="sticky top-0 bg-slate-900 px-4 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">問題一覧</h3>
              <button
                onClick={() => setShowQuestionList(false)}
                className="text-slate-400 hover:text-white transition-colors px-3 py-1"
              >
                閉じる
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
                      className={`aspect-square rounded-lg font-medium text-sm flex items-center justify-center relative transition-all ${
                        isCurrent
                          ? "bg-emerald-500 text-white ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-900"
                          : answered
                          ? "bg-slate-700 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
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
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                  回答済み
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-4 h-4 rounded bg-slate-800"></span>
                  未回答
                </span>
                <span className="flex items-center gap-1">
                  <Flag className="w-3 h-3 text-amber-400 fill-current" />
                  見直し
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



