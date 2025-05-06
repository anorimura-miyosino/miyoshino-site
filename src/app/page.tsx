import Facility from "../components/Facility";
import History from "../components/History";
import News, { NewsArticle } from "../components/News"; // NewsArticle 型もインポート
import Access from "../components/Access";
import SurroundingEnvironment from "../components/SurroundingEnvironment";
import ChildRearingSupport from "../components/ChildRearingSupport";
import Contact from "../components/Contact";
import { client } from "../libs/microcms"; // microCMSクライアントをインポート

// Homeコンポーネントをasyncに変更
export default async function Home() {
  console.log(
    "Server-side MICROCMS_SERVICE_DOMAIN:",
    process.env.MICROCMS_SERVICE_DOMAIN
  );
  console.log(
    "Server-side MICROCMS_API_KEY:",
    process.env.MICROCMS_API_KEY
      ? process.env.MICROCMS_API_KEY.substring(0, 5) + "..."
      : "undefined"
  ); // キー全体は出さずに一部だけ表示

  // microCMSからデータを取得 (エラーハンドリングを追加)
  let newsItems: NewsArticle[] = [];
  try {
    const newsData = await client.getList<NewsArticle>({
      endpoint: "news",
      queries: { orders: "-publishedAt", limit: 3 }, // 最新3件
    });
    newsItems = newsData.contents;
  } catch (error) {
    console.error("Failed to fetch news on server:", error);
    // エラー時、newsItems は空のまま。
    // 必要ならエラーメッセージを表示する仕組みをここに追加しても良い
  }

  return (
    <>
      <News newsItems={newsItems} />
      <History />
      <Facility />
      <SurroundingEnvironment />
      <ChildRearingSupport />
      <Access />
      <Contact />
    </>
  );
}
