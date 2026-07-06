# AGENTS.md — エージェント向け引き継ぎ資料(正本)

このファイルは Claude Code / Codex など、すべての AI エージェントが最初に読む正本ドキュメント。
Claude Code は `CLAUDE.md` 経由で本ファイルを読み込む。Codex は本ファイルを直接読む(`.codex/` は不要)。

最終更新: 2026-07-07

## プロジェクト概要

- **サイト**: https://noraguwa.com — 石垣雄大のポートフォリオサイト
- **技術**: Vite + React 18 SPA、TypeScript、Tailwind CSS v4、react-router-dom v7
- **ページ**: `/`(Home)、`/profile`(About)、`/blog`(Qiita 記事リンク集)、`/projects`
- **コンテンツ管理**: 全ページの表示内容は `src/app/content/contentConfig.js` の 1 ファイルに集約(CMS なし)

## ⚠️ デプロイ警告(最重要)

**main への push = 本番デプロイ。**
GitHub Actions(`.github/workflows/cicd.yml`)が push を検知し、lint → vitest → build → WireGuard VPN 経由で自宅 Raspberry Pi(noraguwa.com)へ `dist/` を scp する。

- push 前に必ずローカルで `npm run lint && npm run test:ui && npm run build` をすべてグリーンにすること
- push はユーザーの明示的な指示があるときのみ実行すること
- `contentConfig.js` の `lastUpdated` は CI がビルド日時に自動書き換えするため、手動で触らない

## 正本マップ(どの事実がどこにあるか)

| 事実の種類 | 正本 | 備考 |
|---|---|---|
| 経歴・スキル・資格・実績の元データ | Obsidian vault `/Users/ishigaki/MyObsidian/Profile/Core/` | このリポジトリからは読み取りのみ。vault 側の AGENTS.md にも従う |
| サイトの表示内容(経歴/資格/スキル/趣味/ブログ/プロジェクト) | `src/app/content/contentConfig.js` | 構造(フィールド)を変えるとテストが壊れる可能性あり |
| Profile ページのイントロ文 | `src/app/components/AboutPage.tsx` | **変更時は `BodyTextReadable.test.tsx` の matcher を必ず同期** |

原則: 元データは vault が正、サイト表示は contentConfig.js が正。vault → サイトへの反映手順は `.claude/skills/profile-sync/SKILL.md` を参照。

## 公開表現ルール(公開サイトなので厳守)

1. **金額を書かない**: 年収・案件金額・契約金額は一切掲載しない(「受注に貢献」等の表現を使う)
2. **表彰は「選出」**: 社内月間表彰は「選出」と書く。「受賞」は不可
3. **AI 削減効果は「約80%(30分→5分)」**: 「90%」は過大表現のため不可
4. **経験年数は「3年目」**: 「約3年」は不可
5. **顧客名は業界名で匿名化**: 放送業界、決済系、電力系 など。実名・SoW 番号は不可
6. **公開可能な製品名は 6 つのみ**: Trend Micro Deep Security, Logstorage, SecureMX, ForcePoint, Crowdstrike, Splunk。それ以外は「○○製品」等にぼかす
7. **転職意向・現職への不満は絶対に書かない**
8. **勤務先の実名(日本ヒューレット・パッカード合同会社)はこのサイトでは掲載 OK**(ユーザー決定済み。LinkedIn 等で公開済みのため)

## 開発コマンド

```bash
npm run dev      # 開発サーバー(Vite)
npm run lint     # ESLint
npm run test:ui  # Vitest(CI で実行されるのはこちら)
npm run test     # Node 組み込みテストランナー(.test.js のみ)
npm run build    # 本番ビルド
```

## テストの注意

- `src/app/content/contentConfig.test.js`: **shape 検証のみ**(フィールドの存在チェック)。内容の文言変更は安全。フィールド削除・リネームは壊れる
- `src/app/components/BodyTextReadable.test.tsx`: AboutPage / HomePage 等の**特定の文言を正規表現で固定**している。イントロ文を変えたら必ずこのテストも更新する
- その他のコンポーネントテストは概ねレイアウト・動作の検証

## コミット規約

- Conventional Commits(`feat:` / `fix:` / `docs:` / `chore:` 等)、日本語の説明可
- attribution フッター(Co-Authored-By 等)は付けない

## リポジトリ構造の注意

git リポジトリは `/Users/ishigaki/dev/PortFolio-Blog/PortFolio-Blog/`(このファイルがあるディレクトリ)。
親フォルダ `/Users/ishigaki/dev/PortFolio-Blog/` は git 管理外のラッパー。remote は `github.com/morphosync102/MyPortFolio`。

## 今後の改善方針

機能・コンテンツの発展ロードマップは `docs/ROADMAP.md` を参照。
