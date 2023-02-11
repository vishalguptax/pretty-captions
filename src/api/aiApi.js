import axios from "axios";


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
