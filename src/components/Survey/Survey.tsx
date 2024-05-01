import LandingPage from "./LandingPage/LandingPage";
import Scope from "./Scope";
import Type from "./Type";
import PlatformChoice from "./PlatformChoice";
import PrevNextButtons from "./PrevNextButtons";
import Description from "./Description";
import Experience from "./Experience";
import Loading from "../Loading";
// import Priorities from "./Priorities";

import { createContext, useMemo, useState } from "react";
import QueryGPT4 from "./QueryGPT/QueryGPT";
// import testResults from "../Recommendation/testResults.json?raw";

export interface Answer {
  LandingPage: string;
  Type: string;
  Scope: string;
  Platform: string;
  Description: string;
  Experience: string;
  // Priorities: Record<string, number>;
  Priorities: number[];
}

export const SurveyContext = createContext<Partial<Answer>>({});

interface SurveyProps {
  onResults: (results: string) => void;
}

export default function Survey({ onResults }: SurveyProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Partial<Answer>>({});
  let results = "";

  const questionComponents = useMemo(
    () => [
      { name: "LandingPage", component: LandingPage },
      { name: "Scope", component: Scope },
      { name: "Type", component: Type },
      ...(answers.Type !== "Web"
        ? [{ name: "PlatformChoice", component: PlatformChoice }]
        : []),
      { name: "Description", component: Description },
      { name: "Experience", component: Experience },
      { name: "Loading", component: Loading },
      // {name: 'Priorities', component: Priorities},
    ],
    [answers.Type],
  );

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
    if (currentQuestion === questionComponents.length - 2) {
      const apiKey = window.localStorage.getItem("apiKey");
      if (apiKey !== null) {
        console.log("Querying GPT-4");
        setCurrentQuestion(currentQuestion + 1);
        results = await QueryGPT4(apiKey, answers);
        // results = testResults;
        onResults(results);
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

  const CurrentQuestionComponent = useMemo(
    () => questionComponents[currentQuestion].component,
    [currentQuestion, questionComponents],
  );

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
