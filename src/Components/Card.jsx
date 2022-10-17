import React from 'react'
import star from "../assets/star.png"
/*
Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/


export default function Card(props) {
    let badgeText
    if (props.element.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.element.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className='card content'>
            {/* IF statement to display sold out */}
            {badgeText && <div className='card--soldOut'>{badgeText}</div>}
            <img src={`./images/${props.element.coverImg}`} alt="photo of event" />
            <div className='card--review'>
                <img src={star} alt='stars' />
                <p className='rating'> {props.element.stats.rating}</p>
                <p className='rating2'>({props.element.stats.reviewCount}) {props.location}</p>
            </div>
            <p className='title'>{props.element.title}</p>
            <p><strong>From ${props.element.price} / </strong> person</p>

        </div>
    )
}
