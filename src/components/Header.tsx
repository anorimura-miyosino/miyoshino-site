"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ部分 */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary flex items-center">
              <span className="mr-2">かわつる三芳野団地</span>
            </Link>
          </div>

          {/* PC向けナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-lg font-medium hover:text-primary">
              ホーム
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-primary">
              会社案内
            </Link>
            <Link href="/services" className="text-lg font-medium hover:text-primary">
              サービス
            </Link>
            <Link href="/news" className="text-lg font-medium hover:text-primary">
              お知らせ
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-primary">
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button 
            className="md:hidden text-text-primary p-2" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="メニューを開く"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-xl font-medium hover:text-primary py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link 
                href="/about" 
                className="text-xl font-medium hover:text-primary py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                会社案内
              </Link>
              <Link 
                href="/services" 
                className="text-xl font-medium hover:text-primary py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                サービス
              </Link>
              <Link 
                href="/news" 
                className="text-xl font-medium hover:text-primary py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                お知らせ
              </Link>
              <Link 
                href="/contact" 
                className="text-xl font-medium hover:text-primary py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 