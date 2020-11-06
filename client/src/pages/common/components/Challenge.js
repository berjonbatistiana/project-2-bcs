import React from "react";
import Container from "@material-ui/core/Container";
import axios from "axios";

class Challenge extends React.Component {
  state = {
    index: 0,
    wordsToBeTyped: "",
    highlightedWord: (
      <div>
        <span style={{ backgroundColor: "grey" }}>C</span>hallenge
      </div>
    ),
  };

  componentDidMount() {
    this.handleGenerateWords(this.props.wordCount, this.props.minChar).then(res => {
      this.setState({
        wordsToBeTyped: res.join(' ')
      })
    })

  }

   handleGenerateWords = async (wordCount, minChar) => {
    try {
      const params = {params: {wordCount, minChar}};
      const res = await axios.get('/api/words', params);
      console.log(res);
      return res.data;
    } catch (e) {
      throw new Error(e)
    }
  }

  handleCorrectKeyDown = (e) => {
    if (e.key !== this.state.wordsToBeTyped[this.state.index]) {
      return;
    }
    let beginning = "";
    let highlighted = "";
    let end = "";
    beginning = this.state.wordsToBeTyped.slice(0, this.state.index + 1);
    highlighted = this.state.wordsToBeTyped[this.state.index + 1];
    if (this.state.index !== this.state.wordsToBeTyped.length) {
      end = this.state.wordsToBeTyped.slice(this.state.index + 2, this.state.wordsToBeTyped.length);
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
