import React from 'react'
import './Tab.css'


function Tab({icon, text}) {
    return (
        <div className="tab__container">
        <img src={icon} />
        <p>{text}</p>
        </div>
    )
}

export default Tab
