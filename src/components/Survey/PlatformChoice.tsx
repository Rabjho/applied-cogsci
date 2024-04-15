import ChoiceCards from "../ChoiceCards";
import QuestionTitle from "./QuestionTitle";
import { useContext, useEffect } from "react";
import { SurveyContext } from "./Survey";

interface PlatformChoiceProps {
  onAnswer: (answer: string) => void;
}

export default function PlatformChoice({ onAnswer }: PlatformChoiceProps) {
  const answers = useContext(SurveyContext);
  const projectType = answers["Type"];

  useEffect(() => {
    if (projectType === "Web") {
      onAnswer("");
    }
  }, [projectType, onAnswer]);

  const handleTrigger = (answer: string) => onAnswer(answer);

  return (
    <>
      <QuestionTitle>Which platform?</QuestionTitle>
      {projectType === "Mobile" && (
        <ChoiceCards
          choices={["iOS", "Android", "Both"]}
          onTrigger={handleTrigger}
        />
      )}
      {projectType === "Desktop" && (
        <ChoiceCards
          choices={["MacOS", "Windows", "Both"]}
          onTrigger={handleTrigger}
        />
      )}
    </>
  );
}
