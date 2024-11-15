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
  }
  return (
    <div>
        <div className="topbar">
            <Image src="/fig.png" width={70} height={70} alt="fig" className={`fig ${clicked ? "figClicked": ""}`} onClick={handleClick}></Image>
          <div className="title">
            <div className="GATIOMAE">OMAEGATI</div>
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
