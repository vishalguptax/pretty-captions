import axios from "axios";


export const captionApi = async (userText, rhyme) => {
  try {
    const { data } = await axios.post("https://pretty-captions.onrender.com/api", {
      userText,
      rhyme,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
