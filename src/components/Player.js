import React,{useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'


const Player=({currSong})=>{

    return (
        <div className="player-container">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                {/* <p>Play Control</p> */}
                <FontAwesomeIcon className="previous" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="next" size="2x" icon={faAngleRight}/>
            </div>
        </div>
       
    )
}

export default Player;