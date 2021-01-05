import React from 'react';

const Song=({currSong})=>{

    return (
        <div className="song-container">
            <img src={currSong.cover}></img>
            <h2>{currSong.name}</h2>
            <h3>{currSong.artist}</h3>
            <audio controls="controls"  src={currSong.audio}>errorrrr</audio>
        </div>
       
    )
}

export default Song;