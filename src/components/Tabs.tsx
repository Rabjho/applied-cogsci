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
            className={`px-4 py-2 font-semibold ${activeTab === tab.name ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
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
