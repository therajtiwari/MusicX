import React from "react";

const LibrarySong = ({
  song,
  setCurrSong,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const songSelectHandler = async (e) => {
    await setCurrSong(song);
    audioRef.current.play();
    setIsPlaying(true);
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
