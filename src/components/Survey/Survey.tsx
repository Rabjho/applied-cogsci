import LandingPage from "./LandingPage/LandingPage";
import Scope from "./Scope";
import Type from "./Type";
import PrevNextButtons from "./PrevNextButtons";
import { useState } from "react";

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questionComponents = [
    LandingPage,
    Scope,
    Type,
    // Description,
    // Experience,
    // Priorities,
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    nextQuestion();
  };

  const nextQuestion = () => {
    // Check if we're at the last question
    if (currentQuestion === questionComponents.length - 1) return;
    setCurrentQuestion((prevIndex) => prevIndex + 1);
  };

  const prevQuestion = () => {
    // Check if we're at the first question
    if (currentQuestion === 0) return;
    setCurrentQuestion(currentQuestion - 1);
  };

  const CurrentQuestionComponent = questionComponents[currentQuestion];

  return (
    <>
      <div className="vertical center h-auto flex-grow overflow-hidden">
        <div className=""></div>
        <div>
          <CurrentQuestionComponent onAnswer={handleAnswer} />
        </div>
      </div>
      <div className="absolute bottom-0 h-fit w-full">
        <PrevNextButtons
          onNext={nextQuestion}
          onPrev={prevQuestion}
          currentStep={currentQuestion}
          totalSteps={questionComponents.length}
        />
      </div>
    </>
  );
}
