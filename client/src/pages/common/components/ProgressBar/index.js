import React from "react";
import LinearWithValueLabel from "./LinearProgressWithLabel"
import io from "socket.io-client";

const socket = io();

socket.on('message', message => {
  console.log(message);

})


export const ProgressBar = (props) => {
  return (
    <div>
      <LinearWithValueLabel progress={props.progress ? props.progress : 0}/>
    </div>
  );
};
