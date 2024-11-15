"use client"

import React, { useState } from 'react'
import ChildComponent from './Body';

function Bar({ children }) {
  // リンクごとのホバー状態を管理する配列をuseStateで初期化
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // マウスが入ったリンクのインデックスを保存
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // マウスが離れたらホバー状態をリセット
  };

  const handleClick = () => {
    setClicked(!clicked);
  }

  const links = [
    { label: 'Profile', href: '#' },
    { label: 'makeshif', href: '#' },
    { label: 'makeshi', href: '#' },
    { label: 'makeshift', href: '#' },
    { label: 'Settings', href: '#' },
  ];

  return (
    <>
        <ChildComponent>
            <div className={`btn  ${clicked ? "clicked": ""} `} onClick={handleClick}>
                <div className="btnbar1 bb"></div>
                <div className="btnbar2 bb"></div>
                <div className="btnbar3 bb"></div>
            </div>
            <div className={`barContainer ${clicked ? "clicked" : ""}`}>
            <div className="bar">
                <ul>
                {links.map((link, index) => (
                    <li key={index}>
                    <a
                        href={link.href}
                        onMouseEnter={() => handleMouseEnter(index)}  // ホバー開始時にインデックスを渡す
                        onMouseLeave={handleMouseLeave}                // ホバー終了時にリセット
                        >
                        {link.label}
                    </a>
                    {/* ホバーしているリンクにのみhoveredクラスを付与 */}
                    <div className={`underbar ${hoveredIndex === index ? "hovered" : ""}`}></div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            <div className={`mask ${clicked ? "" : "clicked"} `} onClick={handleClick}></div>
            </ChildComponent>
    </>
  )
}

export default Bar;
