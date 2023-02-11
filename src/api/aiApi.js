import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export const captionApi = async (userText, rhyme) => {
  try {
    const { data } = axios.post("http://localhost:8080/api", {
      userText,
      rhyme,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
