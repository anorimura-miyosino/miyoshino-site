"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">かわつる三芳野団地</h2>
            <address className="not-italic mb-4 text-lg">
              <p>〒123-4567</p>
              <p>東京都〇〇区△△1-2-3</p>
              <p>TEL: 03-1234-5678</p>
              <p>FAX: 03-1234-5679</p>
              <p>Email: info@k-miyosino.com</p>
            </address>
          </div>

          {/* サイトマップ */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">サイトマップ</h2>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-lg hover:text-primary">
                ホーム
              </Link>
              <Link href="/about" className="text-lg hover:text-primary">
                会社案内
              </Link>
              <Link href="/services" className="text-lg hover:text-primary">
                サービス
              </Link>
              <Link href="/news" className="text-lg hover:text-primary">
                お知らせ
              </Link>
              <Link href="/contact" className="text-lg hover:text-primary">
                お問い合わせ
              </Link>
            </nav>
          </div>

          {/* 営業時間 */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">営業時間</h2>
            <p className="text-lg mb-2">平日: 9:00 - 18:00</p>
            <p className="text-lg mb-2">土曜: 9:00 - 15:00</p>
            <p className="text-lg mb-4">日曜・祝日: 休業</p>
            <div className="mt-6">
              <Link href="/contact" className="btn btn-primary">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-lg">© {currentYear} かわつる三芳野団地 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 