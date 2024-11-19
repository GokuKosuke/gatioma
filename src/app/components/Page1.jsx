"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';

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

  return (
    <div>
      <div className={`topbar ${clicked ? "PavedTopbar" : ""}`}>
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
    </div>
  );
}

export default Page1;
