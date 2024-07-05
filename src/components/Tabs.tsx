import React, { useState } from "react";

export interface Tab {
  name: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <ul className="flex overflow-x-auto">
        {tabs.map((tab: Tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === tab.name
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            style={{ width: `calc(100% / ${tabs.length})` }}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </ul>
      {tabs.find((tab) => tab.name === activeTab)?.content}
    </div>
  );
}
