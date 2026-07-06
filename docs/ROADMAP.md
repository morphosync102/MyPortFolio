# ROADMAP — noraguwa.com 発展方針(提案)

作成: 2026-07-07(Claude Code による提案。実装優先度はユーザーが決定する)

## コンテンツ面

| # | 案 | 概要 | 工数 |
|---|---|---|---|
| C1 | ブログカードに日付・タグ追加 | `blogItems` に date / tags フィールドを追加し、記事の鮮度とジャンルが見えるようにする | S |
| C2 | 実績(Achievements)セクション新設 | vault の STAR 実績を公開表現で掲載(初PMとして提案〜検収まで完遂、Power Automate による部内情報共有基盤で月間表彰に選出、AI 活用でログ確認作業を約80%削減 など)。採用担当者への訴求力が最も高い | M |
| C3 | Qiita 記事の拡充 | 3D プリンター・インターホン LINE 通知・AI 業務活用はネタとして記事化しやすい。blogItems に追記していく | S(継続) |
| C4 | 英語版ページ(i18n) | TOEIC 890 の実証になる。react-i18next 等で `/en` 対応 | L |

## 機能面

| # | 案 | 概要 | 工数 |
|---|---|---|---|
| F1 | OGP・メタタグ・favicon 整備 | SNS シェア時の見栄えと SEO の基礎。index.html + 各ページの meta | S |
| F2 | sitemap.xml + robots.txt | SPA でもビルド時に静的生成可能。検索流入の下地 | S |
| F3 | Qiita RSS をビルド時取得 | `blogItems` の手動管理をやめ、CI で Qiita の RSS/API から自動生成 | M |
| F4 | リポジトリ内 Markdown ブログ | README のロードマップにある CMS 化の代替。MDX + 静的生成で Qiita 非依存の記事も持てる | L |
| F5 | プロジェクト詳細ページ | `/projects/:id` ルートを追加し、スクリーンショット・構成図を掲載 | M |
| F6 | 問い合わせ導線 | mailto リンクまたはフォーム(採用担当者・スカウト向け) | S |
| F7 | three.js の遅延ロード | 3D 系依存が初回ロードを重くしている。dynamic import で改善 | M |
| F8 | 品質整備 | package.json の name 修正(`@figma/my-make-file` → 適切な名前)、React を dependencies へ移動、テストランナー二重化(node --test / vitest)の解消 | M |

## 推奨着手順

**F1 → C1 → C2 → F3**(効果/工数比の高い順)。

- F1/F2/C1 は半日で終わる基礎整備
- C2 が転職・キャリア観点で最も価値が高い
- F3 でブログ運用の手間をゼロにしてから C3 の記事執筆に注力する
