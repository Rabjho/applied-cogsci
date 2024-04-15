import InputField from "../InputField";
import QuestionTitle from "../Survey/QuestionTitle";
import { useContext } from "react";
import { SurveyContext } from "./Survey";

interface DescriptionProps {
  onAnswer: (answer: string) => void;
}

export default function Description({ onAnswer }: DescriptionProps) {
  const answers = useContext(SurveyContext);
  const description = answers["Description"];

  return (
    <>
      <QuestionTitle>Describe your project in a few sentences</QuestionTitle>
      <InputField
        placeholder="I am building ..."
        onTrigger={onAnswer}
        value={description}
      />
    </>
  );
}
