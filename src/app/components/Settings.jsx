import React, { useState } from "react";

function Settings({ settingsClicked, setSettingsClicked, clickedColor, setClickedColor }) {
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
  }
  const handleC2 = () => {
    setC1(!clickedC2)
  }
  const handleC3 = () => {
    setC1(!clickedC3)
  }
  const handleC4 = () => {
    setC1(!clickedC4)
  }
  const links = [
    { label: "Color", href: "#", onClick: handleColor, className: `colorText ${clickedColor ? "clickedColor" : ""}` },
    { label: "Policy", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    // { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    // { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` },
    // { label: "Color", href: "#", className: `colorText2 ${clickedColor ? "clickedColor" : ""}` }
  ];

  // return (
    // <div className={`settingsContainer ${settingsClicked ? "clickedSettings" : ""} ${clickedC1 ? "clickedC1" : ""}`}>
    //   <div className={`settingsContent ${settingsClicked ? "clickedSettings" : ""}`}>
    //     <ul>
    //       {links.map((link, index) => (
    //         <li key={index}>
    //           <a
    //             href={link.href}
    //             onClick={(e) => {
    //               handleIndex(index);
    //               if (link.onClick) link.onClick(e); // handleColorが存在すれば実行
    //             }}
    //             className={link.className}
    //           >
    //             {link.label}
    //             <div className={`underbarSettings ${index === clickedIndex ? "barClicked" : ""}`}></div>
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className={`colorContainer ${clickedColor ? "clickedColor" : ""} ${clickedMaskClick ? "clickedColor2" : ""}`} onClick={handleMaskClick}>
    //     <div className={`colors ${clickedColor ? "clickedColor" : ""}`}>
    //       <div className={`red color ${clickedColor ? "clickedColor" : ""}`} onClick={handleC1}></div>
    //       <div className={`blue color ${clickedColor ? "clickedColor" : ""}`} onClick={handleC2}></div>
    //       <div className={`yellow color ${clickedColor ? "clickedColor" : ""}`} onClick={handleC3}></div>
    //       <div className={`green color ${clickedColor ? "clickedColor" : ""}`} onClick={handleC4}></div>
    //       {/* <div className={`pink color ${clickedColor ? "clickedColor" : ""}`}></div> */}
    //     </div>
    //   </div>
    // </div>
  // );
}

export default Settings;
