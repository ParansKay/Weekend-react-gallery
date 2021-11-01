import { useState } from "react";
import axios from "axios";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

function GalleryItem( props ){

    // create a variable named showImage and set it's value to true
    const [showImage, setShowImage] = useState (true);
    // create a function called toggleShowImage
    const toggleShowImage = () => {
        // the function sets the value of showImage to not-showImage (changes it from true to false)
        setShowImage(!showImage);
      } //end toggleShowImage

    //create a variable called likeUnlike and set it's value to false (because pictures are unliked in their default state)

    const addLike=()=>{
        axios.put( `/gallery/like/${props.imageToSendtoGI.id}`, props.imageToSendtoGI ).then( (response)=>{
        props.getImages();
        }).catch((err)=>{
        console.log('error:', err);
        });
    }//end addLike

    return(
        <div className="galleryItem">
            <div className="img2Crop">
            {/* Calling our toggle function and defining what happens when it's used */}
            {
            // if showImage is true, display the image
            showImage?
            // if yes: 
            <img className="imgFix" onClick={toggleShowImage} src={ props.imageToSendtoGI.path }/>:
            // if no:
            <h2 className="imgDescription" onClick={toggleShowImage}> {props.imageToSendtoGI.description}</h2>
            }
            </div>
            <div>
            <Button color="secondary" variant="outlined" onClick={addLike} endIcon={<FavoriteIcon />}>Like {props.imageToSendtoGI.likes}</Button>
            </div>
        </div>
    )
}

export default GalleryItem;