import { useContext } from "react";
import { SurveyContext } from "./Survey";

interface PrevNextButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
}

export default function PrevNextButtons({
  onPrev,
  onNext,
  currentStep,
  totalSteps,
}: PrevNextButtonsProps) {
  const answers = useContext(SurveyContext);
  const numberOfQuestions = answers ? Object.keys(answers).length : 0;

  return (
    <div className="horizontal center-h w-full *:mx-1 *:my-1 *:bg-slate-200 *:p-1">
      {currentStep != 0 && <button onClick={onPrev}>Previous</button>}
      {currentStep != totalSteps - 1 &&
        currentStep != 0 &&
        currentStep < numberOfQuestions && (
          <button onClick={onNext}>Next</button>
        )}
    </div>
  );
}
