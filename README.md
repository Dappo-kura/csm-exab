# Pocket Scrum Master

Pocket Scrum Master (PSM I) の模擬試験Webアプリケーションです。

## 🚀 機能

### 試験モード
- **通常試験**: 60分・80問・合格ライン85%の本番形式
- **カテゴリー別練習**: 特定カテゴリーを選んで集中学習（制限時間なし）
- **復習モード**: 過去に間違えた問題だけを復習

### 学習サポート
- **学習履歴**: 過去の試験結果を自動保存・確認可能
- **間違えた問題の記録**: 自動で間違えた問題をリストに追加
- **見直し機能**: 迷った問題にフラグを付けて後から確認
- **詳細な結果表示**: 間違えた問題の解説付きレビュー

### カスタマイズ
- **ダークモード/ライトモード**: お好みのテーマに切り替え可能
- **シャッフル設定**: 問題・選択肢の順番シャッフルのON/OFF
- **多言語対応**: 日本語/英語に対応

### その他
- **モバイルファースト**: スマートフォンでの操作に最適化
- **PWA対応**: ホーム画面に追加してアプリのように使用可能
- **進捗管理**: リアルタイムのタイマーと進捗表示

## 📋 必要条件

- Node.js 18.x 以上
- npm 9.x 以上

## 🛠️ セットアップ

### 1. Node.js のインストール

Node.js がインストールされていない場合は、[公式サイト](https://nodejs.org/)からダウンロードしてインストールしてください。

### 2. 依存パッケージのインストール

```bash
cd psm-exam
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📁 プロジェクト構造

```
psm-exam/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── globals.css           # グローバルスタイル（テーマ変数含む）
│   │   ├── layout.tsx            # ルートレイアウト
│   │   └── page.tsx              # メインページ（状態管理）
│   ├── components/               # UIコンポーネント
│   │   ├── StartScreen.tsx       # スタート画面
│   │   ├── ExamScreen.tsx        # 試験画面
│   │   ├── ResultScreen.tsx      # 結果画面
│   │   ├── HistoryScreen.tsx     # 学習履歴画面
│   │   ├── CategorySelectScreen.tsx  # カテゴリー選択画面
│   │   ├── ReviewScreen.tsx      # 復習モード画面
│   │   ├── SettingsScreen.tsx    # 設定画面
│   │   └── PWARegister.tsx       # PWA登録
│   ├── contexts/                 # React Context
│   │   ├── LanguageContext.tsx   # 言語設定管理
│   │   └── ThemeContext.tsx      # テーマ設定管理
│   ├── data/                     # データファイル
│   │   ├── constants.ts          # 定数設定
│   │   └── questions.ts          # 問題データ
│   ├── hooks/                    # カスタムフック
│   │   ├── useTimer.ts           # タイマー管理
│   │   └── useExam.ts            # 試験状態管理
│   ├── lib/                      # ユーティリティ
│   │   ├── historyStorage.ts     # 学習履歴のLocalStorage管理
│   │   ├── wrongQuestionsStorage.ts  # 間違えた問題のLocalStorage管理
│   │   └── settingsStorage.ts    # アプリ設定のLocalStorage管理
│   ├── locales/                  # 多言語対応
│   │   └── translations.ts       # 翻訳データ
│   └── types/                    # 型定義
│       └── index.ts
└── public/                       # 静的ファイル（PWA用アイコン等）
```

## 📚 問題カテゴリー

| カテゴリー | 説明 |
|-----------|------|
| 基礎 | スクラムの柱・価値基準 |
| 役割 | スクラムマスター・プロダクトオーナー・開発者 |
| イベント | スプリント・各種ミーティング |
| 作成物 | プロダクトバックログ・スプリントバックログ等 |
| シチュエーション | 実践的な状況判断問題 |
| 引っかけ | よくある誤解を問う問題 |
| 深掘り | スクラムガイドの詳細理解 |
| 総合 | 複合的な知識を問う問題 |
| PSM II | 上級レベルの問題 |

## ➕ 問題の追加方法

`src/data/questions.ts` ファイルを編集して問題を追加できます：

```typescript
{
  id: 100,                        // ユニークなID
  type: "single",                 // "single"（単一選択）または "multiple"（複数選択）
  category: "basics",             // カテゴリー（上記参照）
  question: {
    ja: "日本語の問題文",
    en: "English question text",
  },
  choices: [
    { id: "a", text: { ja: "選択肢A（日本語）", en: "Choice A (English)" } },
    { id: "b", text: { ja: "選択肢B（日本語）", en: "Choice B (English)" } },
    { id: "c", text: { ja: "選択肢C（日本語）", en: "Choice C (English)" } },
    { id: "d", text: { ja: "選択肢D（日本語）", en: "Choice D (English)" } },
  ],
  correctAnswers: ["a"],          // 正解の選択肢ID（複数選択の場合は複数指定）
  explanation: {
    ja: "日本語の解説文",
    en: "English explanation",
  }
}
```

## 💾 データ保存

以下のデータがブラウザのLocalStorageに保存されます：

| キー | 内容 |
|------|------|
| `psm-exam-language` | 言語設定（ja/en） |
| `psm-exam-theme` | テーマ設定（dark/light） |
| `psm-exam-history` | 学習履歴（最大100件） |
| `psm-exam-wrong-questions` | 間違えた問題のIDリスト |
| `psm-exam-settings` | シャッフル設定等 |
| `psm-exam-review-settings` | 復習モード設定 |

## 🚢 デプロイ

### Vercel へのデプロイ

1. [Vercel](https://vercel.com) にサインアップ
2. GitHubリポジトリをインポート
3. 自動的にビルド＆デプロイされます

または、CLIでデプロイ：

```bash
npm install -g vercel
vercel
```

### ビルド

```bash
npm run build
```

## 🛠️ 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context + Custom Hooks
- **Storage**: LocalStorage

## 📝 ライセンス

MIT License

---

※ Professional Scrum Master™ は Scrum.org の商標です。本アプリは公式のものではありません。
