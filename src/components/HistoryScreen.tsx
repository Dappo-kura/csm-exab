"use client";

import { useState, useEffect } from "react";
import {
  History,
  Trophy,
  XCircle,
  Clock,
  ArrowLeft,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getTranslation } from "@/locales/translations";
import {
  ExamHistoryRecord,
  getHistory,
  deleteHistoryRecord,
  clearHistory,
  formatTimeSpent,
  formatDateJa,
  formatDateEn,
} from "@/lib/historyStorage";

interface HistoryScreenProps {
  onBack: () => void;
}

export function HistoryScreen({ onBack }: HistoryScreenProps) {
  const [history, setHistory] = useState<ExamHistoryRecord[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (key: string) => getTranslation(language, key);

  // 履歴を読み込み
  useEffect(() => {
    setHistory(getHistory());
  }, []);

  // 履歴を削除
  const handleDelete = (id: string) => {
    deleteHistoryRecord(id);
    setHistory(getHistory());
  };

  // 全履歴を削除
  const handleClearAll = () => {
    clearHistory();
    setHistory([]);
    setShowClearConfirm(false);
  };

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    return language === "ja" ? formatDateJa(dateString) : formatDateEn(dateString);
  };

  // モード表示
  const getModeLabel = (mode: string) => {
    switch (mode) {
      case "normal":
        return language === "ja" ? "通常試験" : "Normal Exam";
      case "category":
        return language === "ja" ? "カテゴリー別" : "Category";
      case "review":
        return language === "ja" ? "復習モード" : "Review";
      default:
        return mode;
    }
  };

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
        <div className="flex items-center justify-between">
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
              <History className="w-5 h-5 text-emerald-500" />
              <h1 className={`text-lg font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t("history.title")}
              </h1>
            </div>
          </div>
          
          {history.length > 0 && (
            <button
              onClick={() => setShowClearConfirm(true)}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                  : "hover:bg-red-50 text-slate-500 hover:text-red-500"
              }`}
              aria-label={t("history.clearAll")}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 py-6">
        {history.length === 0 ? (
          // 履歴がない場合
          <div className="flex flex-col items-center justify-center py-16">
            <History className={`w-16 h-16 mb-4 ${
              theme === "dark" ? "text-slate-700" : "text-slate-300"
            }`} />
            <p className={`text-center ${
              theme === "dark" ? "text-slate-500" : "text-slate-400"
            }`}>
              {t("history.noHistory")}
            </p>
          </div>
        ) : (
          // 履歴リスト
          <div className="space-y-3">
            {history.map((record) => (
              <div
                key={record.id}
                className={`backdrop-blur-sm border p-4 ${
                  theme === "dark"
                    ? "bg-slate-900/60 border-slate-700/50"
                    : "bg-white/80 border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* 日時とモード */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-sm ${
                        theme === "dark" ? "text-slate-400" : "text-slate-500"
                      }`}>
                        {formatDate(record.date)}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        theme === "dark"
                          ? "bg-slate-800 text-slate-400"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                        {getModeLabel(record.mode)}
                      </span>
                    </div>

                    {/* スコア */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {record.passed ? (
                          <Trophy className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                        <span className={`text-2xl font-bold ${
                          record.passed ? "text-emerald-500" : "text-red-500"
                        }`}>
                          {record.percentage}%
                        </span>
                      </div>
                      <span className={`text-sm ${
                        theme === "dark" ? "text-slate-500" : "text-slate-400"
                      }`}>
                        {record.score}/{record.totalQuestions}
                      </span>
                    </div>

                    {/* 所要時間 */}
                    <div className={`flex items-center gap-1 mt-2 text-sm ${
                      theme === "dark" ? "text-slate-500" : "text-slate-400"
                    }`}>
                      <Clock className="w-4 h-4" />
                      <span>{formatTimeSpent(record.timeSpent)}</span>
                    </div>
                  </div>

                  {/* 削除ボタン */}
                  <button
                    onClick={() => handleDelete(record.id)}
                    className={`p-2 rounded-full transition-colors ${
                      theme === "dark"
                        ? "hover:bg-slate-800 text-slate-600 hover:text-slate-400"
                        : "hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                    }`}
                    aria-label={t("history.delete")}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 全削除確認モーダル */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`rounded-2xl p-6 max-w-sm w-full border shadow-xl animate-fade-in ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h3 className={`text-xl font-bold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t("history.clearConfirmTitle")}
              </h3>
            </div>
            <p className={`mb-6 ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}>
              {t("history.clearConfirmMessage")}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className={`flex-1 py-3 px-4 rounded-full font-medium transition-colors ${
                  theme === "dark"
                    ? "bg-slate-700 text-white hover:bg-slate-600"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {t("dialog.back")}
              </button>
              <button
                onClick={handleClearAll}
                className="flex-1 py-3 px-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-400 transition-colors"
              >
                {t("history.clearAll")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




