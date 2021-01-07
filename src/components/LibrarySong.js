import React from "react";

const LibrarySong = ({
  song,
  setCurrSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = (e) => {
    // console.log("a");
    // console.log(e);
    setCurrSong(song);

    // audioRef.current.play();
    // console.log(audioRef);
    // check if the song is playing
    if (isPlaying) {
      // making a promise so as to execute only after the loading is complete
      const playPromise = audioRef.current.play();
      console.log(audioRef.current.play());
      console.log(playPromise);
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }

    //changing the active state if all the songs (setting the current one to true and rest all to false)
    const selectedSong = songs.map((esong) => {
      if (esong.id === song.id) {
        return { ...esong, active: true };
      } else {
        return { ...esong, active: false };
      }
    });
    //check the state of all the songs
    setSongs(selectedSong);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
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
