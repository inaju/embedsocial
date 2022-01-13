import React from 'react'
import './ConversionsTab.css'


function ConversionsTab({title, icon, text, subtext}) {
    return (
        <div className="conversionstab__container">
            <h3>{title}</h3>
            <span className="conversionstab__container-image">
            <img src={icon} />
            <p>{subtext}</p>
            
            </span>
            <p>{text}</p>
        </div>
    )
}

export default ConversionsTab
