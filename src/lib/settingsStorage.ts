/**
 * アプリ設定の LocalStorage 管理
 */

// LocalStorageのキー
const STORAGE_KEY = "psm-exam-settings";

// 設定の型
export interface AppSettings {
  shuffleQuestions: boolean; // 問題の順番をシャッフルするか
  shuffleChoices: boolean;   // 選択肢の順番をシャッフルするか
  isPremium: boolean;        // プレミアムプラン（広告なし＋全機能）
}

// デフォルト設定
const DEFAULT_SETTINGS: AppSettings = {
  shuffleQuestions: true,
  shuffleChoices: true,
  isPremium: false,
};

/**
 * 設定を取得
 */
export function getAppSettings(): AppSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
  } catch (error) {
    console.error("Failed to load settings:", error);
    return DEFAULT_SETTINGS;
  }
}

/**
 * 設定を保存
 */
export function saveAppSettings(settings: Partial<AppSettings>): void {
  const current = getAppSettings();
  const updated = { ...current, ...settings };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Failed to save settings:", error);
  }
}

/**
 * 設定をリセット
 */
export function resetAppSettings(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
  } catch (error) {
    console.error("Failed to reset settings:", error);
  }
}







