import React from "react";
import { generateWord } from "../../../utils";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { ChallengeContainer } from "../components";

class Challenge extends React.Component {
  state = {
    index: 0,
    wordsToBeTyped: "",
    highlightedWord: "",
    wordOptions: {
      punctuation: false,
    },
    tracker: [],
    WPM: 0,
    accuracyPercent: 0,
    correctNum: 0,
    totalCharSeen: 0,
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
      this.handleAccuracyUpdater();
    } else if (typedChar !== char && typedChar !== "Backspace") {
      this.setState({
        tracker: [...this.state.tracker, { char, correct: false }],
      });
      this.handleAccuracyUpdater();
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
      this.handleAccuracyUpdater();
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
          <span style={{ borderBottom: "2px solid #0099ff" }}>{highlighted}</span>
          {end}
        </Box>
      </Typography>
    );
    this.setState({ highlightedWord: newHighlightedWord });
  };

  handleAccuracyUpdater = () => {
    // THIS VERSION WORKS AND IS FAST BUT RESETS AFTER EACH SEQUENCE REFRESH.
    let correctNum = 0;
    let totalCharSeen = this.state.tracker.length;
    for(let i=0;i<this.state.tracker.length;i++){
      if(this.state.tracker[i].correct === true){
        correctNum++
      }
    }
    console.log(correctNum, totalCharSeen)
    const accuracyPercent = Math.round(correctNum/totalCharSeen*100)
    this.setState({
      accuracyPercent: accuracyPercent,
    });

    // THIS VERSION WORKS BUT IS SLOW BC ALWAYS UPDATING STATE. CARRIES THE ACCURACY
    // VALUES INTO THE SEQUENCE REFRESHES || BEST SOLUTION MAY BE TO AVERAGE %'s AFTERWARDS
    // OR TO CALCULATE FINAL % AFTER TIME RUNS OUT

    // for(let i=0;i<this.state.tracker.length;i++){
    //   if(this.state.tracker[i].correct === true){
    //     this.setState({
    //       correctNum: this.state.correctNum+1
    //     });
    //   }
    //   this.setState({
    //     totalCharSeen: this.state.totalCharSeen+1
    //   });
    // }
    // const accuracyPercent = Math.round(this.state.correctNum/this.state.totalCharSeen*100)
    // console.log(this.state.correctNum,this.state.totalCharSeen,accuracyPercent)
    // this.setState({
    //   accuracyPercent: accuracyPercent,
    // });
  }

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

  renderToggleButton = () => {
    return (
      <ToggleButton
        selected={this.state.wordOptions.punctuation}
        onClick={this.handleAddOption}
      >
        Punctuation
      </ToggleButton>
    )
  }

  render() {

    return (
      <div>
        <ChallengeContainer
          challenge={this.state.highlightedWord}
          toggleButton={this.renderToggleButton}
          accuracy={this.state.accuracyPercent}
          wpm={this.state.WPM}
        />
      </div>
    );
  }
}

export default Challenge;
