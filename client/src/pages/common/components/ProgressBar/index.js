import React, {Component} from "react";
import LinearWithValueLabel from "./LinearProgressWithLabel"

export class ProgressBar extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <LinearWithValueLabel progress={this.props.progress? this.props.progress : 0}/>
      </div>
    );
  }
}
