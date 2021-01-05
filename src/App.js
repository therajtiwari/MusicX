
import React,{useState} from "react";

//importing styles
import "./styles/app.scss"
//adding components 
import Player from './components/Player';
import Song from './components/Song';
//import Util
import data from "./utils"

 
function App() {

  //state
  const [songs,setSongs]=useState(data());
  // const [currSong,setCurrSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false);

  return (
    <div className="App">
     {/* <h1>Music Player</h1> */}
     <Song currSong={currSong} />
     <Player currSong={currSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
}

export default App;
