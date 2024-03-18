// import React from "react";
interface ChoiceCardsProps {
  choices: string[];
}

function ChoiceCards({ choices }: ChoiceCardsProps) {
  return (
    <div className="">
      {choices.map((choice) => (
        <button>{choice}</button>
      ))}
    </div>
  );
}

export default ChoiceCards;
