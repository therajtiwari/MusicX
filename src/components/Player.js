import React from "react";
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
}) => {
  //Ref

  //event handlers
  const playSongHandler = () => {
    //we need to use reference (useRef) to access html tags...cant do getElementby like vanilla JS
    // audioRef.current.play();
    // console.log(isPlaying);
    // console.log(setIsPlaying);
    if (!isPlaying) {
      audioRef.current.play();
      // setIsPlaying(!isPlaying);
      // isPlaying=false;  //is playing is not a normal variable that u can change like this ....its a state so it can be changed only by using setIsPlaing
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      // setIsPlaying(!isPlaying);
      // isPlaying=true;
      setIsPlaying(false);
    }
    // if (songInfo.currentTime === songInfo.duration) {
    //   console.log("heuyyyyyyyy");
    //   audioRef.current.pause();
    //   setIsPlaying(false);
    // }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    //   console.log(e.target.value)
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //state

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="previous" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className="next" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
