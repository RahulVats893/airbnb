import React from "react"
import './card.css'

export default function Card(props) {
    
    return (
        <div className="card" >
            <img src={`../Images/${props.img}`} className="card--image" alt=" " width={'176px'} height={'235px'} />
            <div className="card--stats">
                <img src="../Images/star.png" className="card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}