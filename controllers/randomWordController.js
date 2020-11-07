const randomWord = require("random-word");

module.exports = {
    generateWord: (req, res) => {
        const {
            wordCount = 100,
            minChar = 3,
            maxChar = 15,
            punctuation = false
        } = req.query;

        const words = [];

        const punctuations = '!?,.;';

        // Fill up words upto @wordCount
        while (words.length < wordCount) {
            let newWord = "";

            // guard
            if (minChar > maxChar) {
                throw new Error('randomWordController Error. Length are out of bounds');
            }

            // Generate a word until it character count is at least @minChar or at most @maxChar
            do {
                newWord = randomWord();

                // Add punctuation if has option
                if (punctuation) {
                    const chance = Math.floor(Math.random() * Math.floor(2));
                    const whichPunc = Math.floor(Math.random() * Math.floor(punctuations.length))
                    const puncToAdd = punctuations[whichPunc];
                    if (chance === 0)
                        newWord += puncToAdd;
                }

            } while (!(newWord.length >= minChar && newWord.length <= maxChar));

            words.push(newWord);
        }
        res.json(words);
        return words;
    },
};
