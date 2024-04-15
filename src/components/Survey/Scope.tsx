import ChoiceCards from "../ChoiceCards";
import QuestionTitle from "../Survey/QuestionTitle";

interface ScopeProps {
  onAnswer: (answer: string, nextAction: string) => void;
}

export default function Scope({ onAnswer }: ScopeProps) {
  return (
    <>
      <QuestionTitle>What are you building?</QuestionTitle>
      <ChoiceCards
        choices={["MVP", "Full Product"]}
        onTrigger={(answer) => onAnswer(answer, "nextQuestion")}
      />
    </>
  );
}
