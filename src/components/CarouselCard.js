import React from 'react'
import './CarouselCard.css'


const CarouselCard = ({image, title, text}) => {
    return (
            <div className="carouselcard__item">
            <img src={image} alt="" />
            <div className="carouselcard__item-text">
            <h3>{title}</h3>
            <p>{text}</p>

            </div>

            </div>
    )
}

export default CarouselCard
