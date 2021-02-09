import React from "react";  // import React (to provide access to JSX)

function PhotoViewer(props) {  
      // declare a new function called 'PhotoViewer'
    
      return (                
        <div>   
            <center>            
                <img src = {props.src}></img>
            </center>
        </div>
    );
}

export {PhotoViewer};  