import React from "react";  // import React (to provide access to JSX)

function PhotoViewer(props) {  
      // declare a new function called 'PhotoViewer'
    
      return (                
        <div>   
            <center>            
                <br></br> <br></br>
                <img src = {props.src} width = "600" height = "400"></img>
            </center>
        </div>
    );
}

export {PhotoViewer};  