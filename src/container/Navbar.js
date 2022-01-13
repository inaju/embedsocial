import React, {useState} from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Menu from '../components/Menu';
import Group_335 from '../assets/Group_335.png'


function Navbar() {
    const [toggleMenu, setToggleMenu]=useState()

    return (
        <div className="navbar__container padding-left padding-right">
            <div className="navbar__logo">
                <img src={Group_335} alt="" srcset="" />
            <h1>
            embedsocial
            </h1>
            </div>

            <div className="navbar__clickable"> 
             <div className="navbar__links">
                <a href="#">Platform</a>
                <a href="#">Widgets</a>
                <a href="#">Templates</a>
                <a href="#">Pricing</a>

            </div>

            </div>
            <div className="navbar__sign">
            <p>Login</p>
            <button>Start Free Trial</button>
            </div>
            <div className="navbar__mobile">
            {
                toggleMenu ? 
                <RiCloseLine onClick={()=> setToggleMenu(false)} />
                : <RiMenu3Line onClick={()=> setToggleMenu(true)} />
            }

            { toggleMenu && (
                <Menu />
            )}

            {/* <Menu /> */}

            </div>
            </div>  
    )
}

export default Navbar
