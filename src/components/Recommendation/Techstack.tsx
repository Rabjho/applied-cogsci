import { Stack } from "./Recommendation";

interface TechstackProps {
  stack: Stack;
}

export default function Techstack({ stack }: TechstackProps) {
  return (
    <>
      <div className="vertical center h-auto flex-grow overflow-hidden">
        <h1 className="text-2xl font-semibold">Front-end</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="bg-slate-200">{stack.frontend.primary}</p>
          </div>
          <div className="vertical center h-fit w-auto gap-2">
            {stack.frontend.secondaries?.map((secondary) => (
              <p key={secondary} className="w-auto bg-slate-200">
                {secondary}
              </p>
            ))}
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Back-end</h1>
        <p className="bg-slate-200">{stack.backend}</p>
        <h1 className="text-2xl font-semibold">Database</h1>
        <p className="bg-slate-200">{stack.database}</p>
        <h1 className="text-2xl font-semibold">Pros</h1>
        <div className="grid grid-cols-2 gap-4">
          {stack.pros.map((pro) => (
            <p key={pro} className="bg-slate-200">
              {pro}
            </p>
          ))}
        </div>
        <h1 className="text-2xl font-semibold">Cons</h1>
        <div className="grid grid-cols-2 gap-4">
          {stack.cons.map((con) => (
            <p key={con} className="bg-slate-200">
              {con}
            </p>
          ))}
        </div>
        <h1 className="text-2xl font-semibold">Description</h1>
        <p className="max-w-80 bg-slate-200">{stack.description}</p>
      </div>
    </>
  );
}
