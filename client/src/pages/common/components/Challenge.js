import React from "react";
import {generateWord, getWPM} from "../../../utils";
import {Box, Grid, Typography} from "@material-ui/core";

class Challenge extends React.Component {
    state = {
        index: 0,
        wordsToBeTyped: "",
        highlightedWord: "",
        wordOptions: {
            punctuation: false,
        },
        tracker: [],
        startTime: '',
        lastWPM: 0,
        WPM: 0,
        accuracyPercent: 0,
        correctNum: 0,
        totalCharSeen: 0
    };

    componentDidMount() {
        this.handleNewChallenge();
        document.addEventListener("keydown", this.handleCorrectKeyDown);
    }

    handleNewChallenge = () => {
        let options;
        const {wordCount, minChar, maxChar} = this.props;
        options = {wordCount, minChar, maxChar, ...this.state.wordOptions};
        generateWord(options).then((res) => {
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
                    <span style={{backgroundColor: "grey"}}>{highlighted}</span>
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


        if (typedChar === "Shift") return;

        if (this.state.index === 0 && this.state.startTime === '') {
            this.state.startTime = new Date();
        } else {
            this.handleWPMUpdater();
        }

        if (typedChar === char) {
            this.setState({
                tracker: [...this.state.tracker, {char, correct: true}],
            });
            this.handleAccuracyUpdater()
        } else if (typedChar !== char && typedChar !== "Backspace") {
            this.setState({
                tracker: [...this.state.tracker, {char, correct: false}],
            });
            this.handleAccuracyUpdater()
        } else {
            this.setState({
                tracker: [...this.state.tracker].slice(
                    0,
                    this.state.tracker.length - 1
                ),
            });
        }
        let beginning, highlighted;
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
            this.setState({
                index: this.state.index - 1,
            });
            this.handleAccuracyUpdater()
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
            this.setState({index: this.state.index + 1});
        }

        const newHighlightedWord = (
            <div>
                {Object.values(this.state.tracker).map((i) => {
                    return (
                        <span style={{backgroundColor: i.correct ? "green" : "red"}}>
              {i.char}
            </span>
                    );
                })}
                <span style={{backgroundColor: "grey"}}>{highlighted}</span>
                {end}
            </div>
        );
        this.setState({highlightedWord: newHighlightedWord});
    };

    handleAddOption = (e) => {
        const option = e.target.dataset.value;
        switch (option) {
            case "punctuation":
                this.setState(({wordOptions: {punctuation}}) => {
                    return {wordOptions: {punctuation: !punctuation}};
                });
                break;
            default:
                break;
        }
        this.forceUpdate(this.handleRefreshWords);
    };

    // function is called on a key down event for correct characters, wrong ones, and a backspace.
    // uses the tracker in state to determine the % of accurate numbers.
    // if the sequence is refreshed multiple times in a session, the totals will need to be saved
    // and added to following.
    handleAccuracyUpdater = () => {
        // THIS VERSION WORKS AND IS FAST BUT RESETS AFTER EACH SEQUENCE REFRESH.
        let correctNum = 0;
        let totalCharSeen = this.state.tracker.length;
        for (let i = 0; i < this.state.tracker.length; i++) {
            if (this.state.tracker[i].correct === true) {
                correctNum++
            }
        }
        console.log(correctNum, totalCharSeen)
        const accuracyPercent = Math.round(correctNum / totalCharSeen * 100)
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

    handleRefreshWords = () => {
        // Need to figure out how to set the index back to 0. Maybe a problem with asynchronisity.
        this.setState({
            index: 0,
            wordsToBeTyped: "",
            highlightedWord: "",
            tracker: [],
            startTime: '',
            WPM: 0
        });
        this.handleNewChallenge();
    };

    handleWPMUpdater() {
        const time = (new Date().getTime() - this.state.startTime.getTime()) / 1000 / 60;
        const trackedLetters = this.state.tracker.filter(el => el.correct);
        const correct = trackedLetters.length;
        const miss = this.state.tracker.length - correct;
        this.setState({WPM: getWPM(correct, miss, time)});
    }

    render() {
        const style = {
            fontSize: 30,
            textAlign: "center",
            margin: 100,
        };

        return (
            <div style={style}>
                <Typography component="h1" variant="h2">
                    Typing Challenge
                </Typography>
                <div style={{margin: 70}}>{this.state.highlightedWord}</div>
                <div>
                    <Grid item container xs={12}>
                        <Grid item xs={12} md={6}>
                            <Box m={3} style={{textAlign: "center"}}>
                                <Typography component="h5" variant="h5">
                                    Accuracy
                                </Typography>
                                {this.state.accuracyPercent}%
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box m={3} style={{textAlign: "center"}}>
                                <Typography component="h5" variant="h5">
                                    Words Per Minute
                                </Typography>
                                {this.state.WPM}
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Box mt={6}>
                        <Typography
                            style={{
                                color: this.state.wordOptions.punctuation
                                    ? "black"
                                    : "lightgray",
                            }}
                            data-value={"punctuation"}
                            onClick={this.handleAddOption}
                        >
                            Punctuation
                        </Typography>
                    </Box>
                </div>
            </div>
        );
    }
}

export default Challenge;
