import logo from './logo.svg';
import {useState} from "react"
import './App.css';
import {PhotoViewer} from './PhotoViewer/PhotoViewer.js';
import './PhotoViewer/PhotoViewer.css'
import { ImgSelector } from './PhotoViewer/ImgSelector.js';


function App() {
  const [clickedImage, setClickedImage] = useState("https://picsum.photos/id/600/200/300"); 
  return (
      <div>
        <h1>React Photo Viewer</h1>
        <body>
          <div className = "top-image">
            <PhotoViewer src = {clickedImage}/>
          </div>
          <div className = "images">
                <ImgSelector clickedImage = {clickedImage} setClickedImage = {setClickedImage}/>
          </div>
        </body>
      </div>
  );
}


// {
//   var urlList=[]
//   urlList[0] = "https://picsum.photos/id/237/200/300"
//   urlList[1] = "https://picsum.photos/id/1/200/300"
//   urlList[2] = "https://picsum.photos/id/10/200/300"
//   }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
