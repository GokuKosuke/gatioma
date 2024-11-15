"use client"

import React, { useState } from 'react'
import ChildComponent from './Body';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

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
    { label: 'Profile', href: '#', icon: <PersonIcon /> },
    { label: 'makeshif', href: '#', },
    { label: 'makeshi', href: '#',  },
    { label: 'makeshift', href: '#', icon: <HomeIcon sx={{fontSize: 26}}/> },
    { label: 'Settings', href: '#', icon: <SettingsIcon /> },
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
                        <div className="icons">
                          <IconButton sx={{color: "white"}}>
                            {link.icon}
                          </IconButton>
                          {link.label}
                        </div>
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
