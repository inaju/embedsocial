import React from 'react'
import './SocialTab.css'

function SocialTab({text, icon, title}) {
    return (
        <div className="socialtab__container">
            <img src={icon} alt=""  />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default SocialTab
