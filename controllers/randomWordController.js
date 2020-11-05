const randomWord = require("random-word");

module.exports = {
  generateWord: (req, res) => {
    const { wordCount, minChar } = req.query;
    const words = [];

    // Fill up words upto @wordCount
    while (words.length < wordCount) {
      let newWord = "";

      // Generate a word until it character count is at least @minChar
      do {
        newWord = randomWord();
      } while (newWord.length < minChar);

      words.push(newWord);
    }
    res.json(words);
    return words;
  },
};
