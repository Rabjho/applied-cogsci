interface ScopeProps {
  onAnswer: (answer: string) => void;
}

export default function Scope({ onAnswer }: ScopeProps) {
  return (
    <>
      <div className="vertical center-v h-svh w-full">
        <div className="text-primary text-2xl">
          What is the scope of your project?
        </div>
        <div className="text-primary text-lg">
          This will help us understand the size of your project.
        </div>
        <div className="flex flex-row">
          <button onClick={() => onAnswer("small")}>Small</button>
          <button onClick={() => onAnswer("medium")}>Medium</button>
          <button onClick={() => onAnswer("large")}>Large</button>
        </div>
      </div>
    </>
  );
}
