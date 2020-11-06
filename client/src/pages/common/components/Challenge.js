import React from "react";
import {generateWord} from '../../../utils'

class Challenge extends React.Component {
    state = {
        index: 0,
        wordsToBeTyped: '',
        highlightedWord: ''
    };

    componentDidMount() {
        this.handleNewChallenge();
    }

    handleNewChallenge = () => {
        generateWord(this.props.wordCount, this.props.minChar).then(res => {

            const newWordsToBeTyped = res.join(' ');
            const beginning = newWordsToBeTyped.slice(0, this.state.index);
            const highlighted = newWordsToBeTyped[this.state.index];
            const end = newWordsToBeTyped.slice(this.state.index + 1, newWordsToBeTyped.length);

            const newHighlightedWord = (
                <div>
                    {beginning}
                    <span style={{backgroundColor: "grey"}}>{highlighted}</span>
                    {end}
                </div>
            );
            this.setState({
                wordsToBeTyped: newWordsToBeTyped,
                highlightedWord: newHighlightedWord
            })
            console.log(this.state)
        })
    }

    handleCorrectKeyDown = (e) => {
        if (e.key !== this.state.wordsToBeTyped[this.state.index]) {
            return;
        }
        const beginning = this.state.wordsToBeTyped.slice(0, this.state.index + 1);
        const highlighted = this.state.wordsToBeTyped[this.state.index + 1];
        let end = "";
        if (this.state.index !== this.state.wordsToBeTyped.length) {
            end = this.state.wordsToBeTyped.slice(this.state.index + 2, this.state.wordsToBeTyped.length);
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

    render() {
        return (
            <div tabIndex="0" onKeyDown={this.handleCorrectKeyDown}>
                {this.state.highlightedWord}
            </div>
        );
    }
}

export default Challenge;
