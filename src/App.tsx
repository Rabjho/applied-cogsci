import "./App.css";
import Survey from "./components/Survey/Survey";
import { useState } from "react";
import Recommendation from "./components/Recommendation/Recommendation";

export default function App() {
  const [results, setResults] = useState<string>("");

  return (
    <>
      <div className="vertical h-screen">
        <Logo />
        {!results && <Survey onResults={(r) => setResults(r)} />}
        {results && <Recommendation results={results} />}
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="text-primary left-10 top-10 mx-5 my-2 text-2xl">
        Tech Stack Helper
      </div>
    </>
  );
}
