import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              かわつる三芳野団地地区について
            </h1>
            
            <div className="bg-white shadow-md rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">かわつる三芳野団地地区の概要</h2>
              <div className="prose max-w-none text-lg">
                <p>
                  かわつる三芳野団地地区は都心から約40Km離れ、日高沿線と呼ばれる沿線の最西端に位置し、
                  東武東上線高麗駅から西南約2Kmのところにあります。雄大で広大な「みやしの平地」が広がる地域で、
                  高麗市とも接しています。
                </p>
                <p>
                  この地域は1980年代から、市街地再開発が進む「南部対応市街地」として開発された地区で、
                  現在も継続的に面整備が行われ「ニュータウン」の一つとして親しまれています。
                </p>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-primary">基本情報</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <div>
                  <p className="mb-4"><span className="font-semibold">所在地:</span> 〒350-1177 埼玉県坂戸市かわつる三芳野団地1番地</p>
                  <p className="mb-4"><span className="font-semibold">交通:</span> 東武東上線高麗駅下車、「団地」市内バスで約7分「団地センター」下車、または圏央道・関越道「坂戸インター」から、車で約10分</p>
                  <p className="mb-4"><span className="font-semibold">総戸数:</span> 548戸（住居区分など詳細は別途）</p>
                  <p className="mb-4"><span className="font-semibold">入居開始:</span> 昭和57(1982)年8月25日</p>
                  <p className="mb-4"><span className="font-semibold">敷地面積:</span> 69,786.60㎡（うち管理組合法人所有 269.77㎡）</p>
                </div>
                <div>
                  <p className="mb-4"><span className="font-semibold">建築面積:</span> 15,540㎡（延 51,540㎡）</p>
                  <p className="mb-4"><span className="font-semibold">駐車場:</span> 434台（空車率 79.2％）（大型車枠42台、小型駐車枠387台、身障者駐車枠5台）</p>
                  <p className="mb-4"><span className="font-semibold">駐車料金:</span> 5,500円/月</p>
                  <p className="mb-4"><span className="font-semibold">修繕積立金:</span> 7,000〜12,000円/月（区分別は別途）</p>
                  <p className="mb-4"><span className="font-semibold">駐輪場料金:</span> 4,500円/月（身障者用は半額、自転車・原付30分100円/回）</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">かわつる三芳野団地地区の歴史</h2>
              <div className="prose max-w-none text-lg">
                <ul className="space-y-3">
                  <li><span className="font-semibold">昭和57(82)年6月:</span> 住民募集開始（坂戸地区で最初の分譲団地）</li>
                  <li><span className="font-semibold">昭和57(82)年8月:</span> 第1回募集入居、管理組合結成、規約・細則・役員選任</li>
                  <li><span className="font-semibold">昭和57(82)年8月25日:</span> 入居開始</li>
                  <li><span className="font-semibold">昭和58(83)年1月:</span> 7年テレビ共聴（後に有線共聴、現在は光回線に移管）</li>
                  <li><span className="font-semibold">昭和59(84)年4月:</span> 自主管理の制スタート、理事会・各種委員会が管理運営を全面担当</li>
                  <li><span className="font-semibold">平成12(00)年6月:</span> NHKが団地管理組合の運営状況を取材、6月21日ニュース10で全国に報道</li>
                  <li><span className="font-semibold">平成12(00)年10月:</span> 住民総会に「住民協力金制度」を提案</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-primary">歴代管理組合法人理事長</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-lg">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border p-3 text-left">代</th>
                      <th className="border p-3 text-left">期間</th>
                      <th className="border p-3 text-left">氏名</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">初代</td>
                      <td className="border p-3">82/8〜86/5</td>
                      <td className="border p-3">森山政雄</td>
                    </tr>
                    <tr>
                      <td className="border p-3">2代</td>
                      <td className="border p-3">86/5〜88/5</td>
                      <td className="border p-3">荒川博之</td>
                    </tr>
                    <tr>
                      <td className="border p-3">3代</td>
                      <td className="border p-3">88/5〜92/5</td>
                      <td className="border p-3">小池久雄</td>
                    </tr>
                    <tr>
                      <td className="border p-3">4代</td>
                      <td className="border p-3">96/5〜98/5</td>
                      <td className="border p-3">小川保</td>
                    </tr>
                    <tr>
                      <td className="border p-3">5代</td>
                      <td className="border p-3">98/5〜00/5</td>
                      <td className="border p-3">川井仁</td>
                    </tr>
                    <tr>
                      <td className="border p-3">6代</td>
                      <td className="border p-3">00/5〜</td>
                      <td className="border p-3">山本純男</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 