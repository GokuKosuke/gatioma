import React, { useState } from "react";

function Settings({ settingsClicked, setSettingsClicked, clickedColor, setClickedColor }) {
  const [clickedIndex, setClickedIndex] = useState(false);
  const [clickedMaskClick, setClickedMaskClick] = useState(false);

  const handleIndex = (index) => {
    setClickedIndex(index);
  };

  const handleColor = () => {
    setClickedColor(!clickedColor); // 親から受け取った setClickedColor を呼び出す
  };

  const handleMaskClick = () => {
    setClickedMaskClick(!clickedMaskClick)
  }

  const links = [
    { label: "Color", href: "#", onClick: handleColor, className: `colorText ${clickedColor ? "clickedColor" : ""}` },
    { label: "Policy", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` }
  ];

  return (
    <div className={`settingsContainer ${settingsClicked ? "clickedSettings" : ""}`}>
      <div className={`settingsContent ${settingsClicked ? "clickedSettings" : ""}`}>
        <ul>
          {links.map((link, index) => (
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
          <div className={`red color ${clickedColor ? "clickedColor" : ""}`}></div>
          <div className={`blue color ${clickedColor ? "clickedColor" : ""}`}></div>
          <div className={`yellow color ${clickedColor ? "clickedColor" : ""}`}></div>
          <div className={`green color ${clickedColor ? "clickedColor" : ""}`}></div>
          <div className={`pink color ${clickedColor ? "clickedColor" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
