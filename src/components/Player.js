import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrSong,
  setSongs,
}) => {
  useEffect(() => {
    const selectedSong = songs.map((song) => {
      if (song.id === currSong.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(selectedSong);
    console.log(songs);
  }, [currSong, setSongs]);

  //event handlers
  const playSongHandler = () => {
    //we need to use reference (useRef) to access html tags...cant do getElementby like vanilla JS
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();

      setIsPlaying(false);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //to skip forward and backward
  const nextPrevHandler = async (direction) => {
    let current = songs.findIndex((song) => song.id === currSong.id);
    if (direction === "next") {
      await setCurrSong(songs[(current + 1) % songs.length]);

      // audioRef.current.play();
    } else {
      if (current - 1 === -1) {
        current = songs.length;
      }

      await setCurrSong(songs[current - 1]);
    }

    if (isPlaying) audioRef.current.play();
  };

  const endHandler = async () => {
    let current = songs.findIndex((song) => song.id === currSong.id);
    await setCurrSong(songs[(current + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  //styles
  const musicbar = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track">
          <input
            style={{
              background: `linear-gradient(to right,${currSong.color[0]},${currSong.color[1]})`,
            }}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            onEnded={endHandler}
            type="range"
          />
          <div style={musicbar} className="animate-track"></div>
        </div>

        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => nextPrevHandler("back")}
          className="previous"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => nextPrevHandler("next")}
          className="next"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
