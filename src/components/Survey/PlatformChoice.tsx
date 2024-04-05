import ChoiceCards from "../ChoiceCards";
import QuestionTitle from "./QuestionTitle";

interface PlatformChoiceProps {
  onAnswer: (answer: string) => void;
}

export default function PlatformChoice({ onAnswer }: PlatformChoiceProps) {
  const projectType = "Mobile";
  return (
    <>
      <QuestionTitle>Which platform?</QuestionTitle>
      {projectType === "Mobile" && (
        <ChoiceCards
          choices={["iOS", "Android", "Both"]}
          onTrigger={onAnswer}
        />
      )}
      {projectType === "Desktop" && (
        <ChoiceCards
          choices={["Mac", "Windows", "Both"]}
          onTrigger={onAnswer}
        />
      )}
    </>
  );
}
