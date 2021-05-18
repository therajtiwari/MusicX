import React, { useState, useRef } from "react";

//importing styles
import "./styles/app.scss";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//import Util
import allSongs from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(allSongs);
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOnLoop, setonLoop] = useState(false);
  const [isOnShuffle, setOnShuffle] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryState, setLibraryState] = useState(false);

  //event handlers

  // to update the time of the track
  const timeUpdateHandler = (e) => {
    const time = e.target.currentTime;
    const tduration = e.target.duration;
    //calculate percentage
    let roundedCurrent = Math.round(time);
    const roundtduration = Math.round(tduration);
    const animPercentage = Math.round((roundedCurrent * 100) / roundtduration);
    // console.log(animPerentage);
    setSongInfo({
      currentTime: time,
      duration: tduration,
      animationPercentage: animPercentage,
    });

    if (time === songInfo.duration) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // to play the next song
  const endHandler = async () => {
    let current = songs.findIndex((song) => song.id === currSong.id);
    if (!isOnLoop) {
      if (!isOnShuffle) {
        await setCurrSong(songs[(current + 1) % songs.length]);
      } else {
        let randomNumber = current;
        while (randomNumber === current)
          randomNumber = Math.floor(Math.random() * songs.length);
        await setCurrSong(songs[randomNumber]);
      }
    } else {
      await setCurrSong(songs[current % songs.length]);
    }

    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className={`App ${libraryState ? "library-active" : ""}`}>
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />

      <Song currSong={currSong} />

      <Player
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        currSong={currSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrSong={setCurrSong}
        setSongs={setSongs}
        isOnLoop={isOnLoop}
        setonLoop={setonLoop}
        setOnShuffle={setOnShuffle}
        isOnShuffle={isOnShuffle}
      />

      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        songs={songs}
        setCurrSong={setCurrSong}
        setSongs={setSongs}
        libraryState={libraryState}
        setLibraryState={setLibraryState}
        setIsPlaying={setIsPlaying}
      />
      <audio
        ref={audioRef}
        onLoadedData={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currSong.audio}
        onEnded={endHandler}
      >
        Error Playing
      </audio>
    </div>
  );
}

export default App;
