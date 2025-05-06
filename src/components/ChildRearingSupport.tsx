"use client";

import React from "react";

const ChildRearingSupport = () => {
  return (
    <section
      id="child-rearing-support"
      className="py-16 bg-background-secondary"
    >
      {" "}
      {/* 背景色を変えてみる */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 bg-primary text-white py-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">子育て世代向けサポート</h2>
          <p className="text-xl max-w-3xl mx-auto">
            当団地では、子育て世代の皆様が安心して暮らせるための様々なサポートや施設をご用意しています。
          </p>
        </div>
        {/* ここに具体的な子育てサポート情報を記述 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">団地内公園・遊び場</h3>
            <p className="text-lg">
              敷地内にはお子様が安全に遊べる公園や広場があります。住民同士の交流の場にもなっています。
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">子育てサークル・イベント</h3>
            <p className="text-lg">
              地域の子育てサークル活動が活発で、親子で参加できるイベントも定期的に開催されています。
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">近隣の教育・保育施設</h3>
            <p className="text-lg">
              保育園、幼稚園、小学校が近くにあり、通園・通学も安心です。学童保育などの情報も提供しています。
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">医療サポート</h3>
            <p className="text-lg">
              小児科やアレルギー科など、お子様の健康をサポートする医療機関が近隣に充実しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildRearingSupport;
