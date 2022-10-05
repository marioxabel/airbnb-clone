import React from 'react'
import image from '../assets/katie-zaferes.png'
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

export default function Card() {
    return(
        <div className='card content'>
            <img src={image} alt="katie" />
            <div className='card--review'>
                <img src={star} alt='stars' />
                <p className='rating'> 5.0 </p>
                <p className='rating2'>(6) USA</p>
            </div>
            <p className='title'>Life lessons with katie Zaferes</p>
            <p><strong>From $136 / </strong> person</p>

        </div>
    )
}
