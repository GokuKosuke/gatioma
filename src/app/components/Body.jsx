"use client"

import Image from 'next/image'
import React from 'react'

function Body({ children }) {
  return (
    <>
    <title>おまえガチ</title>
    <link rel="icon" href="/omae0.PNG" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=M+PLUS+Rounded+1c&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nanum+Myeongjo&family=Sawarabi+Mincho&display=swap" rel="stylesheet"></link>
    <div className='body'>
      {children}
    </div>
    </>
  )
}

export default Body
