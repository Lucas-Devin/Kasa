// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import PropTypes from "prop-types"
import arrowLeft from "../arrow-left.png"
import arrowRight from "../arrow-right.png"
import "../sass/Slideshow.scss"

export default function Slideshow({imagesList}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentImage = imagesList[currentIndex]

    const slideLeft = () => {
        setCurrentIndex(currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1)
    }
    
    const slideRight = () => {
        setCurrentIndex(currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className="descriptionAccommodation">
            <img src={currentImage}
                alt="Logement"
                className="imageAccommodation" />
            {imagesList.length === 1 ? null : (
                <div> 
                    
                    <p className="number">
                        {currentIndex + 1}/{imagesList.length}
                     </p>
                   

                     <img className="left" onClick={() => slideLeft()}
                        src={arrowLeft}
                        alt="Précédente" />
                    
                     
                     <img className="right" onClick={() => slideRight()}
                        src={arrowRight}
                        alt="Suivante" />
                        
                   
                
                </div>
            )}
        </div>
    )
}

Slideshow.propTypes = {
    imagesList: PropTypes.arrayOf(PropTypes.string).isRequired,
}