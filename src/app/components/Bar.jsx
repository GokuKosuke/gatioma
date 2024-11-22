"use client"
import React, { useState } from "react";
import ChildComponent from "./Body";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";
import Settings from "./Settings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons'; // Ensure this import is correct
import TikTok from "./TikTok";
import ArticleIcon from '@mui/icons-material/Article';

function Bar({ children }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [profileClicked, setProfileClicked] = useState(false);
  const [settingsClicked, setSettingsClicked] = useState(false);
  const [clickedColor, setClickedColor] = useState(false);
  const [clickedTikTok, setClickedTikTok] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (event) => {
    const c1 = event.currentTarget.classList.contains("clicked");
    const c2 = event.currentTarget.classList.contains("settingsClicked");
    setClicked(!clicked);

    if (c1 && c2) {
      setSettingsClicked(false);
      setClicked(true);
    }
  };

  const handleClickProfile = () => {
    setProfileClicked(!profileClicked);
  };

  const handleClickSettings = () => {
    setSettingsClicked(!settingsClicked);
  };

  const handleClickTikTok = () => {
    setClickedTikTok(!clickedTikTok);
  }

  const links = [
    { label: "Profile", href: "#", icon: <PersonIcon />, onClick: handleClickProfile },
    { label: "TikTok活動", href: "#", icon: <FontAwesomeIcon icon={faTiktok} />, onClick: handleClickTikTok }, // Make sure this is correct
    { label: "Main Channel", href: "https://www.youtube.com/@HikakinTV", icon: <ArticleIcon /> },
    { label: "Second Channel", href: "https://www.youtube.com/@HIKAKIN", icon: <ArticleIcon /> },
    { label: "Settings", href: "#", icon: <SettingsIcon />, onClick: handleClickSettings },
  ];

/*settings*/
  const [clickedIndex, setClickedIndex] = useState(false);
  const [clickedMaskClick, setClickedMaskClick] = useState(false);
  const [clickedC1, setC1] = useState(false);
  const [clickedC2, setC2] = useState(false);
  const [clickedC3, setC3] = useState(false);
  const [clickedC4, setC4] = useState(false);

  const handleIndex = (index) => {
    setClickedIndex(index);
  };

  const handleColor = () => {
    setClickedColor(!clickedColor); // 親から受け取った setClickedColor を呼び出す
  };

  const handleMaskClick = () => {
    setClickedMaskClick(!clickedMaskClick)
  }

  const handleC1 = () => {
    setC1(!clickedC1)
    setC2(false)
    setC3(false)
    setC4(false)
  }
  const handleC2 = () => {
    setC2(!clickedC2)
    setC1(false)
    setC3(false)
    setC4(false)
  }
  const handleC3 = () => {
    setC3(!clickedC3)
    setC2(false)
    setC1(false)
    setC4(false)
  }
  const handleC4 = () => {
    setC4(!clickedC4)
    setC2(false)
    setC3(false)
    setC1(false)
  }
  const links2 = [
    { label: "Color", href: "#", onClick: handleColor, className: `colorText ${clickedColor ? "clickedColor" : ""}` },
    { label: "Policy", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    // { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    // { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    // { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` }
  ];
  /*settings*/


  return (
    <>
      <ChildComponent>
        <div className={`btn ${clicked ? "clicked" : ""} ${settingsClicked ? "settingsClicked" : ""} ${clickedColor ? "clickedColor" : ""} ${
    clickedC1
      ? "clickedC1"
      : clickedC2
      ? "clickedC2"
      : clickedC3
      ? "clickedC3"
      : clickedC4
      ? "clickedC4"
      : ""
  }`} onClick={handleClick}>
          <div className="btnbar1 bb"></div>
          <div className="btnbar2 bb"></div>
          <div className="btnbar3 bb"></div>
        </div>
        <div className={`barContainer ${clicked && !settingsClicked ? "clicked" : ""}`}>
          <div className="bar">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={link.onClick}
                  >
                    <div className="icons">
                      <IconButton sx={{ color: "white" }}>{link.icon}</IconButton>
                      {link.label}
                    </div>
                  </a>
                  <div className={`underbar ${hoveredIndex === index ? "hovered" : ""}`}></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`mask ${clicked ? "" : "clicked"}`} onClick={handleClick}></div>
        <div className={`OmaeProfile ${profileClicked ? "profileClicked" : ""}`}>
          <div className="backBtn" onClick={handleClickProfile}>
            <ArrowBackIcon className="backArrow" />
          </div>
          <Profile />
        </div>



        {/* <Settings
          settingsClicked={settingsClicked} 
          setSettingsClicked={setSettingsClicked} 
          clickedColor={clickedColor} 
          setClickedColor={setClickedColor} 
        /> */}
           <div className={`settingsContainer ${settingsClicked ? "clickedSettings" : ""} `}>
      <div className={`settingsContent ${settingsClicked ? "clickedSettings" : ""}`}>
        <ul>
          {links2.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={(e) => {
                  handleIndex(index);
                  if (link.onClick) link.onClick(e); // handleColorが存在すれば実行
                }}
                className={link.className}
              >
                {link.label}
                <div className={`underbarSettings ${index === clickedIndex ? "barClicked" : ""}`}></div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`colorContainer ${clickedColor ? "clickedColor" : ""} ${clickedMaskClick ? "clickedColor2" : ""}`} onClick={handleMaskClick}>
        <div className={`colors ${clickedColor ? "clickedColor" : ""}`}>
          <div className={`red color ${clickedColor ? "clickedColor" : ""} ${clickedC1 ? "clickedC1" : ""}`} onClick={handleC1}></div>
          <div className={`blue color ${clickedColor ? "clickedColor" : ""} ${clickedC2 ? "clickedC2" : ""}`} onClick={handleC2}></div>
          <div className={`yellow color ${clickedColor ? "clickedColor" : ""} ${clickedC3 ? "clickedC3" : ""}`} onClick={handleC3}></div>
          <div className={`green color ${clickedColor ? "clickedColor" : ""} ${clickedC4 ? "clickedC4" : ""}`} onClick={handleC4}></div>
          {/* <div className={`pink color ${clickedColor ? "clickedColor" : ""}`}></div> */}
        </div>
      </div>
    </div>



        <TikTok clickedTikTok={clickedTikTok} setClickedTikTok={setClickedTikTok}/>
      </ChildComponent>
    </>
  );
}

export default Bar;
