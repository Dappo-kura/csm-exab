/**
 * 学習履歴の LocalStorage 管理
 */

// 履歴のレコード型
export interface ExamHistoryRecord {
  id: string;
  date: string; // ISO形式の日時
  score: number; // 正答数
  totalQuestions: number; // 総問題数
  percentage: number; // 正答率
  passed: boolean; // 合格したか
  timeSpent: number; // 所要時間（秒）
  mode: "normal" | "category" | "review"; // 試験モード
  categoryId?: string; // カテゴリー別の場合のカテゴリーID
}

// LocalStorageのキー
const STORAGE_KEY = "psm-exam-history";

// 最大保存件数
const MAX_HISTORY_COUNT = 100;

/**
 * 履歴を取得
 */
export function getHistory(): ExamHistoryRecord[] {
  if (typeof window === "undefined") return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as ExamHistoryRecord[];
  } catch (error) {
    console.error("Failed to load history:", error);
    return [];
  }
}

/**
 * 履歴を保存
 */
export function saveHistory(record: Omit<ExamHistoryRecord, "id" | "date">): ExamHistoryRecord {
  const history = getHistory();
  
  const newRecord: ExamHistoryRecord = {
    ...record,
    id: generateId(),
    date: new Date().toISOString(),
  };
  
  // 新しい記録を先頭に追加
  const updatedHistory = [newRecord, ...history];
  
  // 最大件数を超えた場合は古いものを削除
  const trimmedHistory = updatedHistory.slice(0, MAX_HISTORY_COUNT);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedHistory));
  } catch (error) {
    console.error("Failed to save history:", error);
  }
  
  return newRecord;
}

/**
 * 特定の履歴を削除
 */
export function deleteHistoryRecord(id: string): void {
  const history = getHistory();
  const updatedHistory = history.filter((record) => record.id !== id);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error("Failed to delete history record:", error);
  }
}

/**
 * 全履歴を削除
 */
export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear history:", error);
  }
}

/**
 * ユニークIDを生成
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * 所要時間をフォーマット
 */
export function formatTimeSpent(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

/**
 * 日時をフォーマット（日本語）
 */
export function formatDateJa(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * 日時をフォーマット（英語）
 */
export function formatDateEn(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

