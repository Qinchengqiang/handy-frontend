import React from 'react'
import "./listLayout.css"

export default function FurnitureList({renderTask}) {
    
    return (
        <ul className="list_layout">
            {renderTask("google.com","Shop Beds")}
            {renderTask("google.com","Shop Desks")}
            {renderTask("google.com","Shop Dressers")}
            {renderTask("google.com","Shop Chandeliers")}
        </ul>
    )
}
