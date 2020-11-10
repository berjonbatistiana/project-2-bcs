import axios from "axios";

export const generateWord = async (options) => {
    try {
        // possible @options: minChar, maxChar, wordCount
        const params = {params: options};
        const res = await axios.get('/api/words', params);
        return res.data;
    } catch (e) {
        throw new Error(e)
    }
};


export const generateQuote = async () => {
    try {
        const res = await axios.get('api/quote');
        return res.data
    } catch (e) {
        throw new Error(e);
    }
}
