import React, { useState, useEffect } from "react";
import "./Pad.scss";
import { CSSTransition } from "react-transition-group";

export default function Pad({
  padId,
  keyCode,
  keyTrigger,
  audioSrc,
  updateDisplay,
  powerState,
  volumeLevel,
}) {
  const [fadeProp, setfadeProp] = useState(false);

  const playAudio = () => {
    // playAudio logic only runs when power is set to true
    if (powerState) {
      // Get html audio element with a selector
      const audio = document.getElementById(keyTrigger);
      audio.currentTime = 0;
      audio.play();
      audio.volume = volumeLevel / 100;
      // Update display text
      updateDisplay(padId);
      // Apply fade transition
      setfadeProp(true);
    }
  };

  const keyHandler = (e) => {
    if (e.keyCode === keyCode) {
      playAudio();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  return (
    <CSSTransition
      in={fadeProp}
      timeout={100}
      onEntered={() => setfadeProp(false)}
      exit={false}
      classNames="fade"
    >
      <div id={padId} className="drum-pad" onClick={playAudio}>
        <audio id={keyTrigger} className="clip" src={audioSrc}></audio>
        {keyTrigger}
      </div>
    </CSSTransition>
  );
}
