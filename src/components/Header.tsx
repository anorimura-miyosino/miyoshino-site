"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { Kosugi_Maru } from "next/font/google";
//import { useRouter } from "next/router";

const kosugiMaru = Kosugi_Maru({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 初期値設定
    setIsMobile(window.innerWidth < 769);

    // スクロール位置が0かどうかのチェック
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      if (scrollY <= threshold) {
        setScrollProgress(scrollY / threshold);
        setIsAtTop(scrollY < 10);
      } else {
        setScrollProgress(1);
        setIsAtTop(false);
      }
    };

    // リサイズイベントのリスナーを設定
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // 初期チェック
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //const router = useRouter();
  //const imageUrl = `${router.basePath}/hero-image.jpg`;
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX;
  const imageUrl = `${assetPrefix}hero-image.jpg`;

  return (
    <>
      {/* ランディングページ用ヘッダー */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          opacity: isAtTop ? 1 - scrollProgress : 0,
          transition: "opacity 0.5s ease-in-out",
          pointerEvents: isAtTop ? "auto" : "none",
        }}
      >
        {/* 暗いオーバーレイ */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          }}
        />

        {/* 全画面メニュー - テキストは白に変更 */}
        <div
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "3rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            transform: `translateY(${scrollProgress * 20}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1
            style={{
              fontFamily: kosugiMaru.style.fontFamily,
              fontSize: "3.5rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              margin: 0,
            }}
          >
            かわつる三芳野団地
          </h1>
          <p
            style={{
              fontFamily: kosugiMaru.style.fontFamily,
              fontSize: "1.5rem",
              lineHeight: "1.2",
              margin: "1rem 0 0 0",
            }}
          >
            Kawatsuru Miyoshino Housing Complex
          </p>
        </div>

        {/* ナビゲーションボタン */}
        {!isMobile ? (
          <nav
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem",
              justifyContent: "center",
              maxWidth: "600px",
              transform: `translateY(${scrollProgress * 30}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <Button
              href="/#summary"
              style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}
            >
              あらまし
            </Button>
            <Button
              href="/#news"
              style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}
            >
              お知らせ
            </Button>
            <Button
              href="/#facility"
              style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}
            >
              建物・施設紹介
            </Button>
            <Button
              href="/#surrounding-environment"
              style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}
            >
              周辺環境
            </Button>
            <Button
              href="/#child-rearing-support"
              style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}
            >
              子育て支援
            </Button>
            <Button
              href="/#access"
              style={{ fontSize: "1.25rem", padding: "1rem 2rem" }}
            >
              アクセス
            </Button>
            <Button
              href="/#contact"
              style={{
                fontSize: "1.25rem",
                padding: "1rem 2rem",
                gridColumn: "span 2",
              }}
            >
              お問い合わせ
            </Button>
          </nav>
        ) : (
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "80%",
            }}
          >
            <Button
              href="/#news"
              style={{ fontSize: "1.25rem", padding: "1rem" }}
            >
              お知らせ
            </Button>
            <Button
              href="/#summary"
              style={{ fontSize: "1.25rem", padding: "1rem" }}
            >
              あらまし
            </Button>
            <Button
              href="/#facility"
              style={{ fontSize: "1.25rem", padding: "1rem" }}
            >
              建物・施設紹介
            </Button>
            <Button
              href="/#surrounding-environment"
              style={{ fontSize: "1.25rem", padding: "1rem" }}
            >
              周辺環境
            </Button>
            <Button
              href="/#child-rearing-support"
              style={{ fontSize: "1.25rem", padding: "1rem" }}
            >
              子育て支援
            </Button>
            <Button
              href="/#access"
              style={{ fontSize: "1.25rem", padding: "1rem" }}
            >
              アクセス
            </Button>
            <Button
              href="/#contact"
              style={{ fontSize: "1.25rem", padding: "1rem" }}
            >
              お問い合わせ
            </Button>
          </nav>
        )}

        {/* スクロールダウン指示 */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: 0,
            right: 0,
            textAlign: "center",
            animation: "bounce 2s infinite",
            color: "white",
            opacity: 1 - scrollProgress * 2,
          }}
        >
          <style jsx>{`
            @keyframes bounce {
              0%,
              20%,
              50%,
              80%,
              100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-20px);
              }
              60% {
                transform: translateY(-10px);
              }
            }
          `}</style>
          {/* スクロールして続きを見る */}
          {/* <p style={{ marginBottom: "0.5rem" }}>スクロールして続きを見る</p> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ margin: "0 auto" }}
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </header>

      {/* 通常のヘッダー */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 50,
          opacity: scrollProgress,
          transform: `translateY(${isAtTop ? -100 : 0}%)`,
          transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "left", color: "#4CAF50" }}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1
                  style={{
                    fontFamily: kosugiMaru.style.fontFamily,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                    margin: 0,
                  }}
                >
                  かわつる三芳野団地
                </h1>
                <p
                  style={{
                    fontFamily: kosugiMaru.style.fontFamily,
                    fontSize: "0.75rem",
                    lineHeight: "1.2",
                    margin: "2px 0 0 0",
                  }}
                >
                  Kawatsuru Miyoshino Housing Complex
                </p>
              </Link>
            </div>

            {!isMobile && (
              <nav style={{ display: "flex", gap: "0.5rem" }}>
                <Button href="/">ホーム</Button>
                <Button href="/#news">お知らせ</Button>
                <Button href="/#summary">あらまし</Button>
                <Button href="/#facility">建物・施設紹介</Button>
                <Button href="/#surrounding-environment">周辺環境</Button>
                <Button href="/#child-rearing-support">子育て情報</Button>
                <Button href="/#access">アクセス</Button>
                <Button href="/#contact">お問い合わせ</Button>
              </nav>
            )}

            {isMobile && (
              <button
                style={{
                  color: "#333333",
                  padding: "0.5rem",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="メニューを開く"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: "2rem", height: "2rem" }}
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
            )}
          </div>

          {isMobile && isMenuOpen && (
            <div style={{ marginTop: "1rem", paddingBottom: "1rem" }}>
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Button
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  ホーム
                </Button>
                <Button
                  href="/#news"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  お知らせ
                </Button>
                <Button
                  href="/#summary"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  あらまし
                </Button>
                <Button
                  href="/#facility"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  建物・施設紹介
                </Button>
                <Button
                  href="/#surrounding-environment"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  周辺環境
                </Button>
                <Button
                  href="/#child-rearing-support"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  子育て情報
                </Button>
                <Button
                  href="/#access"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  アクセス
                </Button>
                <Button
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-xl"
                >
                  お問い合わせ
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
