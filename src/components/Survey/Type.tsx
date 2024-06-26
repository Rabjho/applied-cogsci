import ChoiceCards from "../ChoiceCards";
import QuestionTitle from "../Survey/QuestionTitle";

interface TypeProps {
  onAnswer: (answer: string) => void;
}

export default function Type({ onAnswer }: TypeProps) {
  const handleTrigger = (answer: string) => {
    onAnswer(answer);
  };

  return (
    <>
      <QuestionTitle>What type of project?</QuestionTitle>
      <div className="horizontal center-v">
        <ChoiceCards
          choices={["Web", "Mobile", "Desktop"]}
          onTrigger={handleTrigger}
        />
      </div>
    </>
  );
}
