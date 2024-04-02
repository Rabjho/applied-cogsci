import react, { useState, useEffect } from "react";

export default function CallToAction() {
  const [inputType, setInputType] = useState("password");
  const [apiKey, setApiKey] = useState("");

  const handleNext = () => {
    console.log("Next");
  };

  useEffect(() => {
    const storedApiKey = window.localStorage.getItem("apiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  // TODO Sanitize the input (e.g. remove whitespace, check for valid API key format, etc.)
  const handleChange = (e: react.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setApiKey(value);
    window.localStorage.setItem("apiKey", value);
  };

  // Handle focus on the input field to change its type to text
  const handleFocus = () => setInputType("text");

  // Handle blur (when the input loses focus) to change the type back to password
  const handleBlur = () => setInputType("password");

  const handleClick = (e: react.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <>
      <div className="vertical center-v center-h">
        <p className="m-4 w-2/3 text-wrap text-center text-xl text-slate-600">
          Give your project its best possible start
        </p>
        <div className="horizontal center-h center-v w-auto gap-2 rounded-xl bg-gray-200">
          <input
            className="inset-1 my-2 ml-2 h-fit rounded-lg p-2"
            type={inputType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onLoad={handleChange}
            value={apiKey}
            placeholder="Enter your API key here"
          ></input>
          <button
            onClick={handleClick}
            className="my-2 mr-2 h-auto w-fit text-nowrap rounded-lg bg-green-800 px-4 py-2 text-white shadow"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
