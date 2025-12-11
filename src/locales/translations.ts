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
    "start.history": "学習履歴",

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

    // === History Screen ===
    "history.title": "学習履歴",
    "history.noHistory": "まだ学習履歴がありません。\n試験を受けると履歴が保存されます。",
    "history.delete": "削除",
    "history.clearAll": "全て削除",
    "history.clearConfirmTitle": "履歴を全て削除しますか？",
    "history.clearConfirmMessage": "この操作は取り消せません。全ての学習履歴が削除されます。",

    // === Mode Select ===
    "mode.title": "モード選択",
    "mode.normalExam": "通常試験",
    "mode.normalExamDesc": "80問・60分の本番形式",
    "mode.categoryPractice": "カテゴリー別練習",
    "mode.categoryPracticeDesc": "特定カテゴリーを集中学習",

    // === Category Select ===
    "category.selectTitle": "カテゴリー選択",
    "category.selectDescription": "練習したいカテゴリーを選択してください。",
    "category.selectAll": "全て選択",
    "category.deselectAll": "全て解除",
    "category.startPractice": "練習を開始",

    // === Review Mode ===
    "review.title": "間違えた問題を復習",
    "review.description": "過去に間違えた問題を復習できます。",
    "review.noQuestions": "復習する問題がありません。\n試験を受けて間違えた問題が記録されます。",
    "review.questionCount": "問",
    "review.startReview": "復習を開始",
    "review.clearAll": "リストをクリア",
    "review.clearConfirmTitle": "復習リストをクリアしますか？",
    "review.clearConfirmMessage": "間違えた問題のリストが全て削除されます。",
    "review.settings": "復習設定",
    "review.removeOnCorrect": "正解した問題をリストから削除",

    // === Settings ===
    "settings.title": "設定",
    "settings.shuffleSection": "シャッフル設定",
    "settings.shuffleQuestions": "問題の順番をシャッフル",
    "settings.shuffleChoices": "選択肢の順番をシャッフル",
    "settings.shuffleQuestionsDesc": "毎回異なる順番で出題",
    "settings.shuffleChoicesDesc": "選択肢の並び順もランダムに",
  },
  en: {
    // === StartScreen ===
    "start.overview": "Exam Overview",
    "start.caution": "Important Notes",
    "start.button": "Start Exam",
    "start.rule.timeLimit": "Time Limit",
    "start.rule.questions": "Questions",
    "start.rule.passingScore": "Passing Score",
    "start.history": "History",

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

    // === History Screen ===
    "history.title": "History",
    "history.noHistory": "No history yet.\nYour exam results will be saved here.",
    "history.delete": "Delete",
    "history.clearAll": "Clear All",
    "history.clearConfirmTitle": "Clear all history?",
    "history.clearConfirmMessage": "This action cannot be undone. All your learning history will be deleted.",

    // === Mode Select ===
    "mode.title": "Select Mode",
    "mode.normalExam": "Normal Exam",
    "mode.normalExamDesc": "80 questions in 60 minutes",
    "mode.categoryPractice": "Category Practice",
    "mode.categoryPracticeDesc": "Focus on specific categories",

    // === Category Select ===
    "category.selectTitle": "Select Categories",
    "category.selectDescription": "Select the categories you want to practice.",
    "category.selectAll": "Select All",
    "category.deselectAll": "Deselect All",
    "category.startPractice": "Start Practice",

    // === Review Mode ===
    "review.title": "Review Wrong Answers",
    "review.description": "Review questions you answered incorrectly.",
    "review.noQuestions": "No questions to review.\nWrong answers will be recorded after taking exams.",
    "review.questionCount": "questions",
    "review.startReview": "Start Review",
    "review.clearAll": "Clear List",
    "review.clearConfirmTitle": "Clear review list?",
    "review.clearConfirmMessage": "All wrong questions will be removed from the list.",
    "review.settings": "Review Settings",
    "review.removeOnCorrect": "Remove from list when answered correctly",

    // === Settings ===
    "settings.title": "Settings",
    "settings.shuffleSection": "Shuffle Settings",
    "settings.shuffleQuestions": "Shuffle question order",
    "settings.shuffleChoices": "Shuffle choice order",
    "settings.shuffleQuestionsDesc": "Questions appear in different order each time",
    "settings.shuffleChoicesDesc": "Answer choices are also randomized",
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
