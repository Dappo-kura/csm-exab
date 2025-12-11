"use client";

import { useCallback, useEffect, useState } from "react";
import { StartScreen, ExamScreen, ResultScreen, HistoryScreen } from "@/components";
import { useExam } from "@/hooks/useExam";
import { useTimer } from "@/hooks/useTimer";
import { questions, getQuestions } from "@/data/questions";
import { EXAM_CONFIG } from "@/data/constants";
import { Question } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";
import { saveHistory } from "@/lib/historyStorage";

// アプリの画面状態
type AppScreen = "start" | "exam" | "result" | "history";

export default function Home() {
  // 実際の問題数（データが80問未満の場合は全問題を使用）
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  
  // 確認ダイアログの状態
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);

  // 画面状態
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("start");

  // 試験開始時刻（所要時間計算用）
  const [examStartTime, setExamStartTime] = useState<number>(0);

  // 言語設定
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

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
    setExamStartTime(Date.now());
    setCurrentScreen("exam");
  }, []);

  // 問題が設定されたら試験を開始
  useEffect(() => {
    if (examQuestions.length > 0 && exam.examState === "start") {
      exam.startExam();
      timer.start();
    }
  }, [examQuestions, exam.examState]);

  // 試験が終了したら履歴を保存
  useEffect(() => {
    if (exam.examState === "result" && exam.result) {
      // 所要時間を計算
      const timeSpent = Math.floor((Date.now() - examStartTime) / 1000);
      
      // 履歴を保存
      saveHistory({
        score: exam.result.correctCount,
        totalQuestions: exam.result.totalQuestions,
        percentage: exam.result.percentage,
        passed: exam.result.passed,
        timeSpent,
        mode: "normal",
      });

      setCurrentScreen("result");
    }
  }, [exam.examState, exam.result, examStartTime]);

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
    setCurrentScreen("start");
  }, [timer, exam]);

  // 履歴画面を表示
  const handleShowHistory = useCallback(() => {
    setCurrentScreen("history");
  }, []);

  // 履歴画面から戻る
  const handleBackFromHistory = useCallback(() => {
    setCurrentScreen("start");
  }, []);

  return (
    <main className="min-h-screen">
      {/* スタート画面 */}
      {currentScreen === "start" && (
        <StartScreen 
          onStart={handleStartExam} 
          onShowHistory={handleShowHistory}
        />
      )}

      {/* 履歴画面 */}
      {currentScreen === "history" && (
        <HistoryScreen onBack={handleBackFromHistory} />
      )}

      {/* 試験画面 */}
      {currentScreen === "exam" && exam.currentQuestion && (
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
            onBackToTop={handleRetry}
          />

          {/* 終了確認ダイアログ */}
          {showFinishConfirm && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
              <div className={`rounded-2xl p-6 max-w-sm w-full border shadow-xl animate-fade-in ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200"
              }`}>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  {t("dialog.finishTitle")}
                </h3>
                <p className={`mb-6 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}>
                  {language === "ja"
                    ? `まだ${exam.progress.total - exam.progress.answered}問が未回答です。本当に終了してよろしいですか？`
                    : `${exam.progress.total - exam.progress.answered} ${t("dialog.finishMessage")}`}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowFinishConfirm(false)}
                    className={`flex-1 py-3 px-4 rounded-full font-medium transition-colors ${
                      theme === "dark"
                        ? "bg-slate-700 text-white hover:bg-slate-600"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    {t("dialog.back")}
                  </button>
                  <button
                    onClick={handleConfirmFinish}
                    className="flex-1 py-3 px-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-400 transition-colors"
                  >
                    {t("dialog.finish")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* 結果画面 */}
      {currentScreen === "result" && exam.result && (
        <ResultScreen
          result={exam.result}
          questions={examQuestions}
          onRetry={handleRetry}
        />
      )}
    </main>
  );
}
