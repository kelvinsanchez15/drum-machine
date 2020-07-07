import React, { useState, useEffect } from "react";
import "./App.css";

const baseUrl = "https://s3.amazonaws.com/freecodecamp/drums/";
const bank = [
  {
    id: "Heater-1",
    keyTrigger: "Q",
    url: "Heater-1.mp3",
  },
  {
    id: "Heater-2",
    keyTrigger: "W",
    url: "Heater-2.mp3",
  },
  {
    id: "Heater-3",
    keyTrigger: "E",
    url: "Heater-3.mp3",
  },
  {
    id: "Heater-4",
    keyTrigger: "A",
    url: "Heater-4_1.mp3",
  },
  {
    id: "Clap",
    keyTrigger: "S",
    url: "Heater-6.mp3",
  },
  {
    id: "Open-HH",
    keyTrigger: "D",
    url: "Dsc_Oh.mp3",
  },
  {
    id: "Kick-n'-Hat",
    keyTrigger: "Z",
    url: "Kick_n_Hat.mp3",
  },
  {
    id: "Kick",
    keyTrigger: "X",
    url: "RP4_KICK_1.mp3",
  },
  {
    id: "Closed-HH",
    keyTrigger: "C",
    url: "Cev_H2.mp3",
  },
];

function Pad(props) {
  const playAudio = () => {
    let audio = document.getElementById(props.keyTrigger);
    audio.play();
    audio.currentTime = 0;
    props.onClick(props.padId);
  };

  const keyHandler = ({ key }) => {
    if (key === props.keyTrigger.toLowerCase()) {
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

export default function App() {
  const [display, setDisplay] = useState("HOLA");

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="drum-pads-container">
          {bank.map((item) => (
            <Pad
              key={item.id}
              padId={item.id}
              keyTrigger={item.keyTrigger}
              audioSrc={baseUrl + item.url}
              audioId={item.keyTrigger}
              onClick={(value) => setDisplay(value)}
            />
          ))}
          <h1>{display}</h1>
        </div>
      </div>
    </div>
  );
}
