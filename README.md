# gilt

SvelteKit製のファッションECサイト。[`sv`](https://github.com/sveltejs/cli)をベースに構築。

## 技術スタック

- [SvelteKit](https://kit.svelte.dev/) — フレームワーク
- TypeScript — 型安全
- Bootstrap — レイアウト・グリッド
- Siema — カルーセル
- AWS API Gateway — 商品データAPI

## 環境変数

`.env` ファイルをプロジェクトルートに作成し、以下を設定してください：

```env
API_URL=https://your-api-url/prod/api/products
```

## 開発環境のセットアップ

依存関係をインストール：

```sh
npm install
```

開発サーバーを起動：

```sh
npm run dev

# ブラウザで自動的に開く場合
npm run dev -- --open
```

## ビルド

本番用ビルドを作成：

```sh
npm run build
```

ビルド結果のプレビュー：

```sh
npm run preview
```

## プロジェクト構成

```
src/
├── components/       # UIコンポーネント
├── models/           # データモデル
├── routes/           # ページルーティング
├── stores/           # Svelteストア
└── lib/              # 共通アセット
static/
└── img/              # 静的画像ファイル
```

## デプロイ

デプロイ先の環境に応じて[アダプター](https://svelte.dev/docs/kit/adapters)のインストールが必要な場合があります。