import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currSong, isPlaying, setIsPlaying }) => {
  //Ref
  const audioRef = useRef(null);


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
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const timeUpdateHandler = (e) => {
    // console.log(audioRef.current.duration);
    const time = (e.target.currentTime);
    const tduration = (e.target.duration);
    setSongInfo({ currentTime: (time), duration: (tduration) });
  };


  const dragHandler=(e)=>{
    //   console.log(e.target.value)
    audioRef.current.currentTime=e.target.value;
    setSongInfo({...songInfo,currentTime:e.target.value})
  }

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
        min={0} 
        max={songInfo.duration} 
        value={songInfo.currentTime}  
        onChange={dragHandler} 
        type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="previous" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying? faPlay: faPause}
        />
        <FontAwesomeIcon className="next" size="2x" icon={faAngleRight} />
      </div>
      <audio
        ref={audioRef}
        onLoadedData={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currSong.audio}
      >
        errorrrr
      </audio>
    </div>
  );
};

export default Player;
