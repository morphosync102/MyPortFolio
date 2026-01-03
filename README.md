# Personal Blog Portfolio Website (noraguwa.com)

## Overview
自身の経歴、スキルセット、資格、制作実績、および技術ブログを発信するためのポートフォリオ兼ブログサイトです。

## Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Vanilla CSS (Theme)
- **Routing**: React Router v7

### Infrastructure & CI/CD
- **Hosting**: Raspberry Pi 3B (自宅サーバー)
- **CI/CD**: GitHub Actions
    - **Lint/Test**: ESLint, Vitest
    - **Build**: Vite Build
    - **Deploy**: WireGuard VPN connection -> SCP transfer to Nginx server on Raspberry Pi
- **Analytics**: Google Analytics 4 (GA4)

## Project Structure
メンテナンス性を意識し、`src/app` 配下に機能単位でコンポーネントを配置しています。

```
src/
├── app/
│   ├── components/      # UI Components (Presentational)
│   ├── content/         # Content Data (Source of Truth)
│   ├── analytics/       # GA4 Integration Logic
│   └── App.tsx          # App Entry & Routing
├── styles/              # Global Styles
└── tests/               # Test Codes
```

## Features
1.  **レスポンシブデザイン**: PC、タブレット、スマートフォン（順次対応中）での閲覧に最適化。
2.  **テーマ切り替え**: ヘッダーのトグルボタンで Light/Dark モードを即座に切り替え可能。
3.  **コンテンツ管理**: `src/app/content/contentConfig.js` でテキストデータを一元管理し、コードを触らずに経歴や記事の更新が可能。
4.  **自動デプロイ**: `main` ブランチへのプッシュをトリガーに、テスト・ビルド・デプロイが自動実行されるパイプライン。

## Future Roadmap
- **ヘッドレスCMSの導入**: 現在の `contentConfig.js` 管理から、CMS連携による動的な記事管理への移行。
- **検索機能の実装**: ブログ記事が増えた際のキーワード検索機能。
- **パフォーマンス最適化**: 画像の遅延読み込みや次世代フォーマット対応（AVIF/WebP）の強化。

## Local Development

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (http://localhost:5173)
npm run dev

# テストの実行
npm run test:ui

# ビルドプレビュー
npm run build
npm run preview
```