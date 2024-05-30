import Tabs, { Tab } from "../Tabs";
import Techstack from "./Techstack";

interface RecommendationProps {
  results: string;
}

export interface Stack {
  name: string;
  // provider: string;
  database: string;
  backend: string;
  frontend: {
    primary: string;
    secondaries?: string[];
  };
  pros: string[];
  cons: string[];
  description: string;
}

interface StackList {
  stacks: Stack[];
  comments: string;
}

export default function Recommendation({ results }: RecommendationProps) {
  const stackList: StackList = JSON.parse(results);
  const tabs: Tab[] = stackList.stacks.map((stack) => ({
    name: stack.name,
    content: <Techstack stack={stack}></Techstack>,
  }));

  return (
    <>
      <div className="vertical center h-auto flex-grow">
        <div className="h-fit w-fit overflow-hidden">
          <Tabs tabs={tabs}></Tabs>
        </div>
      </div>
    </>
  );
}
