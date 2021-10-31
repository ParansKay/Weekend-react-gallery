import { useState } from "react";
import axios from "axios";

function GalleryItem( props ){

    // create a variable named showImage and set it's value to true
    const [showImage, setShowImage] = useState (true);
    // create a function called toggleShowImage
    const toggleShowImage = () => {
        // the function sets the value of showImage to not-showImage (changes it from true to false)
        setShowImage(!showImage);
      } //end toggleShowImage

    //create a variable called likeUnlike and set it's value to false (because pictures are unliked in their default state)
    const [likeUnlike, setLikeUnlike ] = useState (false);
    //create a function called toggleLikeUnlike (we're going to create a button for it in the return div)
    const toggleLikeUnlike =()=>{
        // if something is not liked, 
        if( !likeUnlike ){   
            // set the value of likeUnlike to true (heart the image)
            setLikeUnlike(true)
            addLike();
        }
        // otherwise, if the image is liked, set the value to false (un-heart)
        else{
            setLikeUnlike(false)
            removeLike();
        }
    }// end toggleLikeUnlike

    const addLike=()=>{
        axios.put( `/gallery/addLike/${props.imageToSendtoGI.id}`, props.imageToSendtoGI ).then( (response)=>{
        props.getImages();
        }).catch((err)=>{
        console.log('error:', err);
        });
    }//end addLike

    const removeLike=()=>{
        axios.put( `/gallery/removeLike/${props.imageToSendtoGI.id}`, props.imageToSendtoGI ).then( (response)=>{
        props.getImages();
        }).catch((err)=>{
        console.log('error:', err);
        });
    }

    return(
        <div>
            {/* Calling our toggle function and defining what happens when it's used */}
            {
            // if showImage is true, display the image
            showImage?
            // if yes: 
            <img onClick={toggleShowImage} src={ props.imageToSendtoGI.path }/>:
            // if no:
            <h2 onClick={toggleShowImage}> {props.imageToSendtoGI.description}</h2>
            }

            {/* Calling our toggleLikeUnlike function and defining what happens when it's used */}
            {
            // if like is true,
            likeUnlike?
            // then, we can un-heart the image
            <button onClick={toggleLikeUnlike}>un-Heart</button> :
            // else, if it's false, we can heart it
            <button onClick={toggleLikeUnlike}>Heart</button> 
              }

            { 
             //if someone has liked it, display happy message with count, otherwise, sad 'no people' message
            // numLikes > 0 ?
            // <h3>{numLikes} people love this!</h3> :
            // <h3>No people love this :(</h3>
            }

        </div>
    )
}

export default GalleryItem;