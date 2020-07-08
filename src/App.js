import React, { useState } from "react";
import Pad from "./components/Pad.js";
import "./App.css";

const baseUrl = "https://s3.amazonaws.com/freecodecamp/drums/";
const bank = [
  {
    id: "Heater-1",
    keyCode: 81,
    keyTrigger: "Q",
    url: "Heater-1.mp3",
  },
  {
    id: "Heater-2",
    keyCode: 87,
    keyTrigger: "W",
    url: "Heater-2.mp3",
  },
  {
    id: "Heater-3",
    keyCode: 69,
    keyTrigger: "E",
    url: "Heater-3.mp3",
  },
  {
    id: "Heater-4",
    keyCode: 65,
    keyTrigger: "A",
    url: "Heater-4_1.mp3",
  },
  {
    id: "Clap",
    keyCode: 83,
    keyTrigger: "S",
    url: "Heater-6.mp3",
  },
  {
    id: "Open-HH",
    keyCode: 68,
    keyTrigger: "D",
    url: "Dsc_Oh.mp3",
  },
  {
    id: "Kick-n'-Hat",
    keyCode: 90,
    keyTrigger: "Z",
    url: "Kick_n_Hat.mp3",
  },
  {
    id: "Kick",
    keyCode: 88,
    keyTrigger: "X",
    url: "RP4_KICK_1.mp3",
  },
  {
    id: "Closed-HH",
    keyCode: 67,
    keyTrigger: "C",
    url: "Cev_H2.mp3",
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
              audioSrc={baseUrl + item.url}
              audioId={item.keyTrigger}
              onClick={(value) => setDisplay(value)}
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
