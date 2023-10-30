// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import arrow_up from "../arrow-up.png";
import arrow_down from "../arrow-down.png";
import "../sass/Collapse.scss";

// eslint-disable-next-line react/prop-types
export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)

    const handleToggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div >
            <div onClick={handleToggleCollapse} className={`collapse ${isOpen ? "open" : ""}`}>
                <p className="collapsetitle">{title}</p>
                <img src={isOpen ? arrow_down : arrow_up} alt={isOpen ? "fermer" : "ouvrir"} className="arrow" />
            </div>
                {isOpen && (
            <div ref={contentRef} className={`collapsible-content ${isOpen ? "open" : ""}`}>
                    <ul>{content}</ul>
            </div>
        )}
        </div>
    )
}