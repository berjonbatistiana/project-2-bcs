import React from "react";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import ProgressBar from "../ProgressBar";
import {WordsContainer} from "../WordsContainer";

export const ArenaContainer = (props) => {

  props = {title: "Typing Arena", ...props};

  return (
    <>
      <Box>
        <Card
          elevation={0}
          style={{border: "1px solid #e0e0e0", borderRadius: 25}}
        >
          <WordsContainer
            {...props}
          />
          <Box m={2} display="flex" alignItems="center">
            <Box width="100%">
              <ProgressBar progress={props.progress ? props.progress : 0}/>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};
