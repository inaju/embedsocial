import React from 'react'
import './Menu.css'


function Menu() {
    return (
        <div className="navbar__clickable">

        
            <div className="navbar__links">
                <a href="#">Platform</a>
                <a href="#">Widgets</a>
                <a href="#">Templates</a>
                <a href="#">Pricing</a>

            </div>

            <div className="navbar__sign">
            <p>Login</p>
            <button>Start Free Trial</button>
            </div>

            </div>
    )
}

export default Menu
