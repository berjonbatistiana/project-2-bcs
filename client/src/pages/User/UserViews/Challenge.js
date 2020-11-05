import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


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

export const Challenge = () => {
    return (
        <div>
            <Button
                onClick={() => handleGenerateWords(5,2)}
                variant="contained"
                color="primary">
                Generate
            </Button>
        </div>
    );
}
