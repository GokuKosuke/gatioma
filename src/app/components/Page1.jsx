"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ChatIcon from '@mui/icons-material/Chat';

function Page1() {

  const [clicked, setClicked] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const handleClick = () => {
      setClicked(!clicked)
      setTimeout(() => {
        setClicked(false)
      }, 7200)
  }
  return (
    <div>
        <div className={`topbar ${clicked ? "PavedTopbar" : ""}`}>
            <Image src="/fig.png" width={70} height={70} alt="fig" className={`fig ${clicked ? "figClicked": ""}`} onClick={handleClick}></Image>
            <Image src="/blue.PNG" width={250} height={250} alt="fig" className={`fig blue ${clicked ? "fig2Clicked": ""}`}></Image>
            <Image src="/white.png" width={200} height={200} alt="fig" className={`fig white ${clicked ? "fig2Clicked": ""}`}></Image>
            <Image src="/black.PNG" width={200} height={200} alt="fig" className={`fig black ${clicked ? "fig2Clicked": ""}`}></Image>
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
          <a href="https://main.d32g3bpdwdinnr.amplifyapp.com/#"><ChatIcon sx={{fontSize:60, color: "white"}} /></a>
        </div>
        <div className="toTop">
          <div className="arrow" onClick={scrollToTop}>↑</div>
        </div>
    </div>
  )
}

export default Page1
