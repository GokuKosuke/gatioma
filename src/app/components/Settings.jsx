import React, { useState } from 'react'
import Color from './Color';

function Settings({ settingsClicked, setSettingsClicked}) {
    const [clickedIndex, setClickedIndex] = useState(false);
    const [clickedColor, setClickedColor] = useState(false);

    const handleIndex = (index) => {
        setClickedIndex(index)
    }

    const handleColor = () => {
        setClickedColor(!clickedColor)
    }
    const links = [
        {label: "Color",href: "#", onClick: handleColor},
        {label: "Policy",href: "#"},
        {label: "color",href: "#"},
        {label: "color",href: "#"},
        {label: "color",href: "#"}
    ]
  return (
      <div className={`settingsContainer ${settingsClicked ? "clickedSettings" : ""}`}>
        <div className={`settingsContent ${settingsClicked ? "clickedSettings" : ""} `}>
            <ul>
                {links.map((link, index) => (
                <li key={index} >
                    <a href={link.href} onClick={() => {handleIndex(index)}}>
                        {link.label}
                        <div className={`underbarSettings ${index === clickedIndex ? "barClicked" : ""}`}></div>
                    </a>
                </li>
                ))}
            </ul>
        </div>
        <Color className={`${clickedColor ? "clickedColor" : ""}`}/>
      </div>
  )
}

export default Settings
