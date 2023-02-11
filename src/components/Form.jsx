import React, { useState } from "react";
import { captionApi } from "../api/aiApi";
import shareIcon from "../assets/share.png";
import copyIcon from "../assets/copy.png";
const Form = () => {
  const [userText, setUserText] = useState("");
  const [result, setResult] = useState("");
  const [rhyme, setRhyme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copyText, setCopyText] = useState("Copy Caption");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userText !== "") {
      setLoading(true);
      captionApi(userText, rhyme)
        .then((res) => {
          // console.log(res);
          setResult(res?.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Write something on text box to generate a caption!");
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Pretty Captions",
        text: "⚡ Generate cool captions for your posts using AI 🤩",
        url: "https://p-captions.web.app",
      });
      resultPara.textContent = "Shared successfully";
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  };

  const handleCopy = () => {
    result !== "" && navigator.clipboard.writeText(result);
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy Caption");
    }, 5000);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="userForm px-3 py-8 sm:py-6 sm:px-8 flex w-full sm:w-5/6 lg:w-7/12 xl:w-2/5 flex-col justify-center items-center gap-8 sm:gap-8"
    >
      <span className="text-lg appInfo">
        ⚡ Generate cool captions for your posts using AI 🤩
      </span>
      <input
        disabled={loading}
        type="text"
        className="text-lg userInput px-1 py-4 w-full"
        value={userText}
        onChange={(e) => {
          setUserText(e.target.value);
        }}
        placeholder="Type your caption.."
      />
      <div className="flex justify-around sm:justify-around items-center w-full">
        <span className="flex text-sm sm:text-lg items-center gap-1 sm:gap-2">
          <label role={"button"} htmlFor="rhyme">
            🎵 Rhyming
          </label>
          <input
            role={"button"}
            disabled={loading}
            type="checkbox"
            name="rhyme"
            id="rhyme"
            onChange={() => setRhyme((current) => !current)}
          />
        </span>
        <button
          disabled={loading}
          type="submit"
          className={`${
            loading ? "subLoading" : "subBtn"
          } w-1/2 text-base sm:text-xl py-2`}
          onClick={handleSubmit}
        >
          {loading ? "⏳ Doing It" : "🌼 Prettify It"}
        </button>
      </div>
      {result !== "" && (
        <div className="flex flex-col gap-8 w-full">
          <span
            onClick={(e) => {
              e.target.select();
            }}
            className="result text-base sm:text-lg w-full p-4"
          >
            {result}
          </span>
          <div className="flex justify-around ">
            <span
              className="flex items-center gap-2"
              role="button"
              onClick={handleShare}
            >
              <img className="w-5" src={shareIcon} alt="" />
              Share this App
            </span>
            <span
              className="flex items-center gap-2"
              role="button"
              onClick={handleCopy}
            >
              <img className="w-5" src={copyIcon} alt="" />
              {copyText}
            </span>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
