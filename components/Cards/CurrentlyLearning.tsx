import React from "react";
import { TrendingUp, BookOpen } from "lucide-react";

const CurrentlyLearning = () => {
  const learning = [
    "System Design",
    "Distributed Systems",
    "Kubernetes",
    "Event-Driven Architecture",
  ];

  return (
    <div className="col-span-2 row-span-2 rounded-lg border border-white/5 card-gradient-purple p-6">
      <div className="mb-4 flex items-center gap-2">
        <TrendingUp className="text-primary" size={18} />
        <h3 className="text-lg font-semibold text-white">Learning</h3>
      </div>
      <div className="space-y-2">
        {learning.map((item, index) => (
          <div key={index} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
            <BookOpen size={12} className="text-primary/60" />
            <span className="text-xs text-lightText">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentlyLearning;
