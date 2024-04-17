import LandingPage from "./LandingPage/LandingPage";
import Scope from "./Scope";
import Type from "./Type";
import PlatformChoice from "./PlatformChoice";
import PrevNextButtons from "./PrevNextButtons";
import Description from "./Description";
import Experience from "./Experience";
// import Priorities from "./Priorities";

import { createContext, useState } from "react";
import QueryGPT4 from "./QueryGPT4/QueryGPT4";

export const SurveyContext = createContext<{ [key: string]: string }>({});

export default function Survey() {
  const [questionHistory, setNewQuestionHistory] = useState<number[]>([0, 0]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const questionComponents = [
    LandingPage,
    Scope,
    Type,
    PlatformChoice,
    Description,
    Experience,
    // Priorities,
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers };
    newAnswers[questionComponents[questionHistory[0]].name] = answer;
    newAnswers["Priorities"] = "0,0,0,0,0";
    setAnswers(newAnswers);

    if (questionHistory[0] === 2 && answer === "Web") {
      directionalSkip("forward");
      return;
    }
    nextQuestion();
  };

  const nextQuestion = async () => {
    // Check if we're at the last question
    if (questionHistory[0] === questionComponents.length - 1) {
      const apiKey = window.localStorage.getItem("apiKey");
      if (apiKey !== null) {
        await QueryGPT4(apiKey, answers);
        // console.log("Querying GPT-4");
      }
      return;
    }
    setDirection("forward");
    setNewQuestion(questionHistory[0] + 1);
  };

  const prevQuestion = () => {
    // Check if we're at the first question
    if (questionHistory[0] === 0) return;
    setDirection("backward");
    if (questionHistory[0] === 4 && answers["Type"] === "Web") {
      console.log("skipping back to scope");
      console.log(direction);

      directionalSkip(direction);
      return;
    }
    setNewQuestion(questionHistory[0] - 1);
  };

  const directionalSkip = (direction: string) => {
    if (direction === "forward") {
      setNewQuestion(questionHistory[0] + 2);
    } else if (direction === "backward") {
      console.log(questionHistory[0]);
      console.log(questionHistory[0] - 2);

      setNewQuestion(questionHistory[0] - 2);
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
