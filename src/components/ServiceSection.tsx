"use client";

import Link from 'next/link';

// サービス情報の配列
const services = [
  {
    id: 1,
    title: '不動産売買',
    description: 'お客様のご要望に合わせた物件探しから購入まで丁寧にサポートいたします。',
    icon: '/icons/home.svg',
    link: '/services/buy-sell',
  },
  {
    id: 2,
    title: '賃貸管理',
    description: '安心して任せられる物件管理で、オーナー様と入居者様双方にご満足いただけるサービスを提供します。',
    icon: '/icons/key.svg',
    link: '/services/rental',
  },
  {
    id: 3,
    title: 'リフォーム・リノベーション',
    description: '理想の住まいづくりをお手伝い。プロの目線で最適なプランをご提案します。',
    icon: '/icons/tools.svg',
    link: '/services/renovation',
  },
  {
    id: 4,
    title: '不動産コンサルティング',
    description: '不動産の有効活用や投資など、専門知識を活かしたアドバイスで資産価値の最大化をサポートします。',
    icon: '/icons/chart.svg',
    link: '/services/consulting',
  },
];

const ServiceSection = () => {
  return (
    <section className="py-20 bg-background-main">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">サービス内容</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            かわつる三芳野団地では、お客様のニーズに合わせた様々なサービスを提供しています。
            お気軽にご相談ください。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary">
                  {/* アイコンを表示 */}
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{service.title}</h3>
              <p className="text-lg mb-6 text-text-secondary flex-grow">{service.description}</p>
              <div className="text-center mt-auto">
                <Link 
                  href={service.link} 
                  className="inline-block px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/services" className="btn btn-primary px-8 py-3 rounded-full text-lg">
            すべてのサービスを見る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 