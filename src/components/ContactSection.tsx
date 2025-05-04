"use client";

import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">お問い合わせ</h2>
          <p className="text-xl max-w-3xl mx-auto">
            サービスについてのご質問や、お見積もりのご依頼など、お気軽にお問い合わせください。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* お問い合わせ情報 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">お問い合わせ方法</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-3">電話でのお問い合わせ</h4>
              <p className="text-lg mb-2">03-1234-5678</p>
              <p className="text-lg mb-4">平日 9:00〜18:00</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-3">メールでのお問い合わせ</h4>
              <p className="text-lg mb-2">info@k-miyosino.com</p>
              <p className="text-lg mb-4">24時間受付中（返信は営業時間内）</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-3">所在地</h4>
              <p className="text-lg mb-2">〒123-4567</p>
              <p className="text-lg">東京都〇〇区△△1-2-3</p>
            </div>
          </div>
          
          {/* お問い合わせフォーム */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">お問い合わせフォーム</h3>
            <p className="text-lg mb-6">下記の簡易フォームからもお問い合わせいただけます。</p>
            
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium mb-2">
                  お名前 <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  メールアドレス <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-lg font-medium mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-lg font-medium mb-2">
                  お問い合わせ内容 <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto md:px-12"
                >
                  送信する
                </button>
              </div>
            </form>
            
            <p className="mt-6 text-lg text-center">
              詳細なお問い合わせは
              <Link href="/contact" className="text-primary font-medium hover:underline">
                こちら
              </Link>
              から
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 