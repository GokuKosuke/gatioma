"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function TikTok({ clickedTikTok, setClickedTikTok }) {
  useEffect(() => {
    // ScrollTriggerプラグインの登録
    gsap.registerPlugin(ScrollTrigger);

    // 各画像に対してアニメーション設定
    ["img1", "img2", "img3", "img4"].forEach((className, index) => {
      gsap.to(`.${className}`, {
        scrollTrigger: {
          trigger: `.${className}`, // トリガーをクラスごとに設定
          start: "-100% center", // スクロール開始位置
          end: "bottom center", // スクロール終了位置
          scrub: 1, // スクロールに合わせて進行
          markers: true, // デバッグ用マーカーを表示
        },
        y: -(1000 - index * 200), // Y軸方向の移動距離を調整
      });
    });
  }, []);

  const handleClickTikTok2 = () => {
    setClickedTikTok(!clickedTikTok)
  }
  return (
    <div className={`tiktokpage ${clickedTikTok ? "activetiktok" : ""}`}>
      <div className="backArrow23" onClick={handleClickTikTok2}>
        <ArrowBackIcon className="backArrow2"/>
        <ArrowBackIcon className="backArrow3"/>
      </div>
      <div className="section1">
        <div className="fuyofuyo">
          {["black100.PNG", "black300.PNG", "black500.PNG", "black900.PNG"].map(
            (src, index) => (
              <div key={index} className={`img${index + 1} img`}>
                <img src={`/${src}`} alt="" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TikTok;
