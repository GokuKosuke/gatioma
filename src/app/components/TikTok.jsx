"use client"

import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

function TikTok({ clickedTikTok, setClickedTikTok}) {

    useEffect(() => {
        // ScrollTriggerプラグインの登録
        gsap.registerPlugin(ScrollTrigger);
    
 // アニメーションの設定
 gsap.to(".img1", {  // アニメーション対象を .img1 に変更
    scrollTrigger: {
      trigger: ".img1",   // トリガーは img1 に設定
      start: "100% 100%",    // スクロール開始位置
      end: "bottom 50%",      // スクロール終了位置
      scrub: 1,            // スクロールに合わせてアニメーション進行
      // markers: true        // デバッグ用のマーカーを表示
    },
    y: -1000,              // X軸方向に移動
  });
 gsap.to(".img2", {  // アニメーション対象を .img1 に変更
    scrollTrigger: {
      trigger: ".img2",   // トリガーは img1 に設定
      start: "100% 100%",    // スクロール開始位置
      end: "bottom 50%",      // スクロール終了位置
      scrub: 1,            // スクロールに合わせてアニメーション進行
      markers: true        // デバッグ用のマーカーを表示
    },
    y: -800,              // X軸方向に移動
  });
 gsap.to(".img3", {  // アニメーション対象を .img1 に変更
    scrollTrigger: {
      trigger: ".img3",   // トリガーは img1 に設定
      start: "100% 100%",    // スクロール開始位置
      end: "bottom 50%",      // スクロール終了位置
      scrub: 1,            // スクロールに合わせてアニメーション進行
      markers: true        // デバッグ用のマーカーを表示
    },
    y: -600,              // X軸方向に移動
  });
 gsap.to(".img4", {  // アニメーション対象を .img1 に変更
    scrollTrigger: {
      trigger: ".img4",   // トリガーは img1 に設定
      start: "100% 100%",    // スクロール開始位置
      end: "bottom 50%",      // スクロール終了位置
      scrub: 1,            // スクロールに合わせてアニメーション進行
      markers: true        // デバッグ用のマーカーを表示
    },
    y: -400,              // X軸方向に移動
  });
}, []);

  return (
    <div className={`tiktokpage ${clickedTikTok ? "activetiktok" : ""}`}>
      <div className="section1">
        <div className="fuyofuyo">
          <div className="img1 img">
            <img src="/black100.PNG" alt=""/>  
          </div>
          <div className="img2 img">
            <img src="/black300.PNG" alt="" />
          </div>
          <div className="img3 img">
            <img src="/black500.PNG" alt="" />
          </div>
          <div className="img4 img">
            <img src="/black900.PNG" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TikTok
