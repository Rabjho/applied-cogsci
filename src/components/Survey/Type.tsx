import ChoiceCards from "../ChoiceCards";
import QuestionTitle from "../Survey/QuestionTitle";

interface TypeProps {
  onAnswer: (answer: string) => void;
}

export default function Type({ onAnswer }: TypeProps) {
  return (
    <>
      <QuestionTitle>What type of project?</QuestionTitle>

      <ChoiceCards
        choices={["Web", "Mobile", "Desktop"]}
        onTrigger={onAnswer}
      />
    </>
  );
}
