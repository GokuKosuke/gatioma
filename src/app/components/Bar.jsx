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
    { label: "Section2", href: "#" },
    { label: "Section3", href: "#", icon: <HomeIcon sx={{ fontSize: 26 }} /> },
    { label: "Settings", href: "#", icon: <SettingsIcon />, onClick: handleClickSettings },
  ];

  return (
    <>
      <ChildComponent>
        <div className={`btn ${clicked ? "clicked" : ""} ${settingsClicked ? "settingsClicked" : ""} ${clickedColor ? "clickedColor" : ""}`} onClick={handleClick}>
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
        <Settings
          settingsClicked={settingsClicked} 
          setSettingsClicked={setSettingsClicked} 
          clickedColor={clickedColor} 
          setClickedColor={setClickedColor} 
        />
        <TikTok clickedTikTok={clickedTikTok} setClickedTikTok={setClickedTikTok}/>
      </ChildComponent>
    </>
  );
}

export default Bar;
