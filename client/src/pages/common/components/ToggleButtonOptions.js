import React, {Component} from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {Typography} from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";


export class ToggleButtonOptions extends Component {

  render() {
    return (
      <ToggleButtonGroup>
        <ToggleButton
          selected={this.props.options.words50}
          onMouseDown={this.props.handleAddOption}
          data-value={"50"}
          value="50"
          disabled={this.props.options.quotes}
        >
          <Typography data-value={"50"}>50</Typography>
        </ToggleButton>
        <ToggleButton
          selected={this.props.options.words100}
          onMouseDown={this.props.handleAddOption}
          data-value={"100"}
          value="100"
          disabled={this.props.options.quotes}
        >
          <Typography data-value={"100"}>100</Typography>
        </ToggleButton>
        <ToggleButton
          selected={this.props.options.punctuation}
          onMouseDown={this.props.handleAddOption}
          data-value={"punctuation"}
          value="Punctuation"
        >
          <Typography data-value={"punctuation"}>Punctuation</Typography>
        </ToggleButton>

        <ToggleButton
          selected={this.props.options.quotes}
          onMouseDown={this.props.handleAddOption}
          data-value={"quotes"}
          value="Quote"
        >
          <Typography data-value={"quotes"}>Quote</Typography>
        </ToggleButton>
        <ToggleButton
          selected={this.props.options.seconds30}
          onMouseDown={this.props.handleAddOption}
          data-value={"thirtyS"}
          value="Timed: 30S"
        >
          <Typography data-value={"thirtyS"} value="Timed: 30S">
            Timed: 30s
          </Typography>
        </ToggleButton>
        <ToggleButton
          selected={this.props.options.seconds60}
          onMouseDown={this.props.handleAddOption}
          data-value={"sixtyS"}
          value="Timed: 60S"
        >
          <Typography data-value={"sixtyS"} value="Timed: 60S">
            Timed: 60s
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }
}
