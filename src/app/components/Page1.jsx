"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import Page1Content from './Hapiba';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Hapiba from './Hapiba';
import Lottie from 'lottie-web';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
import { duration } from '@mui/material';


function Page1() {
  const [clicked, setClicked] = useState(false);
  const [randomImage, setRandomImage] = useState(null);
  const [menuActive, setMenuActive] = useState(false); // メニューの状態を管理
  const [omaeFlied, setOmaeFlied] = useState(false); // メニューの状態を管理
  const [kabaoTooth, setkabaotooth] = useState(false); // メニューの状態を管理


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setClicked(!clicked);
    setTimeout(() => {
      setClicked(false);
    }, 7200);
  };

  const getRandomImage = () => {
    const images = [
      { src: "/blue.png", width: 250, height: 250, alt: "blue", className: "car blue" },
      { src: "/white.PNG", width: 200, height: 200, alt: "white", className: "car white" },
      { src: "/black.PNG", width: 200, height: 200, alt: "black", className: "car black" }
    ];
    const randomIndex = Math.floor(Math.random() * images.length); // 0〜2のランダムな整数を生成
    return images[randomIndex];
  };

  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []);

  // メニューのトグル関数
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };


  const [changePink, setChangePink] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".heartsOmae > img:nth-child(1)", {
      opacity: 0,
      x: -400,
      y: 600,
      rotate: 360
    },
    {
      opacity: 1,
      x: 52,
      y: 0,
      rotate: 60,
      scrollTrigger: {
        trigger: ".heartsOmae",
        start: "top 40%",
        end: "top 35%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".heartsOmae > img:nth-child(2)", {
      opacity: 0,
      x: 600,
      y: 600,
      rotate: -360
    },
    {
      opacity: 1,
      x: -52,
      y: 0,
      rotate: -60,
      scrollTrigger: {
        trigger: ".heartsOmae",
        start: "top 40%",
        end: "top 35%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".pinkBack", {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".heartsOmae",
        start: "top 40%",
        end: "top 35%",
        scrub: 2,
        // markers: true,
        onEnter: () => {setChangePink(true),setkabaotooth(false)},
        onLeaveBack: () => {setTimeout(() => setChangePink(false), 300)}
      }
    })
    gsap.fromTo(".flyingOMAE > img", {
      // opacity: 0
    },
    {
      // opacity: 1,
      scrollTrigger: {
        trigger: ".flyingOMAE > img",
        start: "top 10.7%",
        end: "top 10.6%",
        scrub: true,
        duration: 100,
        delay: 4000,
        // markers: true,
        onEnter: () => setOmaeFlied(true),
        onLeaveBack: () => {setTimeout(() => setOmaeFlied(false), 300)}
      }
    })
    gsap.fromTo(".SImages1", {
      x: 0,
    },
    {
      x: -400,
      scrollTrigger: {
        trigger: ".SImages1",
        start: "top 100%",
        end: "top -10%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".SImages2", {
      x: 0,
    },
    {
      x: -400,
      scrollTrigger: {
        trigger: ".SImages2",
        start: "top 100%",
        end: "top -10%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".SImages3", {
      x: 0,
    },
    {
      x: 400,
      scrollTrigger: {
        trigger: ".SImages3",
        start: "top 100%",
        end: "top -10%",
        scrub: 1,
        // markers: true,
      }
    })
    
    gsap.fromTo(".scrollTexts1", {
      x: -800,
    },
    {
      x: -300,
      scrollTrigger: {
        trigger: ".scrollTexts1",
        start: "top 100%",
        end: "top -10%",
        scrub: 1,
        // markers: true,
      }
    })
    
    gsap.fromTo(".scrollTexts2", {
      x: -800,
    },
    {
      x: -300,
      scrollTrigger: {
        trigger: ".SImages3",
        start: "top 10%",
        end: "top -110%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".bulliedKABAO", {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 80%",
        end: "top 100%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".environments img:nth-child(1)", {
      x: -200
    },
    {
      x:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
        // markers: true,
      }
    })


    gsap.fromTo(".environments img:nth-child(2)", {
      x: 200
    },
    {
      x:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 55%",
        end: "top 65%",
        scrub: 1,
        // markers: true,
      }
    })

    gsap.fromTo(".environments img:nth-child(3)", {
      x: -200
    },
    {
      x:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 55%",
        end: "top 65%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".environments img:nth-child(4)", {
      x: 200
    },
    {
      x:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 47%",
        end: "top 70%",
        scrub: 1,
        duration: 2000,
        delay: 300,
        // markers: true,
      }
    })
    gsap.fromTo(".environments img:nth-child(5)", {
      x: -400
    },
    {
      x:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 47%",
        end: "top 70%",
        scrub: 1,
        duration: 2000,
        delay: 300,
        // markers: true,
      }
    })

    gsap.fromTo(".environments img:nth-child(6)", {
      x: 200
    },
    {
      x:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
        // markers: true,
      }
    })

    gsap.fromTo(".environments img:nth-child(7)", {
      y: 400
    },
    {
      y:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".environments img:nth-child(8)", {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".environments img:nth-child(9)", {
      x: -400
    },
    {
      x:700,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 40%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      }
    })

    gsap.fromTo(".environments img:nth-child(10)", {
      x: 500
    },
    {
      x:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".kaba", {
      y: 200
    },
    {
      y:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".bullyingCars", {
      y: 200
    },
    {
      y:0,
      scrollTrigger: {
        trigger: ".bulliedKABAO",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".finalkaba > img:nth-child(1)", {
      x: 0,
      y: 0,
      // scaleX: -1,
      // width: 100,
    },
    {
      x:600,
      y:-1800,
      // scaleX: -1,
      // width: 1000,
      scrollTrigger: {
        trigger: ".finalkaba",
        start: "top 10%",
        end: "top 100%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".finalkaba > img:nth-child(2)", {
      x: 0,
      y: 0,
      opacity: 0

    },
    {
      x:600,
      y:-1210,
      opacity: 1,
      scrollTrigger: {
        trigger: ".finalkaba",
        start: "top 0%",
        end: "top 100%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".whiteBack", {
      x: 0,
      y: 200,

    },
    {
      x:0,
      y:0,
      scrollTrigger: {
        trigger: ".finalkaba",
        start: "top 20%",
        end: "top 10%",
        scrub: 2,
        // markers: true,
      }
    })
    gsap.fromTo(".whiteBack", {
      y: 0,
    },
    {
      y: 300,
      scrollTrigger: {
        trigger: ".whiteCon",
        start: "top 10%",
        end: "top -30%",
        scrub: true,
        onEnter: () => {setTimeout(() => setkabaotooth(true),setChangePink(false), 700)},
        onLeaveBack:  () => {setTimeout(() => setkabaotooth(false),200)},
        // markers: true,
      }
    })
    gsap.fromTo(".kamahito", {
      opacity: 0
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".whiteCon",
        start: "top -20%",
        end: "top -50%",
        scrub: 1,
        // markers: true,
      }
    })
    gsap.fromTo(".withkabaCon > img:nth-child(2)", {
      x: 0,
      opacity: 0
    },
    {
      x: -1300,
      opacity: 1,
      scrollTrigger: {
        trigger: ".withkabaCon",
        start: "top 0%",
        end: "top 30%",
        scrub: 1,
        // markers: true,
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".omaeFlied.flyingOMAE", // スクロールのトリガーとなる要素
        start: "top 0.7%",
        end: "top -50%",
        scrub: 2, // スクロールに合わせてアニメーションをスムーズに動かす
        // markers: true, // デバッグ用のマーカーを表示
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".withkabaCon", // スクロールのトリガーとなる要素
        start: "top 15%",
        end: "top 0%",
        scrub: 1, // スクロールに合わせてアニメーションをスムーズに動かす
        // markers: true, // デバッグ用のマーカーを表示
      },
    });


    tl
    .to(".omaeFlied.flyingOMAE > img:nth-child(1)", {duration: 4, y: 0, rotate: 0})
    .to(".omaeFlied.flyingOMAE > img:nth-child(1)", {duration: 10, y: -500, rotate: 0})
    .to(".omaeFlied.flyingOMAE > img:nth-child(1)", {duration: 14, x: 500, rotate: -140})
    .to(".omaeFlied.flyingOMAE > img:nth-child(1)", {duration: 300, y:900, x: -1000,delay:2})
    .to(".omaeFlied.flyingOMAE > img:nth-child(1)", {duration: 400, y:1500, x: 1000,rotate:-50,delay:6})
    .to(".omaeFlied.flyingOMAE > img:nth-child(1)", {duration: 500, y:-300, x: -1000,delay:5})

    // tl2
    // .to(".withkabaCon > img:nth-child(1)", {duration: 500, y:-300, x: 400,rotate: -90 })
    // .to(".withkabaCon > img:nth-child(1)", {duration: 700, y: 500, x: -1200, rotate: 360})
    // .to(".withkabaCon > img:nth-child(1)", {duration: 900,y: 500, x: -1600, rotate: 360})

  // Lottieアニメーションの初期化
  // const animation = Lottie.loadAnimation({
  //   container: document.getElementById("lottie-container"), // Lottieの描画先
  //   renderer: "svg", // レンダリング形式
  //   loop: false, // ループしない
  //   autoplay: false, // 自動再生しない（スクロールで制御）
  //   path: "/omae.json", // JSONアニメーションのパス
  // });

  // // アニメーションデータがロードされるのを待つ
  // animation.addEventListener("DOMLoaded", () => {
  //   const totalFrames = animation.totalFrames; // 総フレーム数

  //   // GSAPでLottieアニメーションを制御
  //   gsap.to(animation, {
  //     frame: totalFrames - 1, // 最終フレームまで
  //     scrollTrigger: {
  //       trigger: "#scroll-section", // スクロールトリガー要素
  //       start: "top top", // 開始位置
  //       end: "bottom bottom", // 終了位置
  //       scrub: 1, // スクロールと同期
  //       markers: true, // デバッグ用マーカー（必要ならコメントアウト）
  //     },
  //     onUpdate: () => {
  //       animation.goToAndStop(Math.round(animation.frame), true); // フレームを更新
  //     },
  //   });
  // })

  //   // クリーンアップ
  //   return () => {
  //     animation.destroy(); // コンポーネントがアンマウントされたらアニメーションを破棄
  //   };
     // Dynamically load the scrolly-video script
    //  const script = document.createElement("script");
    //  script.src = "";
    //  script.async = true;
    //  script.onload = () => {
    //    // Initialize ScrollyVideo once the script is loaded
    //    new window.ScrollyVideo({
    //      scrollyVideoContainer: "oiwa", // ID of the container
    //      src: "/omaecanfly.mov",           // Video source
    //     // Transition speed
    //      trackScroll: true              // Enable scroll tracking
    //    });
    //  };
    //  document.body.appendChild(script);
 
  })

  return (
    <div>
      <div className={`topbar ${clicked ? "PavedTopbar" : ""} ${changePink ? "changedPink" : ""} ${kabaoTooth ? "kabaoTooth" : ""}`}>
        <Image
          src="/fig.png"
          width={70}
          height={70}
          alt="fig"
          className={`fig ${clicked ? "figClicked" : ""}`}
          onClick={handleClick}
        />
        {randomImage && (
          <img
            src={randomImage.src}
            width={randomImage.width}
            height={randomImage.height}
            alt={randomImage.alt}
            className={`${randomImage.className} ${clicked ? "fig2Clicked" : ""}`}
          />
        )}
        <div className="title">
          <div className="GATIOMAE">
            <span className={`text text1 ${clicked ? "hidden" : "visible"}  ${changePink ? "changedPink" : ""}`}>OMAEGATI</span>
            <span className={`text text2 ${clicked ? "visible" : "hidden"}`}>--------</span>
          </div>
        </div>
      </div>
      <div className="videoWrapper">
        <video src="/sti.MP4" className='sti' autoPlay playsInline muted loop></video>
        <div className="videomask"></div>
      </div>
      <div className="chat">
      </div>
      <div className="toTop">
        <div className="arrow" onClick={scrollToTop}>↑</div>
      </div>

        <div className='btns'>
          <ul className={`menu ${menuActive ? 'active' : ''}`}>
            <div className="toggle" onClick={toggleMenu}>＋</div>
            {[...Array(5)].map((oiwa, index) => (
              <li key={index} style={{ '--i': index }} >
                <a href="https://www.youtube.com/@bunzin">
                  <ChatIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      <div className="page1Content">
        <div className="heatsOmaeCon">
            <div className="heartsOmae">
              <img src="/peaceomae.PNG" alt="" />
              <img src="/loveomae.PNG" alt="" />
              {/* <img src="" alt="" /> */}
            <div className='omaeKabao'>
              <div className="withkabaCon">
                {/* <img src="/kabao/withKaba.PNG" alt="" /> */}
                <img  alt="" />
                <img src="/kabao/withKaba.PNG" alt="" />
              </div>
            </div>
            </div>
        </div>
        <div className="pinkBack">
          <div className="pink"></div>
        </div>
        <Hapiba />
      </div>
        {/* <div className="flyingCon">
          <video src="/omaecanfly.mov" autoPlay loop playsInline muted></video>
        </div> */}
        <div className="scrollImages">
          <div className="donthiddenText">
            <div className="scrollTexts1">
              <p>OMAEOMAEOMAEOMAEOMAEOMAE</p>
            </div>
          </div>
          <div className="SImages1">
            <img src="/images2/1.JPG" alt="" />
            <img src="/images2/2.JPG" alt="" />
            <img src="/images2/3.JPG" alt="" />
            <img src="/images2/4.JPG" alt="" />
            <img src="/images2/5.JPG" alt="" />
          </div>
          <div className="SImages3">
            <img src="/images3/5.jpg" alt="" />
            <img src="/images3/4.PNG" alt="" />
            <img src="/images3/3.PNG" alt="" />
            <img src="/images3/2.PNG" alt="" />
            <img src="/images3/1.PNG" alt="" />
          </div>
          <div className="SImages2">
            <img src="/images1/2.jpg" alt="" />
            <img src="/images1/3.jpg" alt="" />
            <img src="/images1/4.jpg" alt="" />
            <img src="/images1/5.jpg" alt="" />
            <img src="/images1/6.jpg" alt="" />
          </div>
            <div className="scrollTexts2">
              <p>OMAEOMAEOMAEOMAEOMAEOMAE</p>
            </div>
        </div>
        <div className="ScrollBigCon">
          <div  className={`ScrollyCon ${omaeFlied ? "omaeFlied" : ""}`}>
            <ScrollyVideo src="/omaecanfly4.mp4" muted autoPlay playsInline loop />
          </div>
          <div className="flyCon">
              <div className="flyImageCon">
                <div className={`flyingOMAE ${omaeFlied ? "omaeFlied" : ""}`} >
                    <img src="/flyingOMAE.PNG" alt="" />
                    <img src="/clipedOmae.PNG" alt="" />
                </div>
              </div>
          </div>
          {/* <div className="clipedCon">
            <div className={`cliped ${omaeFlied ? "omaeFlied" : ""}`}>
              <img src="/clipedOmae.PNG" alt="" />
            </div>
          </div> */}
        </div>
        <div className="bulliedKABAO">
          <div className='bullyingCars'>
            <img src="/black.PNG" alt="" />
            <img src="/white.PNG" alt="" />
          </div>
          <div className="kaba">
            <img src="/kabao/kaba.PNG" alt="" />
            <img src="/kabao/tearLeft.PNG" alt="" />
            <img src="/kabao/tearRight.PNG" alt="" />
          </div>
          <div className="environments" id="sese2">
            <img src="/kabao/tree.PNG" alt="" />
            <img src="/kabao/bush.PNG" alt="" />
            <img src="/kabao/bush2.PNG" alt="" />
            <img src="/kabao/cloud.PNG" alt="" />
            <img src="/kabao/cloud.PNG" alt="" />
            <img src="/kabao/tree.PNG" alt="" />
            <img src="/kabao/grou.PNG" alt="" />
            <img src="/kabao/kabi.PNG" alt="" />
            <img src="/flyingOMAE.PNG" alt="" />
            <img src="/kabao/mountain.PNG" alt="" />
          </div>
        </div>
        <div className="finalSection">
          <div className="finalkaba">
            <img src="/kabao/hanasi.PNG" alt="" />
            <img src="/kabao/arigato.PNG" alt="" />
          <div className="whiteCon">
            <div className={`whiteBack ${kabaoTooth ? "kabaotooth" : ""}`}>
            </div>
          </div>
          </div>
              <div className="kamahito">
                <p>
                  困っている人がいたら助ける。　　　尾前　颯士
                </p>
              </div>
        </div>

        <div>ハピバ</div>
    </div>
  );
}

export default Page1;
