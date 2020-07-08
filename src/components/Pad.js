import React, { useEffect } from "react";

export default function Pad(props) {
  const playAudio = () => {
    if (props.powerControl) {
      let audio = document.getElementById(props.keyTrigger);
      audio.play();
      audio.currentTime = 0;
      audio.volume = props.volumeControl / 100;
      props.onClick(props.padId);
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
