interface ChoiceCardsProps {
  choices: string[];
  onTrigger: (answer: string) => void;
}

export default function ChoiceCards({ choices, onTrigger }: ChoiceCardsProps) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const value = e.currentTarget.textContent ?? ""; // Get the text content of the button
    onTrigger(value);
  }

  return (
    <div className="vertical center-h center-v h-60 w-60">
      {choices.map((choice, index) => (
        <button
          key={index}
          className="m-2 h-full w-full bg-slate-200 p-2"
          onClick={onClick}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}
