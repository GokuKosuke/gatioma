"use client"

import Image from 'next/image'
import React from 'react'

function Body({ children }) {
  return (
    <div className='body'>
      {children}
    </div>
  )
}

export default Body
