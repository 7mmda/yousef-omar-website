
import React, { createContext, useState, useRef, useContext } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasBeenPlayed, setHasBeenPlayed] = useState(false);
  const audioRef = useRef(null);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasBeenPlayed(true);
      }).catch(error => console.error("Audio play failed:", error));
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const value = {
    isPlaying,
    hasBeenPlayed,
    play,
    pause,
    togglePlay,
  };

  return (
    <AudioContext.Provider value={value}>
      <audio ref={audioRef} loop>
        <source src="/MajidAlMohandisBenIdayya.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {children}
    </AudioContext.Provider>
  );
};

