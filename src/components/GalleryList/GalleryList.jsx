import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList( props ){
    // const[name, setName]= useState( null );

    console.log( 'props:', props);

    return(
        <div>
            <h1>GalleryList</h1>
            {/* after props, the name of the object has to match the object we sent from app to GalleryList,
            mapping through it (loop through),
            we name each individual instance / index "image",
            everytime we run into an index, 
            we are bringing in GalleryItem and send it a prop,
            we create a new variable called imageToSendtoGI=cuuret image that we are on */}
            {props.imagesToSendToGL.map(image => (<GalleryItem imageToSendtoGI={image} key={image.id}/>))}
        </div>
    )
}

export default GalleryList;