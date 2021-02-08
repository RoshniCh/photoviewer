import React from "react";  // import React (to provide access to JSX)

function PhotoViewer(props) {  
      // declare a new function called 'PhotoViewer'
    
      return (                
        <div>               
            <img src = {props.src}></img>
        </div>
    );
}

export {PhotoViewer};  