"use client";

import { useCallback, useEffect, useState } from "react";
import { StartScreen, ExamScreen, ResultScreen } from "@/components";
import { useExam } from "@/hooks/useExam";
import { useTimer } from "@/hooks/useTimer";
import { questions, getQuestions } from "@/data/questions";
import { EXAM_CONFIG } from "@/data/constants";
import { Question } from "@/types";

export default function Home() {
  // 実際の問題数（データが80問未満の場合は全問題を使用）
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  
  // 確認ダイアログの状態
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);

  // 試験管理フック
  const exam = useExam({ questions: examQuestions });

  // タイマーフック
  const timer = useTimer({
    initialSeconds: EXAM_CONFIG.TIME_LIMIT_SECONDS,
    onTimeUp: () => {
      // 時間切れで自動終了
      exam.finishExam();
    },
  });

  // 試験開始時の処理
  const handleStartExam = useCallback(() => {
    // 問題をシャッフルして取得
    const shuffledQuestions = getQuestions(EXAM_CONFIG.TOTAL_QUESTIONS);
    setExamQuestions(shuffledQuestions);
  }, []);

  // 問題が設定されたら試験を開始
  useEffect(() => {
    if (examQuestions.length > 0 && exam.examState === "start") {
      exam.startExam();
      timer.start();
    }
  }, [examQuestions, exam.examState]);

  // 試験終了確認
  const handleFinishClick = useCallback(() => {
    const unanswered = exam.progress.total - exam.progress.answered;
    if (unanswered > 0) {
      setShowFinishConfirm(true);
    } else {
      handleConfirmFinish();
    }
  }, [exam.progress]);

  // 試験終了確定
  const handleConfirmFinish = useCallback(() => {
    setShowFinishConfirm(false);
    timer.pause();
    exam.finishExam();
  }, [timer, exam]);

  // リトライ
  const handleRetry = useCallback(() => {
    timer.reset();
    exam.resetExam();
    setExamQuestions([]);
  }, [timer, exam]);

  return (
    <main className="min-h-screen">
      {/* スタート画面 */}
      {exam.examState === "start" && (
        <StartScreen onStart={handleStartExam} />
      )}

      {/* 試験画面 */}
      {exam.examState === "exam" && exam.currentQuestion && (
        <>
          <ExamScreen
            question={exam.currentQuestion}
            currentIndex={exam.currentIndex}
            totalQuestions={exam.progress.total}
            answeredCount={exam.progress.answered}
            flaggedCount={exam.progress.flagged}
            selectedAnswers={exam.getSelectedAnswers(exam.currentIndex)}
            isFlagged={exam.isFlagged(exam.currentIndex)}
            formattedTime={timer.formattedTime}
            remainingSeconds={timer.remainingSeconds}
            onSelectAnswer={exam.selectAnswer}
            onToggleFlag={exam.toggleFlag}
            onNext={exam.goToNext}
            onPrevious={exam.goToPrevious}
            onFinish={handleFinishClick}
            onGoToQuestion={exam.goToQuestion}
            isAnsweredAt={exam.isAnswered}
            isFlaggedAt={exam.isFlagged}
          />

          {/* 終了確認ダイアログ */}
          {showFinishConfirm && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-slate-800 rounded-2xl p-6 max-w-sm w-full border border-slate-700 shadow-xl animate-fade-in">
                <h3 className="text-xl font-bold text-white mb-2">
                  試験を終了しますか？
                </h3>
                <p className="text-slate-400 mb-6">
                  まだ{exam.progress.total - exam.progress.answered}
                  問が未回答です。本当に終了してよろしいですか？
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowFinishConfirm(false)}
                    className="flex-1 py-3 px-4 bg-slate-700 text-white rounded-xl font-medium hover:bg-slate-600 transition-colors"
                  >
                    戻る
                  </button>
                  <button
                    onClick={handleConfirmFinish}
                    className="flex-1 py-3 px-4 bg-red-500 text-white rounded-xl font-medium hover:bg-red-400 transition-colors"
                  >
                    終了する
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* 結果画面 */}
      {exam.examState === "result" && exam.result && (
        <ResultScreen
          result={exam.result}
          questions={examQuestions}
          onRetry={handleRetry}
        />
      )}
    </main>
  );
}


