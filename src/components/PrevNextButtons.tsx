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
  return (
    <div className="horizontal center-h w-full gap-2">
      {currentStep != 0 && <button onClick={onPrev}>Previous</button>}
      {currentStep != totalSteps - 1 && <button onClick={onNext}>Next</button>}
    </div>
  );
}
