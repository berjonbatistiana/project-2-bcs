import axios from "axios";

export const generateWord = async (options) => {
  try {
    const params = { params: options };
    const res = await axios.get("/api/words", params);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const generateQuote = async () => {
  try {
    const res = await axios.get("api/quote");
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};


export const postScore = async ({highScore, username, wordsPerMin, accuracy}) => {

  try {
      await axios.post("/api/scores/score", {
      highScore,
      username,
      wordsPerMin: this.state.WPM,
      accuracy: this.state.accuracyPercent,
    });
  } catch (e){
    throw new Error(e);
  }

};