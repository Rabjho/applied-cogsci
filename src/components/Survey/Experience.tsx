import InputField from "../InputField";
import QuestionTitle from "../Survey/QuestionTitle";
import { useContext } from "react";
import { SurveyContext } from "./Survey";

interface ExperienceProps {
  onAnswer: (answer: string) => void;
}

// Could possible be big searchable list of relevant technologies
export default function Experience({ onAnswer }: ExperienceProps) {
  const answers = useContext(SurveyContext);
  const experience = answers["Experience"];

  return (
    <>
      <QuestionTitle>
        Which relevant technologies do you have experience with?
      </QuestionTitle>
      <InputField
        placeholder="I have experience with ..."
        onTrigger={onAnswer}
        value={experience}
      />
    </>
  );
}
