"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Play, FolderOpen, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";
import { QuestionCategory, categoryLabels, categoryColors } from "@/types";
import { questions } from "@/data/questions";

interface CategorySelectScreenProps {
  onBack: () => void;
  onStart: (categories: QuestionCategory[]) => void;
}

// カテゴリーごとの問題数をカウント
function getCategoryQuestionCounts(): Record<QuestionCategory, number> {
  const counts: Record<QuestionCategory, number> = {
    basics: 0,
    roles: 0,
    events: 0,
    artifacts: 0,
    situation: 0,
    tricky: 0,
    deep: 0,
    comprehensive: 0,
    psm2: 0,
  };

  questions.forEach((q) => {
    counts[q.category]++;
  });

  return counts;
}

export function CategorySelectScreen({ onBack, onStart }: CategorySelectScreenProps) {
  const [selectedCategories, setSelectedCategories] = useState<QuestionCategory[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<Record<QuestionCategory, number>>({
    basics: 0,
    roles: 0,
    events: 0,
    artifacts: 0,
    situation: 0,
    tricky: 0,
    deep: 0,
    comprehensive: 0,
    psm2: 0,
  });
  
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

  // カテゴリーごとの問題数を計算
  useEffect(() => {
    setCategoryCounts(getCategoryQuestionCounts());
  }, []);

  // カテゴリーの選択/解除
  const toggleCategory = (category: QuestionCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // 全選択/全解除
  const toggleAll = () => {
    const allCategories: QuestionCategory[] = [
      "basics",
      "roles",
      "events",
      "artifacts",
      "situation",
      "tricky",
      "deep",
      "comprehensive",
      "psm2",
    ];
    
    if (selectedCategories.length === allCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(allCategories);
    }
  };

  // 選択された問題の総数
  const totalQuestions = selectedCategories.reduce(
    (sum, cat) => sum + categoryCounts[cat],
    0
  );

  // カテゴリー一覧（問題数がある順）
  const categories: QuestionCategory[] = [
    "basics",
    "roles",
    "events",
    "artifacts",
    "situation",
    "tricky",
    "deep",
    "comprehensive",
    "psm2",
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === "dark"
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
    }`}>
      {/* ヘッダー */}
      <header className={`sticky top-0 z-10 backdrop-blur border-b px-4 py-4 ${
        theme === "dark"
          ? "bg-slate-900/90 border-slate-800"
          : "bg-white/90 border-slate-200"
      }`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "hover:bg-slate-800 text-slate-400 hover:text-white"
                : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-emerald-500" />
            <h1 className={`text-lg font-bold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}>
              {t("category.selectTitle")}
            </h1>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 py-6">
        {/* 説明 */}
        <p className={`text-sm mb-4 ${
          theme === "dark" ? "text-slate-400" : "text-slate-500"
        }`}>
          {t("category.selectDescription")}
        </p>

        {/* 全選択ボタン */}
        <button
          onClick={toggleAll}
          className={`w-full mb-4 py-2 px-4 border rounded-lg text-sm font-medium transition-colors ${
            selectedCategories.length === categories.length
              ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-500"
              : theme === "dark"
              ? "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
              : "bg-white border-slate-200 text-slate-500 hover:text-slate-900"
          }`}
        >
          {selectedCategories.length === categories.length
            ? t("category.deselectAll")
            : t("category.selectAll")}
        </button>

        {/* カテゴリーリスト */}
        <div className="space-y-2">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            const count = categoryCounts[category];
            const hasQuestions = count > 0;

            return (
              <button
                key={category}
                onClick={() => hasQuestions && toggleCategory(category)}
                disabled={!hasQuestions}
                className={`w-full p-4 border rounded-lg flex items-center justify-between transition-all ${
                  !hasQuestions
                    ? theme === "dark"
                      ? "opacity-40 cursor-not-allowed bg-slate-900/30 border-slate-700/50"
                      : "opacity-40 cursor-not-allowed bg-slate-100/50 border-slate-200"
                    : isSelected
                    ? theme === "dark"
                      ? "bg-emerald-500/10 border-emerald-500/50"
                      : "bg-emerald-50 border-emerald-500/50"
                    : theme === "dark"
                    ? "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/60"
                    : "bg-white/80 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      categoryColors[category].bg
                    }`}
                  >
                    <span className={`text-lg font-bold ${categoryColors[category].text}`}>
                      {categoryLabels[category][language].charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}>
                      {categoryLabels[category][language]}
                    </p>
                    <p className={`text-sm ${
                      theme === "dark" ? "text-slate-500" : "text-slate-400"
                    }`}>
                      {language === "ja" ? `${count}問` : `${count} questions`}
                    </p>
                  </div>
                </div>
                
                {isSelected && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                )}
              </button>
            );
          })}
        </div>
      </main>

      {/* フッター - 開始ボタン */}
      <footer className={`sticky bottom-0 p-4 pb-8 pt-8 ${
        theme === "dark"
          ? "bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent"
          : "bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent"
      }`}>
        {/* 選択中の問題数表示 */}
        <div className={`text-center mb-3 text-sm ${
          theme === "dark" ? "text-slate-400" : "text-slate-500"
        }`}>
          {language === "ja"
            ? `${selectedCategories.length}カテゴリー / ${totalQuestions}問を選択中`
            : `${selectedCategories.length} categories / ${totalQuestions} questions selected`}
        </div>
        
        <button
          onClick={() => onStart(selectedCategories)}
          disabled={selectedCategories.length === 0}
          className={`w-full py-4 px-6 font-bold text-lg rounded-full shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3 ${
            selectedCategories.length === 0
              ? "bg-slate-500 text-slate-300 cursor-not-allowed shadow-none"
              : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-emerald-500/25"
          }`}
        >
          <Play className="w-6 h-6" />
          {t("category.startPractice")}
        </button>
      </footer>
    </div>
  );
}

