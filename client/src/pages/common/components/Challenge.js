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

    componentDidUpdate(prevProps, prevState) {
        // maybe use?
    }

    handleNewChallenge = () => {
        let options;
        const {wordCount, minChar, maxChar} = this.props;
        options = {wordCount, minChar, maxChar};
        generateWord(options).then(res => {
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
            if (this.state.index + 1 === this.state.wordsToBeTyped.length){
                console.log('refresh')
                // this.componentDidUpdate() -> could use?
                this.handleRefreshWords()
                return
            }
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

    // if last item is crossed, run handleNewChallenge
    handleRefreshWords = () =>{
        console.log('refresh Conf')
        // Need to figure out how to set the index back to 0. Maybe a problem with asynchronisity. 
        this.setState({
            index: 0,
            wordsToBeTyped: '',
            highlightedWord: ''
        });
        this.handleNewChallenge()
    }

    render() {
        return (
            <div tabIndex="0" onKeyDown={this.handleCorrectKeyDown}>
                {this.state.highlightedWord}
            </div>
        );
    }
}

export default Challenge;
