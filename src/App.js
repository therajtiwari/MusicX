import React, { useState, useRef } from "react";

//importing styles
import "./styles/app.scss";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import Util
import data from "./utils";

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryState, setLibraryState] = useState(false);

  //event handlers
  const timeUpdateHandler = (e) => {
    // console.log(audioRef.current.duration);
    const time = e.target.currentTime;
    const tduration = e.target.duration;
    setSongInfo({ currentTime: time, duration: tduration });

    if (time === songInfo.duration) {
      // console.log("song completed");
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="App">
      {/* {console.log(setLibraryState)} */}
      {/* {console.log(setCurrSong)} */}
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />
      <Song currSong={currSong} />
      <Player
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        currSong={currSong}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        songs={songs}
        setCurrSong={setCurrSong}
        setSongs={setSongs}
        libraryState={libraryState}
        setLibraryState={setLibraryState}
      />
      <audio
        ref={audioRef}
        onLoadedData={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currSong.audio}
      >
        Error Playing
      </audio>
    </div>
  );
}

export default App;
