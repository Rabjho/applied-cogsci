import { Stack } from "./Recommendation";

interface TechstackProps {
  stack: Stack;
}

export default function Techstack({ stack }: TechstackProps) {
  return (
    <div className="mx-auto my-2 max-w-2xl rounded-lg bg-slate-100 p-6">
      <h2 className="mb-4 text-2xl font-bold">{stack.name}</h2>
      <p className="mb-4 text-gray-700">{stack.description}</p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Frontend</h3>
        <p className="text-gray-600">
          <span className="font-medium">Primary:</span> {stack.frontend.primary}
        </p>
        {stack.frontend.secondaries && (
          <p className="text-gray-600">
            <span className="font-medium">Secondaries:</span>{" "}
            {stack.frontend.secondaries.join(", ")}
          </p>
        )}
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Backend</h3>
        <p className="text-gray-600">{stack.backend}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Database</h3>
        <p className="text-gray-600">{stack.database}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Pros</h3>
        <ul className="list-inside list-disc text-gray-600">
          {stack.pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Cons</h3>
        <ul className="list-inside list-disc text-gray-600">
          {stack.cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
