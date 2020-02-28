import React from 'react'
import "./listLayout.css"

export default function TaskList() {
    const renderTask =(taskImgUrl,taskName)=>{
        return (
            <li key={taskName} className="li-container_flex"> 
                <img src={taskImgUrl} alt={`${taskName} img`} className="img-container"></img>
                <div className="task_description">{taskName}</div>
            </li>
        )
    }
    return (
        <ul className="list_layout">
            {renderTask("google.com","Home Cleaning")}
            {renderTask("google.com","Home Cleaning")}
            {renderTask("google.com","Home Cleaning")}
            {renderTask("google.com","Home Cleaning")}
        </ul>
    )
}
