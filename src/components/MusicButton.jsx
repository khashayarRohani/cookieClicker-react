import { useState, useEffect } from "react";

export default function MusicButton() {
  const [isPlay, setIsPlay] = useState(false);
  const [audio] = useState(new Audio("/Audio/music.mp3")); // Initialize audio once

  useEffect(() => {
    // Cleanup function to pause and reset audio when component unmounts- same as clearing Interval
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const start = () => {
    audio.play();
    setIsPlay(true);
  };

  const pause = () => {
    audio.pause();
    audio.currentTime = 0; // Reset audio to start
    setIsPlay(false);
  };

  return (
    <div>
      {isPlay ? (
        <button className="footerButton button-music" onClick={pause}>
          Pause
        </button>
      ) : (
        <button className="footerButton button-music" onClick={start}>
          Play Music
        </button>
      )}
    </div>
  );
}
