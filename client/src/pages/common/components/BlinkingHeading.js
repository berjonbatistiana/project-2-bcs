import React, { useEffect } from 'react';
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

export const BlinkingHeading = () => {
  const cursorBlink = () => {
    let cursor;
    setInterval(() => {
      if (cursor && document.getElementById('cursor')) {
        document.getElementById('cursor').style.opacity = 0.1;
        cursor = false;
      } else if (!cursor && document.getElementById('cursor')) {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
      } else {
        return;
      }
    }, 500)
  }
  useEffect(() => {
    let i = -1;
    const txt = 'Hype Type!';
    const speed = 60;
    function typeWriter() {
      if (i < txt.length && document.getElementById("title")) {
        document.getElementById("title").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
    setTimeout(cursorBlink)
  }, []);

   return (
      <Typography variant="h5" component="h1">
        <Box fontSize="h6.fontSize">
          <span id="title"></span><span style={{ color: '#0099ff'}} id="cursor">︳</span>
          <EmojiEmotionsIcon style={{ color: '#0099ff', float: "right"}}/>
        </Box>
      </Typography>
    )
}
