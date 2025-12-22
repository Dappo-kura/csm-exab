"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

// テーマの種類
export type Theme = "dark" | "light";

// Contextの型
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Context作成
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ローカルストレージのキー
const STORAGE_KEY = "psm-exam-theme";

// 保存されたテーマを取得
function getSavedTheme(): Theme | null {
  if (typeof window === "undefined") return null;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") {
    return saved;
  }
  return null;
}

// システムのテーマを取得
function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

// Provider Props
interface ThemeProviderProps {
  children: ReactNode;
}

// Provider コンポーネント
export function ThemeProvider({ children }: ThemeProviderProps) {
  // 初期値はダーク（SSR対策）
  const [theme, setThemeState] = useState<Theme>("dark");
  const [isInitialized, setIsInitialized] = useState(false);

  // 初期化時にテーマを設定
  useEffect(() => {
    const savedTheme = getSavedTheme();
    if (savedTheme) {
      // 保存されたテーマがあればそれを使う
      setThemeState(savedTheme);
    } else {
      // なければシステムのテーマを使う
      const systemTheme = getSystemTheme();
      setThemeState(systemTheme);
    }
    setIsInitialized(true);
  }, []);

  // テーマを変更してローカルストレージに保存
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  }, []);

  // テーマをトグル
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // html要素にテーマクラスを適用
  useEffect(() => {
    if (isInitialized) {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
      
      // メタテーマカラーも更新
      const themeColor = theme === "dark" ? "#0f172a" : "#f8fafc";
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", themeColor);
      }
    }
  }, [theme, isInitialized]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// カスタムフック
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}






