import React from 'react'
import './Widgets.css'
import widgets from '../assets/widgets.png'

import highlight from '../assets/highlight.png'
import carousel from '../assets/carousel.svg'
import story from '../assets/story.svg'
import inline from '../assets/inline.svg'
import popover from '../assets/popover.png'
import Tab from '../components/Tab'

function Widgets() {
    return (
        <div className="widgets__container padding-left padding-right">

            <div className="widgets__container-image">
                <img src={widgets} alt="" srcset="" />
            </div>

            <div className="widgets__container-tab">
                <div className="widgets__container-tab__text">
                <h2>
                Widgets for every website.
                </h2>

                </div>
                <div className="widgets__container-tab-icons">
                <Tab icon={highlight} text="Highlight"/>
                <Tab icon={popover} text="Popover" />
                <Tab icon={inline} text="Inline Slideshows" />
                <Tab icon={story} text="Story list gallery" />
                <Tab icon={carousel} text="Carousel gallery" />

                </div>


            </div>


        </div>
    )
}

export default Widgets
