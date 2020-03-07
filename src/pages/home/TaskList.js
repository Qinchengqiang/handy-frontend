import React from 'react'
import "./listLayout.scss"

export default function TaskList({renderTask}) {
  
    return (
        <ul className="list_layout">
            {renderTask("https://farm66.staticflickr.com/65535/49591762056_53e70595f4.jpg","Home Cleaning >",'./services/home-cleaning')}
            {renderTask("https://farm8.staticflickr.com/7608/16185052113_8a07204b6e.jpg","Furniture Assembly >",'./services/furniture-assembly')}
            {renderTask("https://farm5.staticflickr.com/4274/34782221546_bfe8b655c7.jpg","TV Mounting >",'./services/tv-mounting')}
            {renderTask("https://i.ytimg.com/vi/0f-GrG-VxVo/maxresdefault.jpg","Wall Hanging >",'./services/wall-hanging')}
        </ul>
    )
}
