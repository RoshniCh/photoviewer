import React from "react";  // import React (to provide access to JSX)
import {useState} from "react"
import { ImageUrls } from './getImageUrls.js';

function ImgSelector() {  
    const urlList = ImageUrls;
    const [clickedImage, setClickedImage] = useState(0); 
    
    // function incrementCount() {
    //     setClickCount(e => setMessage(e.target.src)) }

    return (                
        <div>    
                You clicked <img src = {clickedImage}></img><br></br><br></br>
                {urlList.map(urls => (
                    <img class = "image-unselected" src = {urls} onClick={(e => setClickedImage(e.target.src)) }></img>
                ))}
        </div>
    );
}

export {ImgSelector};  
