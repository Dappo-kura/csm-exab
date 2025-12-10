"use client";

import { PlayCircle, Clock, FileQuestion, Target, Info } from "lucide-react";
import { EXAM_INFO } from "@/data/constants";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* ヘッダー */}
      <header className="pt-8 pb-4 px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 mb-4 shadow-lg shadow-emerald-500/25">
          <FileQuestion className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">
          {EXAM_INFO.title}
        </h1>
        <p className="text-emerald-400 font-medium">{EXAM_INFO.subtitle}</p>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 px-4 pb-8">
        {/* 試験ルール */}
        <section className="bg-slate-800/50 backdrop-blur rounded-2xl p-5 mb-4 border border-slate-700/50">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            試験概要
          </h2>
          <div className="space-y-3">
            {EXAM_INFO.rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center flex-shrink-0">
                  {index === 0 && <Clock className="w-5 h-5 text-emerald-400" />}
                  {index === 1 && <FileQuestion className="w-5 h-5 text-teal-400" />}
                  {index === 2 && <Target className="w-5 h-5 text-cyan-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm">{rule.label}</p>
                  <p className="font-semibold text-lg">{rule.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意事項 */}
        <section className="bg-slate-800/50 backdrop-blur rounded-2xl p-5 border border-slate-700/50">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-amber-400" />
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              注意事項
            </h2>
          </div>
          <ul className="space-y-2">
            {EXAM_INFO.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed"
              >
                <span className="text-emerald-400 mt-0.5">•</span>
                {instruction}
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* フッター - 開始ボタン */}
      <footer className="sticky bottom-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent pt-8">
        <button
          onClick={onStart}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/25 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <PlayCircle className="w-6 h-6" />
          試験を開始する
        </button>
      </footer>
    </div>
  );
}



