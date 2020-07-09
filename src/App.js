import React, { useState } from "react";
import Pad from "./components/Pad.js";
import "./App.scss";
// Drumkit library imports
import openHH from "./sounds/Open-HH.mp3";
import crashCymbal from "./sounds/Crash-Cymbal.mp3";
import rideCymbal from "./sounds/Ride-Cymbal.mp3";
import highTom from "./sounds/High-Tom.mp3";
import midTom from "./sounds/Mid-Tom.mp3";
import lowTom from "./sounds/Low-Tom.mp3";
import closedHH from "./sounds/Closed-HH.mp3";
import kick from "./sounds/Kick.mp3";
import snare from "./sounds/Snare.mp3";

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
        <div id="ui-container">
          <div id="title">Drum machine</div>
          <div id="display">
            {display}
            <div className="status">
              <span>{power ? "ON" : "OFF"}</span>
              <span>vol: {volume}</span>
            </div>
          </div>
          <div id="controls">
            <div className="controls-volume">
              <div className="slider-wrapper">
                <input
                  id="volume"
                  type="range"
                  orient="vertical"
                  defaultValue={volume}
                  onChange={changeHangler}
                ></input>
              </div>
              <div>Vol</div>
            </div>
            <div className="controls-power">
              <div className="btn" onClick={() => setPower(!power)}>
                <div className="btn-inner"></div>
              </div>
              <div>Power</div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}
