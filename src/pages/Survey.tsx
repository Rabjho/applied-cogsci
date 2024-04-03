import LandingPage from "../components/LandingPage/LandingPage";
import Scope from "../components/Scope";
import PrevNextButtons from "../components/PrevNextButtons";
import { useState } from "react";

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questionComponents = [
    LandingPage,
    Scope,
    Scope,
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
      <CurrentQuestionComponent onAnswer={handleAnswer} />
      <PrevNextButtons
        onNext={nextQuestion}
        onPrev={prevQuestion}
        currentStep={currentQuestion}
        totalSteps={questionComponents.length}
      />
    </>
  );
}
