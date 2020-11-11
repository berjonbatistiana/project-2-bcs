import React from "react";
import {generateQuote, generateWord, getWPM} from "../../../utils";
import {Box, Typography} from "@material-ui/core";
import {ChallengeContainer} from "../components";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

class Challenge extends React.Component {
    state = {
        index: 0,
        wordsToBeTyped: "",
        highlightedWord: "",
        wordOptions: {
            punctuation: false,
            quotes: false,
            seconds30: true,
            seconds60: false
        },
        tracker: [],
        startTime: '',
        lastWPM: 0,
        WPM: 0,
        accuracyPercent: 0,
        correctNum: 0,
        totalCharSeen: 0,
        timeLeft: 30,
        timer: null
    };

    componentDidMount() {
        this.handleNewChallenge();
        document.addEventListener("keydown", this.handleCorrectKeyDown);
    }

    countDown = () => {
        if (this.state.timeLeft > 0){
            this.state.timer = setInterval(this.handleTimer, 1000);
        }
    }

    handleTimer = () => {
        let seconds = this.state.timeLeft - 1;
        this.setState({timeLeft: seconds});
        if (seconds === 0){
            clearInterval(this.state.timer);
            // run end of challenge results
            this.handleRefreshWords();
        }
    }

    handleNewChallenge = () => {
        const {wordCount, minChar, maxChar} = this.props;
        const options = {wordCount, minChar, maxChar, ...this.state.wordOptions};
        let newWordsToBeTyped;

        if (options.quotes) {
            generateQuote().then((res) => {
                newWordsToBeTyped = res;
                this.handleNewWords(newWordsToBeTyped);
            })
        } else {

            generateWord(options).then((res) => {
                newWordsToBeTyped = res.join(" ");
                this.handleNewWords(newWordsToBeTyped);
            });
        }
    };

    handleNewWords(newWordsToBeTyped) {
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
                    <span
                        style={{borderBottom: "2px solid #0099ff", whiteSpace: "break-spaces"}}>{highlighted}</span>
                    {end}
                </Box>
            </Typography>
        );
        this.setState({
            wordsToBeTyped: newWordsToBeTyped,
            highlightedWord: newHighlightedWord,
        });
    }

    handleCorrectKeyDown = (e) => {
        const typedChar = e.key;
        const char = this.state.wordsToBeTyped[this.state.index];


        if (typedChar === "Shift") return;

        if (this.state.index === 0 && this.state.startTime === '') {
            this.state.startTime = new Date();
            if (this.state.wordOptions.seconds30 || this.state.wordOptions.seconds60){
                this.countDown();
            }
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
            <Typography>
                <Box fontFamily="Monospace" fontSize="h5.fontSize">
                    {Object.values(this.state.tracker).map((i) => {
                        return (
                            <span style={{backgroundColor: i.correct ? "#a5d6a7" : "#ef9a9a"}}>
              {i.char}
            </span>
                        );
                    })}
                    <span style={{borderBottom: "2px solid #0099ff", whiteSpace: "break-spaces"}}>{highlighted}</span>
                    {end}
                </Box>
            </Typography>
        );
        this.setState({highlightedWord: newHighlightedWord});
    };

    handleAddOption = (e) => {

        const newWordOptions = this.state.wordOptions;
        switch (e.target.dataset.value) {
            case 'punctuation':
                this.setState((prevState) => {
                    newWordOptions.punctuation = !prevState.wordOptions.punctuation;
                    newWordOptions.quotes = false;
                    return {newWordOptions};
                });
                break;
            case 'quotes':
                this.setState((prevState) => {
                    newWordOptions.quotes = !prevState.wordOptions.quotes;
                    newWordOptions.punctuation = false;
                    return {newWordOptions};
                });
                break;
            case 'thirtyS':
                this.setState((prevState) => {
                    newWordOptions.seconds30 = !prevState.wordOptions.seconds30;
                    newWordOptions.seconds60 = false;
                    if (!newWordOptions.seconds30)
                        clearInterval(this.state.timer)
                    return {newWordOptions, timeLeft: 30};
                })
                break;
            case 'sixtyS':
                this.setState((prevState) => {
                    newWordOptions.seconds60 = !prevState.wordOptions.seconds60;
                    newWordOptions.seconds30 = false;
                    if (!newWordOptions.seconds60)
                        clearInterval(this.state.timer)

                    return {newWordOptions, timeLeft: 60};
                })
                break;
            default:
                break;
        }


        this.forceUpdate(this.handleRefreshWords);

        console.log(this.state)
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
        this.setState(prevState => ({
            index: 0,
            wordsToBeTyped: "",
            highlightedWord: "",
            tracker: [],
            startTime: '',
            WPM: 0,
            timeLeft: prevState.wordOptions.seconds30? 30 : prevState.wordOptions.seconds60? 60 : 0
        }));
        clearInterval(this.state.timer);
        this.handleNewChallenge();
    };

    handleWPMUpdater() {
        const time = (new Date().getTime() - this.state.startTime.getTime()) / 1000 / 60;
        const trackedLetters = this.state.tracker.filter(el => el.correct);
        const correct = trackedLetters.length;
        const miss = this.state.tracker.length - correct;
        this.setState({WPM: getWPM(correct, miss, time)});
    }


    renderToggleButton = () => {
        return (
            <ToggleButtonGroup>
                <ToggleButton
                    selected={this.state.wordOptions.punctuation}
                    onMouseDown={this.handleAddOption}
                    data-value={'punctuation'}
                >
                    <Typography data-value={'punctuation'}>
                        Punctuation
                    </Typography>
                </ToggleButton>

                <ToggleButton
                    selected={this.state.wordOptions.quotes}
                    onMouseDown={this.handleAddOption}
                    data-value={'quotes'}
                >
                    <Typography data-value={"quotes"}>
                        Quote
                    </Typography>
                </ToggleButton>
                <ToggleButton
                    selected={this.state.wordOptions.seconds30}
                    onMouseDown={this.handleAddOption}
                    data-value={'thirtyS'}
                >
                    <Typography
                        data-value={'thirtyS'}>
                        Timed: 30s
                    </Typography>
                </ToggleButton>
                <ToggleButton
                    selected={this.state.wordOptions.seconds60}
                    onMouseDown={this.handleAddOption}
                    data-value={'sixtyS'}
                >
                    <Typography
                        data-value={'sixtyS'}>
                        Timed: 60s
                    </Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        )
    }

    render() {
        return (
            <ChallengeContainer
                challenge={this.state.highlightedWord}
                accuracy={this.state.accuracyPercent}
                wpm={this.state.WPM}
                timeLeft={this.state.timeLeft}
                toggleButton={this.renderToggleButton}
                selectedKey={this.state.wordsToBeTyped[this.state.index]}
            />
        );
    }
}

export default Challenge;
