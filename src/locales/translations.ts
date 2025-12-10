import { Language } from "@/contexts/LanguageContext";

/**
 * UI翻訳データ
 * Phase 2 で各キーの値を追加していきます
 */
export const translations: Record<Language, Record<string, string>> = {
  ja: {
    // === StartScreen ===
    "start.overview": "試験概要",
    "start.caution": "注意事項",
    "start.button": "試験を開始する",
    "start.rule.timeLimit": "制限時間",
    "start.rule.questions": "問題数",
    "start.rule.passingScore": "合格ライン",

    // === ExamScreen ===
    "exam.questionList": "問題一覧",
    "exam.close": "閉じる",
    "exam.answered": "回答済",
    "exam.flagged": "見直し",
    "exam.multiple": "複数選択",
    "exam.single": "単一選択",
    "exam.question": "問題",
    "exam.flagButton.add": "あとで見直す",
    "exam.flagButton.remove": "見直しマークを外す",
    "exam.prev": "前へ",
    "exam.next": "次へ",
    "exam.finish": "試験終了",
    "exam.legend.answered": "回答済み",
    "exam.legend.unanswered": "未回答",
    "exam.legend.flagged": "見直し",

    // === ResultScreen ===
    "result.passed": "合格！",
    "result.failed": "不合格",
    "result.passedMessage": "おめでとうございます！素晴らしい結果です。",
    "result.failedMessage": "もう少しです。復習して再チャレンジしましょう。",
    "result.percentage": "正答率",
    "result.correct": "正解",
    "result.wrong": "不正解",
    "result.passingLine": "合格ライン",
    "result.wrongQuestions": "間違えた問題",
    "result.explanation": "解説",
    "result.retry": "もう一度挑戦する",

    // === Confirm Dialog ===
    "dialog.finishTitle": "試験を終了しますか？",
    "dialog.finishMessage": "問が未回答です。本当に終了してよろしいですか？",
    "dialog.back": "戻る",
    "dialog.finish": "終了する",

    // === Categories ===
    "category.basics": "基礎",
    "category.roles": "役割",
    "category.events": "イベント",
    "category.artifacts": "作成物",
    "category.situation": "シチュエーション",
    "category.tricky": "引っかけ",
    "category.deep": "深掘り",
    "category.comprehensive": "総合",
    "category.psm2": "PSM II",
  },
  en: {
    // === StartScreen ===
    "start.overview": "Exam Overview",
    "start.caution": "Important Notes",
    "start.button": "Start Exam",
    "start.rule.timeLimit": "Time Limit",
    "start.rule.questions": "Questions",
    "start.rule.passingScore": "Passing Score",

    // === ExamScreen ===
    "exam.questionList": "Question List",
    "exam.close": "Close",
    "exam.answered": "Answered",
    "exam.flagged": "Flagged",
    "exam.multiple": "Multiple Choice",
    "exam.single": "Single Choice",
    "exam.question": "Question",
    "exam.flagButton.add": "Flag for Review",
    "exam.flagButton.remove": "Remove Flag",
    "exam.prev": "Previous",
    "exam.next": "Next",
    "exam.finish": "Finish Exam",
    "exam.legend.answered": "Answered",
    "exam.legend.unanswered": "Unanswered",
    "exam.legend.flagged": "Flagged",

    // === ResultScreen ===
    "result.passed": "Passed!",
    "result.failed": "Failed",
    "result.passedMessage": "Congratulations! Excellent result!",
    "result.failedMessage": "Almost there. Review and try again.",
    "result.percentage": "Score",
    "result.correct": "Correct",
    "result.wrong": "Incorrect",
    "result.passingLine": "Passing Score",
    "result.wrongQuestions": "Wrong Answers",
    "result.explanation": "Explanation",
    "result.retry": "Try Again",

    // === Confirm Dialog ===
    "dialog.finishTitle": "Finish Exam?",
    "dialog.finishMessage": "questions are unanswered. Are you sure you want to finish?",
    "dialog.back": "Back",
    "dialog.finish": "Finish",

    // === Categories ===
    "category.basics": "Basics",
    "category.roles": "Roles",
    "category.events": "Events",
    "category.artifacts": "Artifacts",
    "category.situation": "Situation",
    "category.tricky": "Tricky",
    "category.deep": "Deep Dive",
    "category.comprehensive": "Comprehensive",
    "category.psm2": "PSM II",
  },
};

/**
 * 翻訳キーから翻訳文を取得するヘルパー関数
 */
export function getTranslation(
  language: Language,
  key: string
): string {
  return translations[language][key] || key;
}

