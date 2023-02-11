import axios from "axios";


export const captionApi = async (userText, rhyme) => {
  try {
    const res = await axios.post("http://localhost:8080/api", {
      userText,
      rhyme,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
