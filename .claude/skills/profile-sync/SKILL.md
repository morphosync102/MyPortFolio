---
name: profile-sync
description: Obsidian の Profile vault からポートフォリオサイトのプロフィール内容(経歴・スキル・資格・趣味)を公開表現ルールに従って contentConfig.js へ同期する手順。「プロフィールを最新化して」「vault の内容を反映して」と言われたときに使う。
---

# profile-sync — vault → ポートフォリオサイト同期手順

このファイルは Claude Code 専用ではない。Codex など他のエージェントも、プロフィール更新時はこの手順書に従うこと。

## ファイルの役割

| ファイル | 役割 |
|---|---|
| `/Users/ishigaki/MyObsidian/Profile/Core/*.md` | 元データの正本(スキルと経験・資格・経歴タイムライン・趣味関心 など) |
| `src/app/content/contentConfig.js` | サイト表示内容の正本 |
| `src/app/components/AboutPage.tsx` | Profile ページのイントロ文(ハードコード) |
| `src/app/components/BodyTextReadable.test.tsx` | イントロ文を正規表現で固定しているテスト |

## 手順

1. **vault の該当ノートを読む**(必要なものだけ):
   - `Core/スキルと経験.md` → skillsItems
   - `Core/資格.md` → certificationsItems
   - `Core/経歴タイムライン.md` / `Core/現在の自分.md` → rolesItems・イントロ文
   - `Core/趣味・関心.md` → hobbiesItems
   - `Personal/Projects/` → projectItems
2. **公開表現ルールでフィルタする**(AGENTS.md の「公開表現ルール」8 項目を厳守。金額なし・「選出」・「約80%」・「3年目」・顧客匿名化・公開可能製品名 6 つのみ)
3. **`contentConfig.js` を更新する**。フィールド構造(id / name / description 等)は変えない(shape テストが壊れるため)
4. **イントロ文を変える場合**は `AboutPage.tsx` と `BodyTextReadable.test.tsx` の matcher を必ずセットで更新する
5. **検証**: `npm run lint && npm run test:ui && npm run build` をすべてグリーンに
6. **コミット**: conventional commits(例: `feat: プロフィール内容を20XX年時点に更新`)。attribution フッターなし
7. **push はユーザー確認後のみ**(push = 本番 noraguwa.com への自動デプロイ)

## 注意

- `lastUpdated` は CI が自動書き換えするため手動で触らない
- vault 側には転職活動用の機密情報(年収・転職意向など)が含まれる。サイトには絶対に持ち込まない
