const randomWord = require("random-word");

export default {
  generateWord: function (minChar = 0, wordCount = 1) {
    const words = [];

    while (words.length < wordCount) {
      let newWord = "";
      do {
        newWord = randomWord();
      } while (newWord.length < minChar);
      words.push(newWord);
    }

    return words;
  },
};
