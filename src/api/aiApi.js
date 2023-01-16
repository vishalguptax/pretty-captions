import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export const captionApi = async (userText, rhyme) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `create a ${rhyme ? "rhyming" : ""} for "${userText}." for social media`,
      // prompt:userText,
      max_tokens: 100,
    });
    return completion.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return error;
  }
};
