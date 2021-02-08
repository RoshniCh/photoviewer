import React from "react";  // import React (to provide access to JSX)
import {useState} from "react"
import { ImageUrls } from './getImageUrls.js';

function ImgSelector() {  
    const urlList = ImageUrls;
    const [clickedImage, setClickedImage] = useState(urlList[0]); 
    
    // function incrementCount() {
    //     setClickCount(e => setMessage(e.target.src)) }

    return (                
        <div>   
            <br></br><br></br> 
                <center>
                <img class = "image-unselected" src = {clickedImage} width = "600" height = "400"></img> </center> <br></br><br></br>
                <center>
                {urlList.map(urls => (
                    <img class = "image-unselected" src = {urls} onClick={(e => setClickedImage(e.target.src)) }></img>
                ))}
                </center>
        </div>
    );
}

export {ImgSelector};  