// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import data from "../data/data.json"
import starColor from "../star_color.png"
import starGrey from "../star_grey.png"
import Collapse from "../components/Collapse"
import "../sass/Accommodation.scss"

export default function Accommodation() {
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()
    const selectedItem = data.find((item) => item.id === id)

    useEffect(() => {
        if (!selectedItem) {
            navigate("*")
        }
    }, [selectedItem, navigate])

    if (selectedItem) {

        const { pictures, title, location, host, tags, rating, description, equipments } = selectedItem
        
        const ratingNumber = parseInt(rating)
        const stars = Array.from({ length: 5 }, (_, index) => (
            <img 
            key={index}
            src={index < ratingNumber ? starColor : starGrey}
            alt={index < ratingNumber ? "star" : "empty-star"} />
            ))
            
        return (
            <section className="accommodationContent">
                <Slideshow imagesList={pictures} />
                
                <div className="titleLocationHostStars">
                    <div className="titleLocation">
                        <div>
                            <h1 className="orange">{title}</h1>
                            <p className="city">{location}</p>
                        </div>
                        <ul>
                            {tags.map((tag, index) => (
                                <li key={index}> {tag} </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hostStars">
                        <div className="host"> 
                            <p>{host.name}</p>
                            <img src={host.picture}
                                alt={host.name} />
                        </div>
                        <div>
                            {stars}
                        </div>
                    </div>
                </div>
                <div className="accommodationCollapse">
                    <Collapse className='accommodationCollapseune'
                        title="Description"
                        content={description} />
                    <Collapse className='accommodationCollapsedeux'
                        title="Équipements"
                        content={
                            <ul>
                                {equipments.map((equipment, index) => (
                                    <li key={index}>
                                        {equipment}
                                    </li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </section>
        )
    }
}        