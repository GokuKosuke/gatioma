"use client"

import Image from 'next/image'
import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';

function Page1() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
        <div className="topbar">
            <Image src="/fig.png" width={70} height={70} alt="fig" className='fig'></Image>
        </div>
        <div className="title">
          <div className="GATIOMAE">OMAEGATI</div>
        </div>
        <div className="videoWrapper">
            <video src="/sti.MP4" className='sti' autoPlay playsinline muted loop></video>
                <div className="videomask"></div>
        </div>
        <div className="chat">
          <ChatIcon sx={{fontSize:60, color: "white"}} />
        </div>
        <div className="toTop">
          <div className="arrow" onClick={scrollToTop}>↑</div>
        </div>
    </div>
  )
}

export default Page1
