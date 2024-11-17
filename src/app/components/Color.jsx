import React from 'react'

function Color({ clickedColor }) {
  return (
    <div className={`colorContainer ${clickedColor ? "clickedColor" : ""}`}>
//       <div className={`colors ${clickedColor ? "clickedColor" : ""}`}>
//         <div className={`red color ${clickedColor ? "clickedColor" : ""}`}></div>
//         <div className={`blue color ${clickedColor ? "clickedColor" : ""}`}></div>
//         <div className={`yellow color ${clickedColor ? "clickedColor" : ""}`}></div>
//         <div className={`green color ${clickedColor ? "clickedColor" : ""}`}></div>
//         <div className={`pink color ${clickedColor ? "clickedColor" : ""}`}></div>
//       </div>
    </div>
  )
}

export default Color
