import React from "react";
import { generateWord } from "../../../utils";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';

class Challenge extends React.Component {
  state = {
    index: 0,
    wordsToBeTyped: "",
    highlightedWord: "",
    wordOptions: {
      punctuation: false,
    },
    tracker: [],
  };

  componentDidMount() {
    this.handleNewChallenge();
    document.addEventListener("keydown", this.handleCorrectKeyDown);
  }

  handleNewChallenge = () => {
    let options;
    const { wordCount, minChar, maxChar } = this.props;
    options = { wordCount, minChar, maxChar, ...this.state.wordOptions };
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
        <Typography>
          <Box fontFamily="Monospace" fontSize="h5.fontSize">
            {beginning}
            <span style={{ borderBottom: "2px solid #0099ff", whiteSpace: "break-spaces" }}>{highlighted}</span>
            {end}
          </Box>
        </Typography>
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
    console.log(char);

    if (typedChar === "Shift") return;

    if (typedChar === char) {
      this.setState({
        tracker: [...this.state.tracker, { char, correct: true }],
      });
    } else if (typedChar !== char && typedChar !== "Backspace") {
      this.setState({
        tracker: [...this.state.tracker, { char, correct: false }],
      });
    } else {
      this.setState({
        tracker: [...this.state.tracker].slice(
          0,
          this.state.tracker.length - 1
        ),
      });
    }
    let highlighted;
    let end = "";
    if (e.key === "Backspace") {
      if (this.state.index === 0) return;
      // beginning = this.state.wordsToBeTyped.slice(0, this.state.index - 1);
      highlighted = this.state.wordsToBeTyped[this.state.index - 1];
      if (this.state.index !== this.state.wordsToBeTyped.length) {
        end = this.state.wordsToBeTyped
          .slice(this.state.index - 1, this.state.wordsToBeTyped.length)
          .substring(1);
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
      if (this.state.index + 1 === this.state.wordsToBeTyped.length) {
        console.log("refresh");
        // this.componentDidUpdate() -> could use?
        this.handleRefreshWords();
        return;
      }
      this.setState({ index: this.state.index + 1 });
    }

    const newHighlightedWord = (

      <Typography>
        <Box fontFamily="Monospace" fontSize="h5.fontSize">
          {Object.values(this.state.tracker).map((i) => {
            return (
              <span style={{ backgroundColor: i.correct ? "#a5d6a7" : "#ef9a9a" }}>
              {i.char}
            </span>
            );
          })}
          <span style={{ borderBottom: "2px solid #0099ff", whiteSpace: "break-spaces"  }}>{highlighted}</span>
          {end}
        </Box>
      </Typography>
    );
    this.setState({ highlightedWord: newHighlightedWord });
  };

  handleAddOption = () => {
    // const option = e.target.dataset.value;
    // switch (option) {
    //   case "punctuation":
        this.setState(({ wordOptions: { punctuation } }) => {
          return { wordOptions: { punctuation: !punctuation } };
        });
    //     break;
    //   default:
    //     break;
    // }
    this.forceUpdate(this.handleRefreshWords);
  };

  handleRefreshWords = () => {
    console.log("refresh Conf");
    // Need to figure out how to set the index back to 0. Maybe a problem with asynchronisity.
    this.setState({
      index: 0,
      wordsToBeTyped: "",
      highlightedWord: "",
      tracker: [],
    });

    this.handleNewChallenge();
  };

  render() {

    return (
      <div>
        {this.state.highlightedWord}
        <ToggleButton
          selected={this.state.wordOptions.punctuation}
          style={{
            position: "fixed",
            top: 100,
            right: 96,
          }}
          onClick={this.handleAddOption}
        >
          Punctuation
        </ToggleButton>
      </div>
    );
  }
}

export default Challenge;
