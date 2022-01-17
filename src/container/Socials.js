import React from 'react'
import SocialTab from '../components/SocialTab'
import './Socials.css'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import tiktok from '../assets/tiktok.png'
import twitter from '../assets/twitter.png'
import linkedln from '../assets/linkedln.png'


function Socials() {    
    return (
        <div className="socials__container">
            <div className="socials__container-text">

            
            <h2>
                Let your story <span className="yellow">live more than 24h. </span>
            </h2>
            <p>You've worked hard to create a beautiful Instagram story but it disappears in 24 hours? No worries, use our story saver for Instagram to bring them to life on your website.</p>

        </div>
        <div className="socials__container-tab">
            <SocialTab title="Auto Sync" text="Instagram Stories" icon={instagram} />
            <SocialTab title="Upload" text="Facebook Stories" icon={facebook} />
            <SocialTab title="Sync" text="Tik Tok Stories" icon={tiktok} />
            <SocialTab title="Upload" text="Twitter Fleets" icon={twitter} />
            <SocialTab title="Upload" text="Linkedln Stories" icon={linkedln} />

        </div>
        </div>

    )
}

export default Socials
