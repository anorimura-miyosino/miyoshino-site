import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // リポジトリ名が URL に入る GitHub Pages 用の設定
  basePath: "/miyoshino-site", // ここはあんたのリポジトリ名に変えてくれ
  assetPrefix: "/miyoshino-site/", // 上と同じリポジトリ名にスラッシュを付けたもの

  output: "export", // next export を使うんで、こいつが必須だ

  // GitHub Pages で next/image を使うなら、画像の最適化をオフにするのが無難
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: "/miyoshino-site/", // assetPrefix と同じ値を設定
  },

  // trailingSlash: true, // お好みでページのURLの末尾にスラッシュを付けるかどうか
};

export default nextConfig;
