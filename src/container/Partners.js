import React from 'react'
import './Partners.css'
import cnn from '../assets/cnn.svg'
import natgeo from '../assets/netgeo.svg'
import Group_florence from '../assets/Group_florence.png'
import ancestry_logo from '../assets/ancestry_logo.png'
import industrious from '../assets/industrious.png'
import nike from '../assets/nike.png'


function Partners() {
    return (
        <section className="partners__container">
            <div className="partners__container-text">
                <p>JOIN 50,000+ WEBSITES THAT USE EMBEDSOCIAL TO SELL MORE</p>
            </div>

            <div className="partners__containers-images">

                <img src={cnn} alt="" srcset="" />
                <img src={natgeo} alt="" srcset="" />

                <img src={Group_florence} alt="" srcset="" />

                <img src={ancestry_logo} alt="" srcset="" />
                <img src={industrious} alt="" srcset="" />

                <img src={nike} alt="" srcset="" />
                </div>



        </section>
    )
}

export default Partners
