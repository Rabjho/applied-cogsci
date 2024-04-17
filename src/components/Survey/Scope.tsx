import ChoiceCards from "../ChoiceCards";
import QuestionTitle from "../Survey/QuestionTitle";

interface ScopeProps {
  onAnswer: (answer: string) => void;
}

export default function Scope({ onAnswer }: ScopeProps) {
  return (
    <>
      <QuestionTitle>What are you building?</QuestionTitle>
      <ChoiceCards choices={["Full Product", "MVP"]} onTrigger={onAnswer} />
    </>
  );
}
