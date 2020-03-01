import React from 'react'
import "./listLayout.css"

export default function TaskList({renderTask}) {
  
    return (
        <ul className="list_layout">
            {renderTask("google.com","Home Cleaning")}
            {renderTask("google.com","Furniture Assembly")}
            {renderTask("google.com","TV Mounting")}
            {renderTask("google.com","Wall Hanging")}
        </ul>
    )
}
