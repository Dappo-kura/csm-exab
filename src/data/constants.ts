// 試験の定数設定
export const EXAM_CONFIG = {
  // 制限時間（分）
  TIME_LIMIT_MINUTES: 60,
  // 制限時間（秒）
  TIME_LIMIT_SECONDS: 60 * 60,
  // 問題数
  TOTAL_QUESTIONS: 80,
  // 合格ライン（%）
  PASSING_SCORE: 85,
} as const;

// 試験情報の表示用テキスト
export const EXAM_INFO = {
  title: "Professional Scrum Master™ I (PSM I)",
  subtitle: "模擬試験",
  rules: [
    { label: "制限時間", value: `${EXAM_CONFIG.TIME_LIMIT_MINUTES}分` },
    { label: "問題数", value: `${EXAM_CONFIG.TOTAL_QUESTIONS}問` },
    { label: "合格ライン", value: `正答率${EXAM_CONFIG.PASSING_SCORE}%以上` },
  ],
  instructions: [
    "全ての問題に回答してから「試験終了」ボタンを押してください。",
    "「あとで見直す」機能で気になる問題にマークできます。",
    "制限時間が終了すると自動的に採点されます。",
  ],
} as const;


