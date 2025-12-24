"use client";

import { useState, useEffect } from "react";
import { PlayCircle, Clock, FileQuestion, Target, Info, Sun, Moon, History, FolderOpen, RotateCcw, Settings, ChevronDown, ChevronUp, Zap, Lock } from "lucide-react";
import { Capacitor } from "@capacitor/core";
import { EXAM_CONFIG } from "@/data/constants";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";
import { getAppSettings } from "@/lib/settingsStorage";
import { getAdRemovalPackage, purchaseAdRemoval, restorePurchases } from "@/lib/purchases";

interface StartScreenProps {
  onStart: () => void;
  onShowHistory: () => void;
  onShowCategorySelect: () => void;
  onShowReview: () => void;
  onShowSettings: () => void;
}

// 言語切り替えトグルコンポーネント
function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className={`flex items-center border rounded-full overflow-hidden ${theme === "dark" ? "border-slate-600" : "border-slate-300"
      }`}>
      <button
        onClick={() => handleToggle("ja")}
        className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${language === "ja"
          ? "bg-emerald-500 text-white"
          : theme === "dark"
            ? "bg-transparent text-slate-400 hover:text-white"
            : "bg-transparent text-slate-500 hover:text-slate-900"
          }`}
      >
        JA
      </button>
      <button
        onClick={() => handleToggle("en")}
        className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${language === "en"
          ? "bg-emerald-500 text-white"
          : theme === "dark"
            ? "bg-transparent text-slate-400 hover:text-white"
            : "bg-transparent text-slate-500 hover:text-slate-900"
          }`}
      >
        EN
      </button>
    </div>
  );
}

// テーマ切り替えトグルコンポーネント
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-200 ${theme === "dark"
        ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
        }`}
      aria-label={theme === "dark" ? "ライトモードに切り替え" : "ダークモードに切り替え"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}

export function StartScreen({ onStart, onShowHistory, onShowCategorySelect, onShowReview, onShowSettings }: StartScreenProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const settings = getAppSettings();
    setIsPremium(settings.isPremium);
  }, []);

  const handlePurchase = async () => {
    const pkg = await getAdRemovalPackage();
    if (!pkg) {
      alert(language === "ja" ? "商品情報の取得に失敗しました" : "Failed to load product info");
      return;
    }

    const success = await purchaseAdRemoval(pkg);
    if (success) {
      setIsPremium(true);
      alert(language === "ja" ? "プレミアムプランにアップグレードしました！" : "Upgraded to Premium!");
    }
  };

  const handleRestore = async () => {
    const success = await restorePurchases();
    if (success) {
      setIsPremium(true);
      alert(language === "ja" ? "購入を復元しました！" : "Purchases restored!");
    }
  };

  const handleLockedFeature = () => {
    const message = language === "ja"
      ? "この機能はプレミアムプラン限定です。\nアップグレードしますか？"
      : "This feature is for Premium users only.\nWould you like to upgrade?";

    if (confirm(message)) {
      handlePurchase();
    }
  };

  // 言語別の注意事項
  const instructions = language === "ja"
    ? [
      "全ての問題に回答してから「試験終了」ボタンを押してください。",
      "「あとで見直す」機能で気になる問題にマークできます。",
      "制限時間が終了すると自動的に採点されます。",
    ]
    : [
      "Please answer all questions before pressing the \"Finish Exam\" button.",
      "You can mark questions for review using the \"Flag for Review\" feature.",
      "The exam will be automatically graded when time runs out.",
    ];

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark"
      ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
      }`}>
      {/* 右上のコントロール */}
      <div className="absolute top-12 right-3 z-10 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* ヘッダー */}
      <header className="pt-6 pb-3 px-4 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-4 shadow-lg shadow-emerald-500/20 animate-float overflow-hidden bg-transparent">
          {/* GitHub Pages等のサブディレクトリ環境に対応するため、環境に応じてパスを切り替え */}
          <img
            src={
              // Android/iOSなら常にルートパス、Web版Productionならサブディレクトリ付き、それ以外はルート
              Capacitor.isNativePlatform()
                ? "/hero-icon.png"
                : process.env.NODE_ENV === 'production' ? "/csm-exab/hero-icon.png" : "/hero-icon.png"
            }
            alt="App Icon"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Android等のネイティブ環境ではルートパス
              if (Capacitor.isNativePlatform()) {
                if (!target.src.endsWith('/hero-icon.png')) {
                  target.src = '/hero-icon.png';
                }
                return;
              }

              // Web環境（GitHub Pages等）でのフォールバック
              const currentSrc = target.src;
              if (currentSrc.includes('/csm-exab/')) {
                target.src = '/hero-icon.png';
              } else {
                target.src = '/csm-exab/hero-icon.png';
              }
            }}
          />
        </div>
        <h1 className={`text-xl font-bold mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
          Pocket Scrum Master
        </h1>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 pb-4 flex flex-col">
        {/* 試験ルール - 横並び3カラム */}
        <section className="flex justify-center gap-6 mb-4">
          {/* 制限時間 */}
          <div className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <Clock className="w-6 h-6 text-emerald-500" />
            </div>
            <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
              {t("start.rule.timeLimit")}
            </p>
            <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {language === "ja" ? `${EXAM_CONFIG.TIME_LIMIT_MINUTES}分` : `${EXAM_CONFIG.TIME_LIMIT_MINUTES} min`}
            </p>
          </div>

          {/* 問題数 */}
          <div className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <FileQuestion className="w-6 h-6 text-amber-500" />
            </div>
            <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
              {t("start.rule.questions")}
            </p>
            <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {language === "ja" ? `${EXAM_CONFIG.TOTAL_QUESTIONS}問` : `${EXAM_CONFIG.TOTAL_QUESTIONS}`}
            </p>
          </div>

          {/* 合格ライン */}
          <div className="text-center">
            <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <Target className="w-6 h-6 text-cyan-500" />
            </div>
            <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
              {t("start.rule.passingScore")}
            </p>
            <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              {language === "ja" ? `正答率${EXAM_CONFIG.PASSING_SCORE}%以上` : `${EXAM_CONFIG.PASSING_SCORE}%+`}
            </p>
          </div>
        </section>

        {/* 注意事項 - アコーディオン */}
        <section className={`backdrop-blur-sm border rounded-lg mb-4 ${theme === "dark"
          ? "bg-slate-900/60 border-slate-700/50"
          : "bg-white/80 border-slate-200"
          }`}>
          <button
            onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
            className="w-full p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-500" />
              <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}>
                {t("start.caution")}
              </span>
            </div>
            {isInstructionsOpen ? (
              <ChevronUp className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
            ) : (
              <ChevronDown className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
            )}
          </button>
          {isInstructionsOpen && (
            <div className="px-3 pb-3">
              <ul className="space-y-1.5">
                {instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"
                      }`}
                  >
                    <span className="text-emerald-500 mt-0.5">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* メニューボタン - 2x2グリッド */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* カテゴリー別練習 (Premium限定) */}
          <button
            onClick={isPremium ? onShowCategorySelect : handleLockedFeature}
            className={`relative backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              } ${!isPremium && "opacity-50 grayscale"}`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <FolderOpen className="w-5 h-5 text-purple-500" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("mode.categoryPractice")}
            </span>
            <span className={`text-xs mt-0.5 ${theme === "dark" ? "text-slate-500" : "text-slate-400"
              }`}>
              {t("mode.categoryPracticeDesc")}
            </span>
            {!isPremium && (
              <div className="absolute top-2 right-2 p-1 bg-slate-800/80 rounded-full">
                <Lock className="w-4 h-4 text-emerald-400" />
              </div>
            )}
          </button>

          {/* 間違えた問題を復習 (Premium限定) */}
          <button
            onClick={isPremium ? onShowReview : handleLockedFeature}
            className={`relative backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              } ${!isPremium && "opacity-50 grayscale"}`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <RotateCcw className="w-5 h-5 text-orange-500" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("review.title")}
            </span>
            {!isPremium && (
              <div className="absolute top-2 right-2 p-1 bg-slate-800/80 rounded-full">
                <Lock className="w-4 h-4 text-emerald-400" />
              </div>
            )}
          </button>

          {/* 学習履歴 */}
          <button
            onClick={onShowHistory}
            className={`backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              }`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <History className="w-5 h-5 text-indigo-500" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("start.history")}
            </span>
          </button>

          {/* 設定 */}
          <button
            onClick={onShowSettings}
            className={`backdrop-blur-sm p-4 border rounded-lg flex flex-col items-start transition-colors ${theme === "dark"
              ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
              : "bg-white/80 border-slate-200 hover:bg-slate-50"
              }`}
          >
            <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-slate-800/80" : "bg-slate-100"
              }`}>
              <Settings className="w-5 h-5 text-slate-400" />
            </div>
            <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
              {t("settings.title")}
            </span>
          </button>
        </div>

        {/* プレミアムプラン販売エリア */}
        {!isPremium && (
          <div className="mt-2">
            <button
              onClick={handlePurchase}
              className={`w-full p-4 border rounded-xl flex items-center justify-center gap-4 transition-all duration-300 relative overflow-hidden group mb-3 ${theme === "dark"
                ? "bg-gradient-to-br from-amber-900/40 via-yellow-900/20 to-amber-900/40 border-amber-500/50 hover:border-amber-400 text-amber-100"
                : "bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border-amber-200 hover:border-amber-300 text-amber-800"
                }`}
            >
              <div className={`p-2 rounded-full ${theme === "dark" ? "bg-amber-500/20" : "bg-amber-100"}`}>
                <Zap className={`w-5 h-5 ${theme === "dark" ? "text-amber-400" : "text-amber-600"}`} />
              </div>
              <div className="flex flex-col items-start text-left z-10">
                <span className="font-bold text-base">
                  {language === "ja" ? "プレミアムにアップグレード" : "Upgrade to Premium"}
                </span>
                <span className={`text-xs ${theme === "dark" ? "text-amber-200/80" : "text-amber-700/80"}`}>
                  {language === "ja" ? "全機能解放・広告なし (¥1,200)" : "Unlock all features & Remove Ads"}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:animate-shine" />
            </button>

            <button
              onClick={handleRestore}
              className={`text-xs w-full text-center underline ${theme === "dark" ? "text-slate-500 hover:text-slate-400" : "text-slate-400 hover:text-slate-600"}`}
            >
              {language === "ja" ? "購入を復元" : "Restore Purchase"}
            </button>
          </div>
        )}
      </main>

      {/* フッター - 通常試験開始ボタン */}
      <footer className={`sticky bottom-0 p-4 pb-9 ${theme === "dark"
        ? "bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent"
        : "bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent"
        }`}>
        <button
          onClick={onStart}
          className="relative w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          <PlayCircle className="w-6 h-6 animate-pulse" />
          <span className="relative">{t("mode.normalExam")}</span>
        </button>
      </footer>
    </div>
  );
}
