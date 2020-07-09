import React, { useEffect } from "react";
import "./Pad.scss";

export default function Pad(props) {
  const playAudio = () => {
    // playAudio logic only runs when power is set to true
    if (props.powerState) {
      // Get html audio element with a selector
      const audio = document.getElementById(props.keyTrigger);
      audio.currentTime = 0;
      audio.play();
      audio.volume = props.volumeLevel / 100;
      // Update display text
      props.updateDisplay(props.padId);
    }
  };

  const keyHandler = ({ keyCode }) => {
    if (keyCode === props.keyCode) {
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
    <div id={props.padId} className="drum-pad" onClick={playAudio}>
      <audio id={props.audioId} className="clip" src={props.audioSrc}></audio>
      {props.keyTrigger}
    </div>
  );
}
