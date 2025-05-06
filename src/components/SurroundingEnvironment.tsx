"use client";

import React from "react";

const SurroundingEnvironment = () => {
  return (
    <section id="surrounding-environment" className="py-16 bg-background-main">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 bg-primary text-white py-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">周辺環境</h2>
          <p className="text-xl max-w-3xl mx-auto">
            かわつる三芳野団地周辺の生活に便利な施設や豊かな自然環境をご紹介します。
          </p>
        </div>
        {/* ここに具体的な周辺環境情報を記述 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">公園・緑地</h3>
            <p className="text-lg">
              徒歩圏内に複数の公園があり、お子様との遊びや散歩に最適です。季節ごとの自然も楽しめます。
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">商業施設</h3>
            <p className="text-lg">
              スーパーマーケット、ドラッグストア、コンビニエンスストアなどが近隣にあり、日常のお買い物に便利です。
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">教育機関</h3>
            <p className="text-lg">
              保育園、幼稚園、小中学校が通学しやすい範囲にあり、子育て世代にも安心の環境です。
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">医療機関</h3>
            <p className="text-lg">
              内科、小児科、歯科などのクリニックが近くにあり、万が一の際も安心です。
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">交通アクセス</h3>
            <p className="text-lg">
              最寄り駅やバス停からのアクセスも良好で、通勤・通学にも便利です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurroundingEnvironment;
