import React from 'react'

function Page1() {
  return (
    <div>
        <div className="topbar"></div>
        <div className="videoWrapper">
            <video src="/sti.MP4" className='sti' autoPlay muted loop></video>
                <div className="videomask"></div>
        </div>
    </div>
  )
}

export default Page1
