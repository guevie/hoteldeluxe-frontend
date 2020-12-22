import React from 'react'
import { Link } from "react-router-dom"
import defaultImg from "../images/room-1.jpeg"

function Room({room}) {
// console.log(room);
const {name,slug,images,price} = room
    return (
        <article className="room">
            {/* //affichage de l'image  */} 
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="chambre seule"/>
            <div className="price-top">
                <h6>€{price}</h6>
                <p>par nuit</p>
            </div>
            <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                Future
            </Link>
            </div>
        </article>
    )
}

export default Room

