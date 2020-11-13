const randomWord = require("random-words");
const axios = require('axios')

module.exports = {
    generateWord: (req, res) => {
        const {
            wordCount = 100,
            minChar = 3,
            maxChar = 15,
            punctuation = 'false',
        } = req.query;
        const words = [];
        const punctuations = '!?.;,';
        let hadPunc = false;
        while (words.length < wordCount) {
            let newWord = "";
            if (minChar > maxChar) {
                throw new Error('randomWordController Error. Length are out of bounds');
            }
            // Generate a word until it character count is at least @minChar or at most @maxChar
            do {
                newWord = randomWord();
            } while (!(newWord.length >= minChar && newWord.length <= maxChar));
            // if previous word had a punctuation, capitalize this one.
            if (hadPunc) {
                hadPunc = false;
                newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
            }
            // Add punctuation if has option
            if (punctuation === 'true') {
                const chance = Math.floor(Math.random() * Math.floor(3));
                const whichPunc = Math.floor(Math.random() * Math.floor(punctuations.length))
                const puncToAdd = punctuations[whichPunc];
                if (words.length === 0) {
                    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
                }
                if (chance === 0) {
                    hadPunc = whichPunc < 3;
                    newWord += puncToAdd;
                }
            }
            words.push(newWord);
        }
        res.json(words);
        return words;
    },
    generateQuote: (req, res) => {
        try {
            const url = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=3&tags=short"
            axios.get(url).then((aRes) => {
                const rawQuotes = aRes.data.quotes;
                const arrQuotes = [];

                console.log(rawQuotes)
                rawQuotes.forEach(el => {
                    arrQuotes.push(el.quote);
                });
                let quotes = arrQuotes.join(' ');
                quotes = quotes.replace('\[...\]', '');
                quotes = quotes.replace('…', '');
                quotes = quotes.replace('...', '');
                quotes = quotes.replace('\[', '');
                quotes = quotes.replace('\]', '');
                quotes = quotes.replace(/[\n\r]/g, ' ');
                quotes.trim();
                res.send(quotes)
            });
        } catch (e) {
            throw new Error(e);
        }
    }
};
