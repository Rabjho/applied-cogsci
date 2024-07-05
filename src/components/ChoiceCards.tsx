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
    <div className="vertical center-h center-v">
      {choices.map((choice, index) => (
        <button
          key={index}
          className="m-2 h-full w-full rounded-xl bg-slate-200 px-20 py-4 font-medium hover:bg-slate-300 focus:outline"
          onClick={onClick}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}
