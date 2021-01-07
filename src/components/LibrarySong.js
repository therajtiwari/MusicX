import React from "react";
import { playAudio } from "./utils";

const LibrarySong = ({
  song,
  setCurrSong,
  songs,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
}) => {
  const songSelectHandler = async (e) => {
    // console.log("a");
    // console.log(e);

    // audioRef.current.play();
    // console.log(audioRef);
    // check if the song is playing

    //changing the active state if all the songs (setting the current one to true and rest all to false)
    const selectedSong = songs.map((esong) => {
      if (esong.id === song.id) {
        return { ...esong, active: true };
      } else {
        return { ...esong, active: false };
      }
    });
    // playAudio(audioRef, isPlaying);
    //waits till not compleltely loaded
    await setCurrSong(song);
    audioRef.current.play();
    setIsPlaying(true);
    //check the state of all the songs
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected-song" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
