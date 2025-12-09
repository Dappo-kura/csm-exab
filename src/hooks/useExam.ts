"use client";

import { useState, useCallback, useMemo } from "react";
import { Question, UserAnswer, ExamResult, ExamState } from "@/types";
import { EXAM_CONFIG } from "@/data/constants";

interface UseExamProps {
  questions: Question[];
}

interface UseExamReturn {
  // 状態
  examState: ExamState;
  currentIndex: number;
  answers: UserAnswer[];
  result: ExamResult | null;

  // 現在の問題
  currentQuestion: Question | null;

  // 進捗情報
  progress: {
    current: number;
    total: number;
    answered: number;
    flagged: number;
  };

  // アクション
  startExam: () => void;
  goToQuestion: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  selectAnswer: (choiceId: string) => void;
  toggleFlag: () => void;
  finishExam: () => void;
  resetExam: () => void;

  // ヘルパー
  isAnswered: (questionIndex: number) => boolean;
  isFlagged: (questionIndex: number) => boolean;
  getSelectedAnswers: (questionIndex: number) => string[];
}

export function useExam({ questions }: UseExamProps): UseExamReturn {
  const [examState, setExamState] = useState<ExamState>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [result, setResult] = useState<ExamResult | null>(null);

  // 回答の初期化
  const initializeAnswers = useCallback(() => {
    return questions.map((q) => ({
      questionId: q.id,
      selectedAnswers: [],
      flagged: false,
    }));
  }, [questions]);

  // 試験開始
  const startExam = useCallback(() => {
    setAnswers(initializeAnswers());
    setCurrentIndex(0);
    setResult(null);
    setExamState("exam");
  }, [initializeAnswers]);

  // 問題移動
  const goToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < questions.length) {
        setCurrentIndex(index);
      }
    },
    [questions.length]
  );

  const goToNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // 回答選択
  const selectAnswer = useCallback(
    (choiceId: string) => {
      setAnswers((prev) => {
        const newAnswers = [...prev];
        const currentQuestion = questions[currentIndex];
        const currentAnswer = newAnswers[currentIndex];

        if (currentQuestion.type === "single") {
          // 単一選択: 選択肢を置き換え
          newAnswers[currentIndex] = {
            ...currentAnswer,
            selectedAnswers: [choiceId],
          };
        } else {
          // 複数選択: トグル
          const index = currentAnswer.selectedAnswers.indexOf(choiceId);
          if (index === -1) {
            newAnswers[currentIndex] = {
              ...currentAnswer,
              selectedAnswers: [...currentAnswer.selectedAnswers, choiceId],
            };
          } else {
            newAnswers[currentIndex] = {
              ...currentAnswer,
              selectedAnswers: currentAnswer.selectedAnswers.filter(
                (id) => id !== choiceId
              ),
            };
          }
        }

        return newAnswers;
      });
    },
    [currentIndex, questions]
  );

  // フラグ切り替え
  const toggleFlag = useCallback(() => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = {
        ...newAnswers[currentIndex],
        flagged: !newAnswers[currentIndex].flagged,
      };
      return newAnswers;
    });
  }, [currentIndex]);

  // 試験終了・採点
  const finishExam = useCallback(() => {
    let correctCount = 0;

    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      // 両方向でチェック: ユーザーの回答と正答が完全に一致するか
      const userSet = new Set(userAnswer.selectedAnswers);
      const correctSet = new Set(question.correctAnswers);
      const isCorrect =
        userSet.size === correctSet.size &&
        Array.from(userSet).every((ans) => correctSet.has(ans));

      if (isCorrect) {
        correctCount++;
      }
    });

    const totalQuestions = questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    setResult({
      totalQuestions,
      correctCount,
      wrongCount: totalQuestions - correctCount,
      percentage,
      passed: percentage >= EXAM_CONFIG.PASSING_SCORE,
      answers: [...answers],
    });

    setExamState("result");
  }, [questions, answers]);

  // リセット
  const resetExam = useCallback(() => {
    setExamState("start");
    setCurrentIndex(0);
    setAnswers([]);
    setResult(null);
  }, []);

  // ヘルパー関数
  const isAnswered = useCallback(
    (questionIndex: number) => {
      return (
        answers[questionIndex]?.selectedAnswers.length > 0
      );
    },
    [answers]
  );

  const isFlagged = useCallback(
    (questionIndex: number) => {
      return answers[questionIndex]?.flagged ?? false;
    },
    [answers]
  );

  const getSelectedAnswers = useCallback(
    (questionIndex: number) => {
      return answers[questionIndex]?.selectedAnswers ?? [];
    },
    [answers]
  );

  // 現在の問題
  const currentQuestion = questions[currentIndex] ?? null;

  // 進捗情報
  const progress = useMemo(() => {
    return {
      current: currentIndex + 1,
      total: questions.length,
      answered: answers.filter((a) => a.selectedAnswers.length > 0).length,
      flagged: answers.filter((a) => a.flagged).length,
    };
  }, [currentIndex, questions.length, answers]);

  return {
    examState,
    currentIndex,
    answers,
    result,
    currentQuestion,
    progress,
    startExam,
    goToQuestion,
    goToNext,
    goToPrevious,
    selectAnswer,
    toggleFlag,
    finishExam,
    resetExam,
    isAnswered,
    isFlagged,
    getSelectedAnswers,
  };
}

