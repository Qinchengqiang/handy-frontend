import React from 'react'
import "./listLayout.css"

export default function FurnitureList({renderTask}) {
    
    return (
        <ul className="list_layout">
            {renderTask("https://www.fantasticfurniture.com.au/medias/MOABSLQNN-1-PD-1-CONTAINER-original-FantasticFurniture-WF-Product-Detail?context=bWFzdGVyfGltYWdlcy9NT0FCU0xRTk5fMXw4ODIyNnxpbWFnZS9qcGVnfGltYWdlcy9NT0FCU0xRTk5fMS9oMGQvaGI3Lzg5Mzc4MjcwNDEzMTAuanBnfDM5MTZhZWRlYmM3MzcwMTJjOTc0OGE0MzdmMTRiOWEyNGViMjZiYTIyNTBmMGYyYjUwN2FkYzRjZTNjMTFlNmM","Shop Beds >")}
            {renderTask("https://d37hmz7a04m9b0.cloudfront.net/media/catalog/product/cache/1/image/1610x1110/9df78eab33525d08d6e5fb8d27136e95/6/0/603820001_002_08092017.jpg","Shop Desks >")}
            {renderTask("https://www.fantasticfurniture.com.au/medias/HANDRE7DROOOPABLIO-PD-1-CONTAINER-original-FantasticFurniture-WF-Product-Detail?context=bWFzdGVyfGltYWdlcy9IQU5EUkU3RFJPT09QQUJMSU98MzA4MDR8aW1hZ2UvanBlZ3xpbWFnZXMvSEFORFJFN0RST09PUEFCTElPL2gyZC9oZWQvODkzOTk1OTE4OTUzNC5qcGd8YjQwZWEyNGE3YjAwYzA1MTNlYTZjOWQ4YzdlNzhhNTRjYzlkODM5YjcxOWZhNjlkOTg5NzcxNWQ2NGVhOTVmMg","Shop Dressers >")}
            {renderTask("https://i.pinimg.com/originals/c8/f0/6b/c8f06bdd9b2b7409030871ba1e77046a.png","Shop Chandeliers >")}
        </ul>
    )
}
