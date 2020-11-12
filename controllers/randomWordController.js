
const randomWord = require("random-word");
const randomQuote = require("get-random-quote");

module.exports = {
    generateWord: (req, res) => {
        const {
            wordCount = 100,
            minChar = 3,
            maxChar = 15,
            punctuation = 'false',
            quotes = 'false'
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
        randomQuote().then((quote) => {
            res.json(quote.text)
            return quote.text;
        })
    }
};
