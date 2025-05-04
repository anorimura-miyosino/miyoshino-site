"use client";

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      {/* 背景色 */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary to-background-main">
        {/* 緑の半透明オーバーレイ */}
        <div className="absolute inset-0 bg-primary/10"></div>
      </div>
      
      {/* テキストとCTAボタン */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="bg-white/90 p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              かわつる三芳野団地へようこそ
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700">
              お客様のニーズに合わせた最適なサービスを提供いたします。<br />
              私たちと一緒に新しい可能性を探しましょう。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services" className="btn btn-primary text-center">
                サービス内容を見る
              </Link>
              <Link href="/contact" className="btn btn-secondary text-center">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 下部のスクロールダウン表示 */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-primary/30 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 