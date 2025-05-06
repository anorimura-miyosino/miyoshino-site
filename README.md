# かわつる三芳野団地 公式ウェブサイト

モダンで高齢者にも優しいレスポンシブウェブサイトです。Next.js、TypeScript、Tailwind CSS を使用して構築されています。

## 特徴

- **モダンなデザイン**: 最新の UI/UX トレンドに基づいたデザイン
- **アクセシビリティ**: 高齢者にも見やすく使いやすいインターフェース
- **レスポンシブ**: スマートフォン、タブレット、PC など様々なデバイスに対応
- **高速表示**: Next.js による高速なページロード
- **MicroCMS 対応**: 後々コンテンツ管理に MicroCMS を使用することを想定した設計

## 技術スタック

- [Next.js](https://nextjs.org/) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファースト CSS フレームワーク
- [MicroCMS](https://microcms.io/) - ヘッドレス CMS（将来的に連携予定）

## 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://your-repository-url/miyoshino.git
cd miyoshino

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

## MicroCMS 連携（将来的な実装）

このプロジェクトは、後々 MicroCMS との連携を予定しています。

### 設定手順（実装時）

1. MicroCMS アカウントを作成し、API キーを取得
2. `.env.local`ファイルを作成し、MicroCMS 接続情報を追加
   ```
   NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=your-service-domain
   MICROCMS_API_KEY=your-api-key
   ```
3. MicroCMS SDK をインストール
   ```
   npm install microcms-js-sdk
   ```
4. `src/libs/microcms.ts`内のコメントアウトされたコードを適宜有効化

## コンテンツタイプ（MicroCMS 用）

以下のコンテンツタイプを作成する予定：

- **ニュース**: お知らせやブログ記事
- **サービス**: 提供サービスの詳細
- **会社情報**: 会社概要やスタッフ紹介

## ビルドと本番デプロイ

```bash
# 本番用ビルド
npm run build

# 本番サーバー起動
npm start
```

## ライセンス

このプロジェクトは[MIT ライセンス](LICENSE)の下で公開されています。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
