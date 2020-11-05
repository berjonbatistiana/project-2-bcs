import React, { useEffect } from 'react';
import {Typography} from "@material-ui/core";

export const BlinkingHeading = () => {
  useEffect(() => {
    let cursor = true;
    const speed = 400;
    setInterval(() => {
      if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
      }else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
      }
    }, speed);
  }, []);
  return (
    <Typography variant="h1" component="h1">
      Hype Type <span id="cursor">|</span>
    </Typography>
  )
}
