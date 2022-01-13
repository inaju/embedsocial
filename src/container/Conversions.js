import React from 'react'
import ConversionsTab from '../components/ConversionsTab'
import './Conversions.css'
import increase from '../assets/increase.png'
import time from '../assets/time.png'
import ig_white from '../assets/ig_white.png'
import conversion_pic from '../assets/conversion_pic.png'




function Conversions() {
    return (
        <div className="conversions__container padding-left padding-right section-margin">
            <div className="conversions__container-header">
            <h2 id="conversions__h2__text">Double your <span className="yellow">conversions.</span></h2>
            <h2 >Double your <span className="yellow">growth.</span></h2>
          

            </div>

            <div className="conversions__container-tab">
            <ConversionsTab title="Brands" icon={increase} subtext="increase conversions" text="Enhance the visual showcase of your products with unique content making visitors convert to buyers." />
            <ConversionsTab title="Marketers" icon={time} subtext="Marketers" text="No more re-purposing, re-cropping or re-uploading the same content from your Instagram stories to your website." />
            <ConversionsTab title="Web designers" icon={ig_white} subtext="Fresh content" text="Every story you post on Instagram, it is automatically saved in your account. Auto updates you unique content."/>

            </div>

            <div className="conversions__container-lowertext ">
                <h3>Clovin</h3>
                <p>“Storytelling on another level. EmbedStories is great - it takes pride of place on our homepage aggregating stories from our Instagram account. I highly recommend this product. ”</p>

                <div className="conversions__container-profile">
                    <img src={conversion_pic}  />
                    <p><b>Ben Calahen,</b>  COO at Clovin</p>
                </div>
            </div>

        </div>
    )
}

export default Conversions
