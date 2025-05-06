/** @type {import('next').NextConfig} */
const nextConfig = {
  // リポジトリ名が URL に入る GitHub Pages 用の設定
  basePath: "/miyoshino-site", // ここはあんたのリポジトリ名に変えてくれ
  assetPrefix: "/miyoshino-site/", // 上と同じリポジトリ名にスラッシュを付けたもの

  output: "export", // next export を使うんで、こいつが必須だ

  // GitHub Pages で next/image を使うなら、画像の最適化をオフにするのが無難
  images: {
    unoptimized: true,
  },

  // trailingSlash: true, // お好みでページのURLの末尾にスラッシュを付けるかどうか
};

module.exports = nextConfig;
