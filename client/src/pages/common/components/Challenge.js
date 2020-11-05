import React from "react";
import Container from "@material-ui/core/Container";

class Challenge extends React.Component {
  state = {
    index: 0,
    word: "Challenge",
    highlightedWord: (
      <div>
        <span style={{ backgroundColor: "grey" }}>C</span>hallenge
      </div>
    ),
  };

  handleCorrectKeyDown = (e) => {
    if (e.key !== this.state.word[this.state.index]) {
      return;
    }
    let beginning = "";
    let highlighted = "";
    let end = "";
    beginning = this.state.word.slice(0, this.state.index + 1);
    highlighted = this.state.word[this.state.index + 1];
    if (this.state.index !== this.state.word.length) {
      end = this.state.word.slice(this.state.index + 2, this.state.word.length);
    }
    const newHighlightedWord = (
      <div>
        {beginning}
        <span style={{ backgroundColor: "grey" }}>{highlighted}</span>
        {end}
      </div>
    );
    this.setState({ highlightedWord: newHighlightedWord });
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    return (
      <div tabIndex="0" onKeyDown={this.handleCorrectKeyDown}>
        {this.state.highlightedWord}
      </div>
    );
  }
}

export default Challenge;
