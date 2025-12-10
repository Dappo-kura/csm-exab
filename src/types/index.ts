// 問題の種類
export type QuestionType = "single" | "multiple";

// 選択肢
export interface Choice {
  id: string;
  text: string;
}

// 問題データ
export interface Question {
  id: number;
  type: QuestionType; // single: 単一選択, multiple: 複数選択
  question: string;
  choices: Choice[];
  correctAnswers: string[]; // 正解の選択肢ID配列
  explanation: string; // 解説
}

// ユーザーの回答
export interface UserAnswer {
  questionId: number;
  selectedAnswers: string[];
  flagged: boolean; // 見直しフラグ
}

// 試験状態
export type ExamState = "start" | "exam" | "result";

// 試験結果
export interface ExamResult {
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  percentage: number;
  passed: boolean;
  answers: UserAnswer[];
}



