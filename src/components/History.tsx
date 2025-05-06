"use client";

import React from "react";

const History = () => {
  return (
    <section id="summary" className="py-16 bg-background-main">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 bg-primary text-white py-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">団地のあらまし</h2>
          <p className="text-xl max-w-3xl mx-auto">
            かわつる三芳野団地の沿革や概要についてご紹介します。
          </p>
        </div>
        {/* ここに団地の歴史や概要などを記述 */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">沿革</h3>
          <div className="space-y-4 text-lg">
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1982年06月
              </div>
              <div>住宅分譲募集開始（かわつる地区で最初の分譲団地）</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1982年08月
              </div>
              <div>
                第１回創立総会、管理組合設立、小動物の飼育の許可を決定、入居開始
              </div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1982年10月
              </div>
              <div>「グリーンタウンニュース」創刊</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1983年04月
              </div>
              <div>管理事務所年中無休体制</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1983年08月
              </div>
              <div>夏まつり実施（以後毎年８月に実施）</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1984年04月
              </div>
              <div>完全自主管理体制スタート</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1984年06月
              </div>
              <div>「かわつる三芳野団地管理組合法人」と名称変更</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1984年07月
              </div>
              <div>「住まいのハンドブック」（第１版）発行</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1985年03月
              </div>
              <div>自治会設立総会（管理組合と分離）</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1986年10月
              </div>
              <div>新町名を「かわつる三芳野」に変更</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1987年02月
              </div>
              <div>ペットの飼育指針発表</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1989年03月
              </div>
              <div>団地内公団所有分の空家が完売</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1990年03月
              </div>
              <div>駐車場増設工事完了</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1993年03月
              </div>
              <div>長期修繕計画を策定</div>
            </div>
            <div className="flex border-b pb-2">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                1995年07月
              </div>
              <div>第１回大規模修繕工事着工</div>
            </div>
            <div className="flex">
              <div className="w-28 font-medium pr-4 text-right shrink-0">
                2000年06月
              </div>
              <div>
                ＮＨＫ「ニュース１０」で当団地管理組合の運営状況が全国放送
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-10 mb-4">概要</h3>
          <p className="text-lg">
            <ul className="space-y-3 text-lg">
              <li>
                <span className="font-medium inline-block w-28 shrink-0">
                  総戸数：
                </span>
                <span>548戸 (住居区分など詳細は次頁)</span>
              </li>
              <li>
                <span className="font-medium inline-block w-28 shrink-0">
                  入居開始：
                </span>
                <span>昭和57(1982)年8月25日</span>
              </li>
              <li>
                <span className="font-medium inline-block w-28 shrink-0">
                  敷地面積：
                </span>
                <span>69,786.60㎡ (他に管理組合法人登記分 269.77㎡)</span>
              </li>
              <li>
                <span className="font-medium inline-block w-28 shrink-0">
                  建築面積：
                </span>
                <span>15,540㎡ （延 51,540㎡）</span>
              </li>
              <li>
                <span className="font-medium inline-block w-28 shrink-0">
                  駐車場：
                </span>
                <span>
                  434台（充足率
                  79.2％）(専用[無料]42台．共用[有料]387台．来客用[有料]5台)
                </span>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
