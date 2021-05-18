import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
  faRedoAlt,
  faRandom,
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
  isOnLoop,
  setonLoop,
  setOnShuffle,
  isOnShuffle,
}) => {
  // to set the current selected song as active
  const allsongs = JSON.parse(JSON.stringify(songs));

  useEffect(() => {
    const selectedSong = allsongs.map((song) => {
      if (song.id === currSong.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(selectedSong); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currSong, setSongs]);

  //event handlers

  // play pause the song
  const playSongHandler = () => {
    //we need to use reference (useRef) to access html tags...cant do getElementby as in vanilla JS
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // get the current playtime of the song
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // to handle the dragging of the range bar for jumping to a specific time
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //to go to the next and previous song
  const nextPrevHandler = async (direction) => {
    let current = songs.findIndex((song) => song.id === currSong.id);

    if (isOnShuffle) {
      let randomNumber = current;
      while (randomNumber === current)
        randomNumber = Math.floor(Math.random() * songs.length);
      await setCurrSong(songs[randomNumber]);
    } else {
      if (direction === "next") {
        await setCurrSong(songs[(current + 1) % songs.length]);
      } else {
        if (current - 1 === -1) {
          current = songs.length;
        }
        await setCurrSong(songs[current - 1]);
      }
    }

    if (isPlaying) audioRef.current.play();
  };

  const repeatHandler = () => {
    setonLoop(!isOnLoop);
  };

  const shuffleHandler = () => {
    setOnShuffle(!isOnShuffle);
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
            name="track-range"
            style={{
              background: `linear-gradient(to right,${currSong.color[0]},${currSong.color[1]})`,
            }}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={musicbar} className="animate-track"></div>
        </div>

        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => repeatHandler()}
          className="loop"
          size="2x"
          icon={faRedoAlt}
          style={isOnLoop ? { color: currSong.color[0] } : { color: "black" }}
        />

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
        <FontAwesomeIcon
          onClick={() => shuffleHandler("back")}
          className="shuffle"
          size="2x"
          icon={faRandom}
          style={
            isOnShuffle ? { color: currSong.color[0] } : { color: "black" }
          }
        />
      </div>
    </div>
  );
};

export default Player;
