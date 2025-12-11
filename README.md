# PSM I 模擬試験アプリ

Professional Scrum Master™ I (PSM I) の模擬試験Webアプリケーションです。

## 🚀 機能

- **本番形式の模擬試験**: 60分・80問・合格ライン85%
- **モバイルファースト**: スマートフォンでの操作に最適化
- **進捗管理**: リアルタイムのタイマーと進捗表示
- **見直し機能**: 迷った問題にフラグを付けて後から確認
- **詳細な結果表示**: 間違えた問題の解説付きレビュー
- **ダークモード**: 長時間の学習でも目に優しい配色

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
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # グローバルスタイル
│   │   ├── layout.tsx       # ルートレイアウト
│   │   └── page.tsx         # メインページ
│   ├── components/          # UIコンポーネント
│   │   ├── StartScreen.tsx  # スタート画面
│   │   ├── ExamScreen.tsx   # 試験画面
│   │   └── ResultScreen.tsx # 結果画面
│   ├── data/                # データファイル
│   │   ├── constants.ts     # 定数設定
│   │   └── questions.ts     # 問題データ
│   ├── hooks/               # カスタムフック
│   │   ├── useTimer.ts      # タイマー管理
│   │   └── useExam.ts       # 試験状態管理
│   └── types/               # 型定義
│       └── index.ts
└── public/                  # 静的ファイル
```

## ➕ 問題の追加方法

`src/data/questions.ts` ファイルを編集して問題を追加できます：

```typescript
{
  id: 4,                    // ユニークなID
  type: "single",           // "single"（単一選択）または "multiple"（複数選択）
  question: "問題文をここに記入",
  choices: [
    { id: "a", text: "選択肢A" },
    { id: "b", text: "選択肢B" },
    { id: "c", text: "選択肢C" },
    { id: "d", text: "選択肢D" },
  ],
  correctAnswers: ["a"],    // 正解の選択肢ID（複数選択の場合は複数指定）
  explanation: "解説文をここに記入"
}
```

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

## 🛠️ 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📝 ライセンス

MIT License

---

※ Professional Scrum Master™ は Scrum.org の商標です。本アプリは公式のものではありません。





