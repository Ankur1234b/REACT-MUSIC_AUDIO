import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
export default function Card({ song, title }) {
  const [audio] = useState(new Audio(song));
  const [vol, setVol] = useState(0.5);
  
  
  const playsong = () => {
    audio.play();
    };

  const stopsong = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const changeVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVol(newVolume);
  };

  useEffect(() => {
    const updateVolume = () => {
      setVol(audio.volume);
    };
    audio.addEventListener('volumechange', updateVolume);
    return () => {
      audio.removeEventListener('volumechange', updateVolume);
    };
  }, [audio]);

  return (
    <div className={styles.card}>
    <h3 className={styles.song_title}>{title}</h3>
    <div className={styles.audio_controls}>
        <button onClick={playsong}>Play</button>
        <button onClick={stopsong}>Stop</button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={vol}
          onChange={changeVolume}
        />
      </div>
    </div>
  );
}
