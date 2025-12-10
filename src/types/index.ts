// 問題の種類
export type QuestionType = "single" | "multiple";

// カテゴリの種類
export type QuestionCategory =
  | "basics"        // スクラムの基礎
  | "roles"         // スクラムチームの役割
  | "events"        // スクラムイベント
  | "artifacts"     // 作成物とコミットメント
  | "situation"     // シチュエーション問題
  | "tricky"        // 引っかけ問題
  | "deep"          // 深掘り問題
  | "comprehensive" // 総合問題
  | "psm2";         // PSM II

// カテゴリ名の日本語マッピング
export const categoryLabels: Record<QuestionCategory, string> = {
  basics: "基礎",
  roles: "役割",
  events: "イベント",
  artifacts: "作成物",
  situation: "シチュエーション",
  tricky: "引っかけ",
  deep: "深掘り",
  comprehensive: "総合",
  psm2: "PSM II",
};

// カテゴリの色設定
export const categoryColors: Record<QuestionCategory, { bg: string; text: string }> = {
  basics: { bg: "bg-blue-500/20", text: "text-blue-400" },
  roles: { bg: "bg-cyan-500/20", text: "text-cyan-400" },
  events: { bg: "bg-green-500/20", text: "text-green-400" },
  artifacts: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
  situation: { bg: "bg-orange-500/20", text: "text-orange-400" },
  tricky: { bg: "bg-red-500/20", text: "text-red-400" },
  deep: { bg: "bg-violet-500/20", text: "text-violet-400" },
  comprehensive: { bg: "bg-pink-500/20", text: "text-pink-400" },
  psm2: { bg: "bg-indigo-500/20", text: "text-indigo-400" },
};

// 選択肢
export interface Choice {
  id: string;
  text: string;
}

// 問題データ
export interface Question {
  id: number;
  type: QuestionType; // single: 単一選択, multiple: 複数選択
  category: QuestionCategory; // 問題カテゴリ
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
