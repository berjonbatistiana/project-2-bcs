import axios from "axios";

export const postSignUp = async (formValues) => {
  try {
    return await axios.post("/auth/signup", formValues);
  } catch (e) {
    throw new Error(e);
  }
}

export const postSignIn = async (formValues) => {
  try {
    return await await axios.post("/auth/signin", formValues);
  } catch (e) {
    throw new Error(e);
  }
}

export const generateWord = async (options) => {
  try {
    const params = {params: options};
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
      wordsPerMin,
      accuracy
    });
  } catch (e) {
    throw new Error(e);
  }

};

export const getUserScore = async user => {
  try {
    return await axios.get(`/api/scores/${user}`)
  } catch (e) {
    throw new Error(e);
  }
}

export const getLeaders = async () => {

  try {
    return axios.get("/api/scores/leaders");
  } catch (e) {
    throw new Error(e);
  }

};