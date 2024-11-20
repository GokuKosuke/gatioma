"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import Page1Content from './Page1Content';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


function Page1() {
  const [clicked, setClicked] = useState(false);
  const [randomImage, setRandomImage] = useState(null);
  const [menuActive, setMenuActive] = useState(false); // メニューの状態を管理

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
      x: 62,
      y: 0,
      rotate: 60,
      scrollTrigger: {
        trigger: ".heartsOmae",
        start: "top 60%",
        end: "top 55%",
        scrub: 2,
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
      x: -62,
      y: 0,
      rotate: -60,
      scrollTrigger: {
        trigger: ".heartsOmae",
        start: "top 60%",
        end: "top 55%",
        scrub: 2,
        // markers: true,
      }
    })
    gsap.fromTo(".pinkBack", {
      opacity: 0
    },
    {
      opacity: 1,
      height: 100,
      scrollTrigger: {
        trigger: ".heartsOmae",
        start: "top 60%",
        end: "top 85%",
        scrub: 1,
        markers: true,
        onEnter: () => setChangePink(true),
        onLeaveBack: () => {setTimeout(() => setChangePink(false), 300)}
      }
    })
  })

  return (
    <div>
      <div className={`topbar ${clicked ? "PavedTopbar" : ""} ${changePink ? "changedPink" : ""}`}>
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
            <span className={`text text1 ${clicked ? "hidden" : "visible"}`}>OMAEGATI</span>
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
            {[...Array(5)].map((_, index) => (
              <li key={index} style={{ '--i': index }}>
                <a href="#">
                  <ChatIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="page1Content"> 
      <div className="heartsOmae">
        <img src="/peaceomae.PNG" alt="" />
        <img src="/loveomae.PNG" alt="" />
        {/* <img src="" alt="" /> */}
      </div>
        <div className="pinkBack">
          <div className="pink"></div>
        </div>
    </div>
    </div>
  );
}

export default Page1;
