"use client";

import React from "react";

const Access = () => {
  return (
    <section id="access" className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 bg-primary text-white py-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">アクセス</h2>
          <p className="text-xl max-w-3xl mx-auto">
            当団地への交通アクセス情報と地図をご覧いただけます。
          </p>
        </div>

        <div className="max-w-4xl mx-auto shadow-md rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.979362407595!2d139.40713427593903!3d35.9230051725103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018d77429073a1f%3A0xede807afe483edbc!2z44GL44KP44Gk44KL5LiJ6Iqz6YeO5Zuj5Zyw566h55CG57WE5ZCI!5e0!3m2!1sja!2sjp!4v1746511182749!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="埼玉県川越市かわつる三芳野1番地 Google Map"
          ></iframe>
        </div>

        <div className="max-w-4xl mx-auto mt-8 text-lg">
          <h3 className="text-2xl font-bold mb-4">交通手段</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              東武東上線
              鶴ヶ島駅西口より「川鶴団地」行きバスで約７分「川鶴センター」下車すぐ
            </li>
            <li>関越道・圏央道「鶴ケ島インター」から、車で約10分</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Access;
