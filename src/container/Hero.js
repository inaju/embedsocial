import React from 'react'
import './Hero.css'
import popupFree from '../assets/popupFree.png'
import Rectangle_28 from '../assets/Rectangle_28.png'
import Group_865 from '../assets/Group_865.png'
import Group_1498 from '../assets/Group_1498.png'
import Frame_949 from '../assets/Frame_949.png'


import {AiOutlineArrowRight} from 'react-icons/ai'


function Hero() {
    return (
        <div className="hero__container padding-left padding-right">
            <div className="hero__container-info">


                <div className="hero__container-text">

                    <h1>
                    Display Instagram Stories on any website, <span className="yellow">in seconds. </span>
                    
                    </h1>

                    <p>
                    Display Instagram Stories Widget on your website, that auto-syncs, and updates each time you add a photo in your active story. 
                    </p>
                </div>


                <div className="hero__container-input">
                    <input type="text" placeholder="Enter your Email...."/>
                    <button className="hero__container-input__button">
                        
                        Start Free Trial
                        <AiOutlineArrowRight className="bbold" />
                        </button>
                </div>


                <div className="hero__container-subtext">
                    <p>Free 7-day trial </p>
                    <p>.</p>
                    <p>Easy setup</p>
                    <p>.</p>
                    <p>Cancel any time</p>
                </div>

            </div>

        
        <div className="hero__container-image">

            <div className="social__image">
            <img className="popup" src={popupFree} alt="" srcset="" />

            {/* <img className="story__progress" src={Group_865} alt="" srcset="" /> */}

            <img className="woman_sweater" src={Rectangle_28} alt="" srcset="" />

            </div>

            <div className="food__images">
            <img className="food__image__1" src={Group_1498} alt="" srcset="" />
            <img className="food__image__1" src={Frame_949} alt="" srcset="" />

            </div>


        </div>
        
        </div>
    )
}

export default Hero
