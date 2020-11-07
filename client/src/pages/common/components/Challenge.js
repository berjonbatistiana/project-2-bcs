import React from "react";
import { generateWord } from "../../../utils";

const tracker = {};

class Challenge extends React.Component {
    state = {
        index: 0,
        wordsToBeTyped: "",
        highlightedWord: "",
    };

    componentDidMount() {
        this.handleNewChallenge();
        document.addEventListener("keydown", this.handleCorrectKeyDown);
    }

    handleNewChallenge = () => {
        let options;
        const { wordCount, minChar, maxChar } = this.props;
        options = { wordCount, minChar, maxChar };
        generateWord(options).then((res) => {
            console.log(res);
            const newWordsToBeTyped = res.join(" ");
            const beginning = newWordsToBeTyped.slice(0, this.state.index);
            const highlighted = newWordsToBeTyped[this.state.index];
            const end = newWordsToBeTyped.slice(
              this.state.index + 1,
              newWordsToBeTyped.length
            );

            const newHighlightedWord = (
              <div>
                  {beginning}
                  <span style={{ backgroundColor: "grey" }}>{highlighted}</span>
                  {end}
              </div>
            );
            this.setState({
                wordsToBeTyped: newWordsToBeTyped,
                highlightedWord: newHighlightedWord,
            });
        });
    };

    handleCorrectKeyDown = (e) => {
        const typedChar = e.key;
        const char = this.state.wordsToBeTyped[this.state.index];
        if (typedChar === char) {
            tracker[this.state.index] = {char, correct: true,};
        }
        if (typedChar !== char) {
            tracker[this.state.index] = {char, correct: false,};
        }
        console.log(tracker);
        let beginning, highlighted;
        let end = "";
        if (e.key === "Backspace") {
            // beginning = this.state.wordsToBeTyped.slice(0, this.state.index - 1);
            delete tracker[this.state.index];
            highlighted = this.state.wordsToBeTyped[this.state.index - 1];
            if (this.state.index !== this.state.wordsToBeTyped.length) {
                end = this.state.wordsToBeTyped.slice(
                  this.state.index - 1,
                  this.state.wordsToBeTyped.length
                );
            }
            this.setState({ index: this.state.index - 1 });
        } else {
            // beginning = this.state.wordsToBeTyped.slice(0, this.state.index + 1);
            highlighted = this.state.wordsToBeTyped[this.state.index + 1];
            if (this.state.index !== this.state.wordsToBeTyped.length) {
                end = this.state.wordsToBeTyped.slice(
                  this.state.index + 2,
                  this.state.wordsToBeTyped.length
                );
            }
            this.setState({ index: this.state.index + 1 });
        }
        const newHighlightedWord = (
          <div>
              {Object.values(tracker).map(i => { return ( <span style={{backgroundColor: i.correct ? "green" : "red"}}>{i.char}</span> ) })}
              <span style={{ backgroundColor: "grey" }}>{highlighted}</span>
              {end}
          </div>
        );
        this.setState({ highlightedWord: newHighlightedWord });
    };

    render() {
        const style = {
            fontSize: 30,
            textAlign: "center",
        };
        return (
          <div style={style}>
              <h1>Typing Challenge</h1>
              {this.state.highlightedWord}
          </div>
        );
    }
}

export default Challenge;
