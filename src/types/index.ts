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

// カテゴリ名の多言語マッピング
export const categoryLabels: Record<QuestionCategory, { ja: string; en: string }> = {
  basics: { ja: "基礎", en: "Basics" },
  roles: { ja: "役割", en: "Roles" },
  events: { ja: "イベント", en: "Events" },
  artifacts: { ja: "作成物", en: "Artifacts" },
  situation: { ja: "シチュエーション", en: "Situation" },
  tricky: { ja: "引っかけ", en: "Tricky" },
  deep: { ja: "深掘り", en: "Deep Dive" },
  comprehensive: { ja: "総合", en: "Comprehensive" },
  psm2: { ja: "PSM II", en: "PSM II" },
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

// 多言語テキスト型
export interface LocalizedText {
  ja: string;
  en: string;
}

// 選択肢（多言語対応）
export interface Choice {
  id: string;
  text: string | LocalizedText;
}

// 問題データ（多言語対応）
export interface Question {
  id: number;
  type: QuestionType; // single: 単一選択, multiple: 複数選択
  category: QuestionCategory; // 問題カテゴリ
  question: string | LocalizedText;
  choices: Choice[];
  correctAnswers: string[]; // 正解の選択肢ID配列
  explanation: string | LocalizedText; // 解説
}

// 言語に応じたテキストを取得するヘルパー関数
export function getLocalizedText(
  text: string | LocalizedText,
  language: "ja" | "en"
): string {
  if (typeof text === "string") {
    return text;
  }
  return text[language];
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
