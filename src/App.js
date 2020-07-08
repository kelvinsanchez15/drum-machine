import React, { useState } from "react";
import Pad from "./components/Pad.js";
import "./App.css";
// Drumkit library imports
import openHH from "./sounds/Open-HH.wav";
import crashCymbal from "./sounds/Crash-Cymbal.wav";
import rideCymbal from "./sounds/Ride-Cymbal.wav";
import highTom from "./sounds/High-Tom.wav";
import midTom from "./sounds/Mid-Tom.wav";
import lowTom from "./sounds/Low-Tom.wav";
import closedHH from "./sounds/Closed-HH.wav";
import kick from "./sounds/Kick.wav";
import snare from "./sounds/Snare.wav";

const bank = [
  {
    id: "Open-HH",
    keyCode: 81,
    keyTrigger: "Q",
    src: openHH,
  },
  {
    id: "Crash-Cymbal",
    keyCode: 87,
    keyTrigger: "W",
    src: crashCymbal,
  },
  {
    id: "Ride-Cymbal",
    keyCode: 69,
    keyTrigger: "E",
    src: rideCymbal,
  },
  {
    id: "High-Tom",
    keyCode: 65,
    keyTrigger: "A",
    src: highTom,
  },
  {
    id: "Mid-Tom",
    keyCode: 83,
    keyTrigger: "S",
    src: midTom,
  },
  {
    id: "Low-Tom",
    keyCode: 68,
    keyTrigger: "D",
    src: lowTom,
  },
  {
    id: "Closed-HH",
    keyCode: 90,
    keyTrigger: "Z",
    src: closedHH,
  },
  {
    id: "Kick",
    keyCode: 88,
    keyTrigger: "X",
    src: kick,
  },
  {
    id: "Snare",
    keyCode: 67,
    keyTrigger: "C",
    src: snare,
  },
];

export default function App() {
  const [display, setDisplay] = useState("Play");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(75);

  const changeHangler = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="drum-pads-container">
          {bank.map((item) => (
            <Pad
              key={item.id}
              padId={item.id}
              keyCode={item.keyCode}
              keyTrigger={item.keyTrigger}
              audioSrc={item.src}
              audioId={item.keyTrigger}
              updateDisplay={(value) => setDisplay(value)}
              powerControl={power}
              volumeControl={volume}
            />
          ))}
        </div>
        <div id="ui-container">
          <div id="title">Drum machine</div>
          <div id="display">
            {display}
            <div className="status">
              <span>{power ? "ON" : "OFF"}</span>
              <span>vol: {volume}</span>
            </div>
          </div>
          <div id="inputs">
            <div onClick={() => setPower(!power)}>Pwr Btn</div>
            <input
              id="volume"
              type="range"
              defaultValue={volume}
              onChange={changeHangler}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
