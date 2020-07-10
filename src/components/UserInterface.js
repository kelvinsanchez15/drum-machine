import React from "react";
import "./UserInterface.scss";
import { FaPowerOff, FaDrum } from "react-icons/fa";

export default function UserInterface(props) {
  return (
    <>
      <div id="title">
        <div>DRUM MACHINE</div>
        <div className="title-icon">
          <FaDrum />
        </div>
      </div>
      <div id="display">
        <div id="display-text">{props.display}</div>
        <div id="status">
          <span id="status-volume">
            VOL : {props.powerState ? props.volumeLevel : ""}
          </span>
          <span>{props.powerState ? "ON" : "OFF"}</span>
        </div>
      </div>
      <div id="controls">
        <div className="controls-volume">
          <div className="slider-wrapper">
            <input
              id="volume"
              type="range"
              orient="vertical"
              defaultValue={props.volumeLevel}
              onChange={props.onVolumeChange}
            ></input>
          </div>
          <div>VOL</div>
        </div>
        <div className="controls-power">
          <div className="btn-wrapper" onClick={props.onPowerClick}>
            <div className={props.powerState ? "pwr-btn-on" : "pwr-btn-off"}>
              <FaPowerOff />
            </div>
          </div>
          <div>POWER</div>
        </div>
      </div>
    </>
  );
}
