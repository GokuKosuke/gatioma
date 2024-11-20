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
          end: "bottom 10%", // スクロール終了位置
          scrub: true, // スクロールに合わせて進行
          // markers: true, // デバッグ用マーカーを表示
        },
        y: -(1000 - index * 200), // Y軸方向の移動距離を調整
      });
    });

    gsap.fromTo(
      ".tikTextomae1",
      {
        opacity: 1,   // 初期状態
        x: -1000,
        y: -1000,
        rotate: -360
      },
      {
        opacity: 1,   // 終了状態
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 10%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 50%", // .texts の下端が画面の25%位置に来たら終了
    scrub: true,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".tikTextomae2",
      {
        opacity: 1,   // 初期状態
        x: -1000,
        y: 2000,
        rotate: 360
      },
      {
        opacity: 1,   // 終了状態
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 10%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 50%", // .texts の下端が画面の25%位置に来たら終了
    scrub: true,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".tikTextomae3",
      {
        opacity: 0,   // 初期状態
        x: 1000,
        y: -1000,
        rotate: 360
      },
      {
        opacity: 1,   // 終了状態
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 10%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 50%", // .texts の下端が画面の25%位置に来たら終了
    scrub: true,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".tikTextomae4",
      {
        opacity: 0,   // 初期状態
        x: 1000,
        y: 2000,
        rotate: 360
      },
      {
        opacity: 1,   // 終了状態
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 10%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 50%", // .texts の下端が画面の25%位置に来たら終了
    scrub: true,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".tiktoklife1",
      {
        opacity: 0,   // 初期状態
        y: 400,
        x: -400,
        rotate: 1080
      },
      {
        opacity: 1,   // 終了状態
        y: 0,
        x: 0,
        rotate: 0,
        duration: 1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 10%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 30%", // .texts の下端が画面の25%位置に来たら終了
    scrub: true,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".tiktoklife2",
      {
        opacity: 0,   // 初期状態
        y: 400,
        rotate: 360
      },
      {
        opacity: 1,   // 終了状態
        y: 0,
        rotate: 0,
        duration: 1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 10%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 30%", // .texts の下端が画面の25%位置に来たら終了
    scrub: true,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".omatik",
      {
        opacity: 1,   // 初期状態
        y: 0,
      },
      {
        opacity: 0,   // 終了状態
        y: 150,
        duration: .1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 0%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 50%", // .texts の下端が画面の25%位置に来たら終了
    scrub: 2,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".otoko",
      {
        opacity: 1,   // 初期状態
      },
      {
        opacity: 0,   // 終了状態
        duration: .1, // アニメーションの時間（任意）
  scrollTrigger: {
    trigger: ".section", // 親要素全体をトリガーに設定
    start: "top 0%",  // .texts の上端が画面の75%位置に来たら開始
    end: "bottom 50%", // .texts の下端が画面の25%位置に来たら終了
    scrub: 3,
    // markers: true
}
      }
    );
    gsap.fromTo(
      ".otoko",
      {
        // x: 200,
        y: 30,
        x: -150,
        rotate: -30,
        scale: 0.8
      },
      {
        // x: 0,
        y: 400,
        x: 100,
        rotate: 40,
        scales: 1,
        scrollTrigger: {
          trigger: ".section", // 親要素全体をトリガーに設定
          start: "top 0%",  // .texts の上端が画面の75%位置に来たら開始
          end: "bottom 50%", // .texts の下端が画面の25%位置に来たら終了
          scrub: true,
          // markers: true
      }
    }
   );
    gsap.fromTo(
      ".movies > .movies1 > video:nth-child(1)",
      {
        y: -130,
        x: -500,
        rotate: -95
      },
      {
        // x: 0,
        y: 0,
        x: 0,
        rotate: -20,
        scrollTrigger: {
          start: "top -10%",  // .texts の上端が画面の75%位置に来たら開始
          end: "bottom -10%", // .texts の下端が画面の25%位置に来たら終了
          scrub: 1,
          // markers: true
      }
    }
   );
    gsap.fromTo(
      ".movies > .movies1 > video:nth-child(2)",
      {
        y: -130,
        x: 500,
        rotate: 95
      },
      {
        // x: 0,
        y: 0,
        x: 0,
        rotate: 20,
        delay: .3,
        scrollTrigger: {
          start: "top -20%",  // .texts の上端が画面の75%位置に来たら開始
          end: "bottom -20%", // .texts の下端が画面の25%位置に来たら終了
          scrub: 1,
          // markers: true
      }
    }
   );
    gsap.fromTo(
      ".movies > .movies2 > video:nth-child(1)",
      {
        y: -130,
        x: -500,
        rotate: -95,
        delay: .6,
      },
      {
        // x: 0,
        y: 0,
        x: 0,
        rotate: -20,
        scrollTrigger: {
          start: "top -30%",  // .texts の上端が画面の75%位置に来たら開始
          end: "bottom -30%", // .texts の下端が画面の25%位置に来たら終了
          scrub: 1,
          // markers: true
      }
    }
   );
    gsap.fromTo(
      ".movies > .movies2 > video:nth-child(2)",
      {
        y: -130,
        x: 500,
        rotate: 95,
        delay: 1,
      },
      {
        // x: 0,
        y: 0,
        x: 0,
        rotate: 20,
        scrollTrigger: {
          start: "top -40%",  // .texts の上端が画面の75%位置に来たら開始
          end: "bottom -40%", // .texts の下端が画面の25%位置に来たら終了
          scrub: 1,
          // markers: true
      }
    }
   );
    gsap.fromTo(
      ".shinsakuCon",
      {

        opacity: 1,
        // y: 0,
      },
      {
        opacity: 0,
        // y: 200,
        scrollTrigger: {
          start: "top -110%",  // .texts の上端が画面の75%位置に来たら開始
          end: "bottom -120%", // .texts の下端が画面の25%位置に来たら終了
          scrub: 3,
          duration: 300
          // markers: true
      }
    }
   );



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
          <div className="texts">
            <div className="otokotext">
              <div className="otoko">漢</div>
            </div>
            <div className="omatik">
              <img src="/omatik.png" alt="" />
            </div>
            <div className="omae">
              <div className="tikTextomae1 tikText">尾</div>
              <div className="tikTextomae2 tikText">前</div>
              <div className="tikTextomae3 tikText">颯</div>
              <div className="tikTextomae4 tikText">士</div>
            </div>
            <div className="tiktoklifeCon">
              <div className="tiktoklife1">TikTok</div>
              <div className="tiktoklife2">Life</div>
            </div>
          </div>
          <div className="moviesCon">
            <div className="movies">
              <div className="movies1">
                <video src="/tiktoker.MP4"  className="video" autoPlay playsInline muted loop></video>
                <video src="/tiktoker1.MP4" className="video" autoPlay playsInline muted loop></video>
              </div>
              <div className="movies2">
                <video src="/tiktoker2.MP4" className="video" autoPlay playsInline muted loop></video>
                <video src="/tiktoker3.MP4" className="video" autoPlay playsInline muted loop></video>
              </div>
            </div>
          </div>
        </div>
        <div className="shinsakuCon">
          <div className="shinsaku">新作を乞うご期待</div>
          <div className="Coming">Coming soon...</div>
        </div>
      </div>
    </div>
  );
}

export default TikTok;

