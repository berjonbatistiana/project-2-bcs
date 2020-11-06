import axios from "axios";

export const generateWord = async (wordCount, minChar) => {
    try {
        const params = {params: {wordCount, minChar}};
        const res = await axios.get('/api/words', params);
        return res.data;
    } catch (e) {
        throw new Error(e)
    }
};
