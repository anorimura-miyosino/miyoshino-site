"use client";

import Link from 'next/link';

// 仮のお知らせデータ（後でMicroCMSから取得するように変更）
const newsItems = [
  {
    id: 'news1',
    title: 'ウェブサイトをリニューアルしました',
    date: '2025-04-29',
    category: 'お知らせ',
    excerpt: 'この度、ウェブサイトを全面リニューアルしました。新しいデザインと機能で、より使いやすくなりました。',
  },
  {
    id: 'news2',
    title: '新サービスの提供を開始します',
    date: '2025-04-20',
    category: 'サービス',
    excerpt: '新しいサービスの提供を開始します。詳細は記事をご覧ください。',
  },
  {
    id: 'news3',
    title: 'GW期間中の営業について',
    date: '2025-04-15',
    category: 'お知らせ',
    excerpt: 'ゴールデンウィーク期間中の営業予定についてお知らせします。',
  },
];

// 日付のフォーマット関数
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
};

const NewsSection = () => {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">最新のお知らせ</h2>
          <p className="text-xl max-w-3xl mx-auto">
            最新の情報やお知らせをご覧いただけます。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {newsItems.map((news) => (
            <article 
              key={news.id}
              className="mb-8 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-wrap justify-between items-center mb-3">
                <time className="text-lg text-gray-600" dateTime={news.date}>
                  {formatDate(news.date)}
                </time>
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-md">
                  {news.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                <Link href={`/news/${news.id}`} className="hover:text-primary">
                  {news.title}
                </Link>
              </h3>
              <p className="text-lg text-text-secondary mb-4">{news.excerpt}</p>
              <div className="text-right">
                <Link 
                  href={`/news/${news.id}`} 
                  className="text-primary font-medium hover:underline text-lg inline-block"
                >
                  詳細を読む
                </Link>
              </div>
            </article>
          ))}
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

export default NewsSection; 