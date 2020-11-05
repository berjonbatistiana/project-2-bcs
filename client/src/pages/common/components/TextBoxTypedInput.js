import React, {Component} from "react";
import axios from "axios"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const handleGenerateWords = async (wordCount, minChar) => {

    try {
        const params = {params: {wordCount, minChar}};
        const res = await axios.get('/api/words', params);
        console.log(res);
        return res.data;
    } catch (e) {
        throw new Error(e)
    }
}

export class TextBoxTypedInput extends Component {
    state = {
        words: []
    };

    componentDidMount() {
        handleGenerateWords(this.props.wordCount, this.props.minChar).then(res => {
            this.setState({
                words: res.join(' ')
            })
        })

    }

    render() {
        return (
            <div>
                <Typography variant="body1" gutterBottom align='center'>
                    {this.state.words}
                </Typography>
                <TextField multiline rowsMax={4} variant="outlined" fullWidth/>
            </div>
        )
    };

}
