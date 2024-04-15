import LandingPage from "./LandingPage/LandingPage";
import Scope from "./Scope";
import Type from "./Type";
import PlatformChoice from "./PlatformChoice";
import PrevNextButtons from "./PrevNextButtons";
import Description from "./Description";
import Experience from "./Experience";
// import Priorities from "./Priorities";

import { createContext, useState } from "react";
// import QueryGPT4 from "./QueryGPT4";

export const SurveyContext = createContext<{ [key: string]: string }>({});

export default function Survey() {
  const [questionHistory, setNewQuestionHistory] = useState<number[]>([0]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const questionComponents = [
    LandingPage,
    Scope,
    Type,
    PlatformChoice,
    Description,
    Experience,
    // Priorities,
  ];

  const handleAnswer = (answer: string, nextAction: string) => {
    const newAnswers = { ...answers };
    newAnswers[questionComponents[questionHistory[0]].name] = answer;
    setAnswers(newAnswers);
    if (nextAction === "nextQuestion") {
      nextQuestion();
    } else if (nextAction === "prevQuestion") {
      prevQuestion();
    } else if (nextAction === "directionalSkip") {
      directionalSkip();
    }
  };

  const nextQuestion = async () => {
    // Check if we're at the last question
    if (questionHistory[0] === questionComponents.length - 1) {
      const apiKey = window.localStorage.getItem("apiKey");
      if (apiKey !== null) {
        // await QueryGPT4(apiKey);
        console.log("Querying GPT-4");
      }
      return;
    }
    setDirection("next");
    setNewQuestion(questionHistory[0] + 1);
  };

  const prevQuestion = () => {
    // Check if we're at the first question
    if (questionHistory[0] === 0) return;
    setDirection("prev");
    setNewQuestion(questionHistory[0] - 1);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const directionalSkip = () => {
    console.log("Directional Skip");

    if (direction === "next") {
      nextQuestion();
    } else {
      prevQuestion();
    }
  };

  const setNewQuestion = (i: number) => {
    const newQuestionHistory = [...questionHistory];
    newQuestionHistory.unshift(i);
    setNewQuestionHistory(newQuestionHistory);
  };

  const currentQuestion = questionHistory[0];
  const CurrentQuestionComponent = questionComponents[currentQuestion];

  return (
    <>
      <SurveyContext.Provider value={answers}>
        <div className="vertical center h-auto flex-grow overflow-hidden">
          {<CurrentQuestionComponent onAnswer={handleAnswer} />}
        </div>
        <div className="absolute bottom-0 h-fit w-full">
          <PrevNextButtons
            onNext={nextQuestion}
            onPrev={prevQuestion}
            currentStep={questionHistory[0]}
            totalSteps={questionComponents.length}
          />
        </div>
      </SurveyContext.Provider>
    </>
  );
}
