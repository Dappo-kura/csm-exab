/**
 * 間違えた問題の LocalStorage 管理
 */

// LocalStorageのキー
const STORAGE_KEY = "psm-exam-wrong-questions";

// 設定のキー
const SETTINGS_KEY = "psm-exam-review-settings";

// 復習設定
export interface ReviewSettings {
  removeOnCorrect: boolean; // 正解したら復習リストから削除するか
}

// デフォルト設定
const DEFAULT_SETTINGS: ReviewSettings = {
  removeOnCorrect: true,
};

/**
 * 間違えた問題のIDリストを取得
 */
export function getWrongQuestionIds(): number[] {
  if (typeof window === "undefined") return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as number[];
  } catch (error) {
    console.error("Failed to load wrong questions:", error);
    return [];
  }
}

/**
 * 間違えた問題を追加
 */
export function addWrongQuestions(questionIds: number[]): void {
  const current = getWrongQuestionIds();
  // 重複を除去（Array.fromを使用してSetを配列に変換）
  const combined = current.concat(questionIds);
  const newIds = Array.from(new Set(combined));
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newIds));
  } catch (error) {
    console.error("Failed to save wrong questions:", error);
  }
}

/**
 * 正解した問題を復習リストから削除
 */
export function removeCorrectQuestions(questionIds: number[]): void {
  const current = getWrongQuestionIds();
  const updated = current.filter((id) => !questionIds.includes(id));
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to update wrong questions:", error);
  }
}

/**
 * 特定の問題を復習リストから削除
 */
export function removeWrongQuestion(questionId: number): void {
  const current = getWrongQuestionIds();
  const updated = current.filter((id) => id !== questionId);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to remove wrong question:", error);
  }
}

/**
 * 全ての間違えた問題をクリア
 */
export function clearWrongQuestions(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear wrong questions:", error);
  }
}

/**
 * 復習設定を取得
 */
export function getReviewSettings(): ReviewSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    if (!data) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
  } catch (error) {
    console.error("Failed to load review settings:", error);
    return DEFAULT_SETTINGS;
  }
}

/**
 * 復習設定を保存
 */
export function saveReviewSettings(settings: Partial<ReviewSettings>): void {
  const current = getReviewSettings();
  const updated = { ...current, ...settings };
  
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to save review settings:", error);
  }
}

