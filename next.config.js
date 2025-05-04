/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pagesのため、リポジトリ名がURL一部になる場合の設定
  // basePath: '/miyoshino-site', // リポジトリ名をここに指定（必要な場合のみコメントを外す）
  // GitHub Pagesでの画像読み込みのための設定
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 