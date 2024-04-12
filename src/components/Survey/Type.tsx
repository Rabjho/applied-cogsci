import ChoiceCards from "../ChoiceCards";
import QuestionTitle from "../Survey/QuestionTitle";
import { useContext } from "react";
import { SurveyContext } from "./Survey";

interface TypeProps {
  onAnswer: (answer: string) => void;
}

export default function Type({ onAnswer }: TypeProps) {
  const answers = useContext(SurveyContext);
  const currentType = answers[2];

  return (
    <>
      <QuestionTitle>What type of project?</QuestionTitle>
      <div className="horizontal center-v">
        <ChoiceCards
          choices={["Web", "Mobile", "Desktop"]}
          onTrigger={onAnswer}
        />
        {/* {currentType === "Mobile" && (
          <ChoiceCards
            choices={["iOS", "Android", "Both"]}
            onTrigger={onAnswer}
          ></ChoiceCards>
        )}
        {currentType === "Desktop" && (
          <ChoiceCards
            choices={["Mac", "Windows", "Both"]}
            onTrigger={onAnswer}
          ></ChoiceCards>
        )} */}
      </div>
    </>
  );
}
