import React from "react";
import {generateWord} from "../../../utils";
import {Box, Typography} from "@material-ui/core";

class Challenge extends React.Component {
    state = {
        index: 0,
        wordsToBeTyped: "",
        highlightedWord: "",
        wordOptions: {
            punctuation: false
        }
    };

    componentDidMount() {
        this.handleNewChallenge();
        document.addEventListener("keydown", this.handleCorrectKeyDown);
    }

    handleNewChallenge = () => {
        let options;
        const {wordCount, minChar, maxChar} = this.props;
        options = {wordCount, minChar, maxChar, ...this.state.wordOptions};
        console.log(options)
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
        if (e.key !== this.state.wordsToBeTyped[this.state.index]) {
            return;
        }
        const beginning = this.state.wordsToBeTyped.slice(0, this.state.index + 1);
        const highlighted = this.state.wordsToBeTyped[this.state.index + 1];
        let end = "";
        if (this.state.index !== this.state.wordsToBeTyped.length) {
            end = this.state.wordsToBeTyped.slice(
                this.state.index + 2,
                this.state.wordsToBeTyped.length
            );
        }
        const newHighlightedWord = (
            <div>
                {beginning}
                <span style={{backgroundColor: "grey"}}>{highlighted}</span>
                {end}
            </div>
        );
        this.setState({highlightedWord: newHighlightedWord});
        this.setState({index: this.state.index + 1});
    };

    handleAddOption = (e) => {
        const option = e.target.dataset.value;
        switch (option) {
            case "punctuation":
                this.setState(({wordOptions: {punctuation}}) => {
                    return {wordOptions: {punctuation: !punctuation}};
                })
                break;
            default:
                break;
        }
        this.forceUpdate(this.handleNewChallenge)
    }

    render() {
        const style = {
            fontSize: 30,
            textAlign: "center",
        };


        return (
            <div style={style}>
                <h1>Typing Challenge</h1>
                {this.state.highlightedWord}
                <div>
                    <Box mt={6}>
                        <Typography style={{color: this.state.wordOptions.punctuation? "black":"lightgray"}}
                                    data-value={"punctuation"}
                                    onClick={this.handleAddOption}>
                            Punctuation
                        </Typography>
                    </Box>
                </div>
            </div>
        );
    }
}

export default Challenge;
