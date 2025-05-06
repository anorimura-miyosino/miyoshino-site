// "use client"; // 不要なので削除

import Link from "next/link";
// import { client } from "../libs/microcms"; // 不要

// APIスキーマに基づいた型定義 (再定義)
// (microCMSの型を直接使う方が良い場合もある)
export type NewsArticle = {
  id: string;
  title: string;
  content?: string; // contentは必須ではないかもしれない
  category?: {
    id: string;
    name: string;
  };
  publishedAt?: string;
};

// 日付のフォーマット関数
const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
};

// Propsの型を定義
type Props = {
  newsItems: NewsArticle[]; // 親から記事の配列を受け取る
};

// コンポーネントは通常の関数に。propsを受け取る
const News = ({ newsItems }: Props) => {
  // データ取得ロジックは削除

  return (
    <section id="news" className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 bg-primary text-white py-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">最新のお知らせ</h2>
          <p className="text-xl max-w-3xl mx-auto">
            最新の情報やお知らせをご覧いただけます。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* エラー表示は削除 (ページ側でハンドリング) */}
          {newsItems.length > 0 ? (
            newsItems.map((news) => (
              <article
                key={news.id}
                className="mb-8 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-wrap justify-between items-center mb-3">
                  <time
                    className="text-lg text-gray-600"
                    dateTime={news.publishedAt}
                  >
                    {formatDate(news.publishedAt)}
                  </time>
                  {news.category && (
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-md">
                      {news.category.name}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <Link
                    href={`/news/${news.id}`}
                    className="hover:text-primary"
                  >
                    {news.title}
                  </Link>
                </h3>
                {/* excerpt を表示するなら別途データ構造を検討 */}
                <div className="text-right">
                  <Link
                    href={`/news/${news.id}`}
                    className="text-primary font-medium hover:underline text-lg inline-block"
                  >
                    詳細を読む
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-lg">現在、お知らせはありません。</p>
          )}
        </div>

        <div className="text-center mt-12">
          <Link href="/news" className="btn btn-primary">
            すべてのお知らせを見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
