import React from 'react'
import './Menu.css'


function Menu() {
    return (
        <div className="menu__clickable-mobile">

        
            <div className="menu__links">
                <a href="#">Platform</a>
                <a href="#">Widgets</a>
                <a href="#">Templates</a>
                <a href="#">Pricing</a>

            </div>

            <div className="menu__sign">
            <p>Login</p>
            <button>Start Free Trial</button>
            </div>

            </div>
    )
}

export default Menu
