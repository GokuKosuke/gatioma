import React from 'react'

function Settings({ settingsClicked, setSettingsClicked}) {

    const handleArrowBack = () => {
        setSettingsClicked(!settingsClicked)
    }

    const links = [
        {label: "Color"},
        {label: "Policy"},
        {label: "color"},
        {label: "color"},
        {label: "color"}
    ]
  return (
      <div className={`settingsContainer ${settingsClicked ? "clickedSettings" : ""}`}>
        <div className={`settingsContent ${settingsClicked ? "clickedSettings" : ""} `}>
            <ul>
                {links.map((link, index) => (
                <li key={index}>
                    <a href="">
                        {link.label}
                    </a>
                </li>
                ))}
            </ul>
        </div>
      </div>

  )
}

export default Settings
