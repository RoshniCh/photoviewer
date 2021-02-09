import React from "react";  // import React (to provide access to JSX)
import {useState} from "react"
import { ImageUrls } from './getImageUrls.js';

function ImgSelector() {  
    const urlList = ImageUrls;
    const [clickedImage, setClickedImage] = useState(urlList[0]); 
    
    function updateClickedImage(url) {
        setClickedImage(url) }

    return (                
        <div>   
            <br></br><br></br> 
                <center>
                <img class = "image-unselected" src = {clickedImage} width = "600" height = "400"></img> </center> <br></br><br></br>
                <center>
                {urlList.map(urls => (
                    <img class = {urls === clickedImage ? "image-selected" : "image-unselected" } 
                    src = {urls} onClick={ () => updateClickedImage(urls) }></img>
                ))}
                </center>
        </div>
    );
}


export {ImgSelector};  


// // ***** toggles the whole block white and blue
// function ImgSelector() {  
//     const urlList = ImageUrls;
//     const [isActive, setActive] = useState(false); 
    
//     function toggleClass() {
//         setActive(!isActive) }

//     return (                
//         <div>   
//             <center>
//                 {urlList.map(urls => (
//                     <img className = {isActive && urls == ? 'image-selected' : 'image-unselected'} src = {urls} onClick={ () => toggleClass() }></img>
//                 ))}
//             </center>
//         </div>
//     );
// }


// ****** shows selected image on top and a block of images at the bottom
// function ImgSelector() {  
//     const urlList = ImageUrls;
//     const [clickedImage, setClickedImage] = useState(urlList[0]); 
    
//     function updateClickedImage(url) {
//         setClickedImage(url) }

//     return (                
//         <div>   
//             <br></br><br></br> 
//                 <center>
//                 <img class = "image-unselected" src = {clickedImage} width = "600" height = "400"></img> </center> <br></br><br></br>
//                 <center>
//                 {urlList.map(urls => (
//                     <img class = "image-unselected" src = {urls} onClick={ () => updateClickedImage(urls) }></img>
//                 ))}
//                 </center>
//         </div>
//     );
// }