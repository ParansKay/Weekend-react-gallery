import React from 'react';
import {useEffect, useState} from "react";
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';


function App() {

  const[images, setImages] = useState( [] );
  
  useEffect( ()=>{
    getImages();
  },[]);

  const getImages=()=>{
    axios.get( '/gallery' ).then( (response) =>{
      // set the value of setPictures to the data received from the response coming back from the server
      // response.data = gallerylist (from gallery.data.js)
      console.log( response.data);
      setImages( response.data );
      // catch any errors
    }).catch( (err)=>{
      // alert the user with "nope!"
      alert('nope!');
      // console log with error
      console.log( 'error', err );
    })
  }

  const [ totalLikes, setTotalLikes ] = useState(0);

  const addTotalLikes = () => {
    setTotalLikes( totalLikes + 1 )
  }

  const removeTotalLikes = () => {
    setTotalLikes( totalLikes -1 )
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* we are bringing in the GalleryList component, 
        everything after is what we are sending to the GalleryList,
        we create a variable and set it's value to our images array
        */}
        <GalleryList imagesToSendToGL={images} getImages={getImages}/> 
      </div>
    );
}

export default App;
