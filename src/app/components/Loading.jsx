"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Loading() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div className={`loading ${isVisible ? '' : 'fade-out'}`}>
        <img className='loadingomae' src="/loadingomae.PNG" width={400} height={400} alt='loadingomae'></img>
        <div className="texts">
            <div className="loadingtext">Loading</div>
            <div className="tenten1 tenten">.</div>
            <div className="tenten2 tenten">.</div>
            <div className="tenten3 tenten">.</div>
        </div>
    </div>
  )
}

export default Loading
