import React from "react";
import grid from '../assets/photo-grid.png'

export default function Hero() {
    return(
        <div className="hero">
            <img className="hero--img" src={grid} alt='photo grid of experiences' />
            <h1 className="content">Online Experiences</h1>
            <p className="hero--text content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}