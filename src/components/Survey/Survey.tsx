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

interface Answer {
  LandingPage: string;
  Type: string;
  Scope: string;
  PlatformChoice: string;
  Description: string;
  // Priorities: Record<string, number>;
  Experience: string;
  Priorities: number[];
}

export const SurveyContext = createContext<Partial<Answer>>({});

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questionComponents = [
    LandingPage,
    Scope,
    Type,
    ...(answers["Type"] !== "Web" ? [PlatformChoice] : []),
    Description,
    Experience,
    // Priorities,
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = {
      ...answers,
      [questionComponents[currentQuestion].name]: answer,
    };
    setAnswers(newAnswers);
    nextQuestion();
  };

  const nextQuestion = async () => {
    // Check if we're at the last question
    if (currentQuestion === questionComponents.length - 1) {
      const apiKey = window.localStorage.getItem("apiKey");
      if (apiKey !== null) {
        // await QueryGPT4(apiKey, answers);
        console.log("Querying GPT-4");
      }
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    // Check if we're at the first question
    if (currentQuestion === 0) return;
    setCurrentQuestion(currentQuestion - 1);
  };

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
            currentStep={currentQuestion}
            totalSteps={questionComponents.length}
          />
        </div>
      </SurveyContext.Provider>
    </>
  );
}
