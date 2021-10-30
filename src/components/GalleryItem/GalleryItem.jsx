import { useState } from "react";
import axios from "axios";

function GalleryItem( props ){
    // const[name, setName]= useState( null );
    const [showImage, setShowImage] = useState (true);


    const toggleShow = () => {
        setShow(!show);
      } //end toggleShow

    return(
        <div>
            {/* {
            show? */}
            
            <img src={ props.imageToSendtoGI.path }/>
        </div>
    )
}

export default GalleryItem;