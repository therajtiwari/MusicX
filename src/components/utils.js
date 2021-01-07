export const playAudio = (audioRef, isPlaying) => {
  if (isPlaying) {
    // making a promise so as to execute only after the loading is complete
    const playPromise = audioRef.current.play();
    // console.log(audioRef.current.play());
    // console.log(playPromise);
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioRef.current.play();
      });
    }
  }
};
