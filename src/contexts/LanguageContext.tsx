"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

// 対応言語
export type Language = "ja" | "en";

// Contextの型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Context作成
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// ローカルストレージのキー
const STORAGE_KEY = "psm-exam-language";

// ブラウザの言語を取得
function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return "ja";

  const browserLang = navigator.language.toLowerCase();
  // 日本語系なら 'ja'、それ以外は 'en'
  if (browserLang.startsWith("ja")) {
    return "ja";
  }
  return "en";
}

// 保存された言語を取得
function getSavedLanguage(): Language | null {
  if (typeof window === "undefined") return null;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "ja" || saved === "en") {
    return saved;
  }
  return null;
}

// Provider Props
interface LanguageProviderProps {
  children: ReactNode;
}

// Provider コンポーネント
export function LanguageProvider({ children }: LanguageProviderProps) {
  // 初期値は日本語（SSR対策）
  const [language, setLanguageState] = useState<Language>("ja");
  const [isInitialized, setIsInitialized] = useState(false);

  // 初期化時に言語を設定
  useEffect(() => {
    const savedLang = getSavedLanguage();
    if (savedLang) {
      // 保存された言語があればそれを使う
      setLanguageState(savedLang);
      console.log(`[Language] Loaded from storage: ${savedLang}`);
    } else {
      // なければブラウザの言語を使う
      const browserLang = getBrowserLanguage();
      setLanguageState(browserLang);
      console.log(`[Language] Detected from browser: ${browserLang}`);
    }
    setIsInitialized(true);
  }, []);

  // 言語を変更してローカルストレージに保存
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    console.log(`[Language] Changed to: ${lang}`);
  }, []);

  // html要素のlang属性を更新
  useEffect(() => {
    if (isInitialized) {
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// カスタムフック
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}








