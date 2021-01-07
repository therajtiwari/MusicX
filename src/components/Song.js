import React from "react";

const Song = ({ currSong }) => {
  return (
    <div className="song-container">
      <img alt={currSong.name} src={currSong.cover}></img>
      <h2>{currSong.name}</h2>
      <h3>{currSong.artist}</h3>
    </div>
  );
};

export default Song;
