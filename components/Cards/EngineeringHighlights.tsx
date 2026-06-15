import { Zap, CheckCircle2, BookOpen } from "lucide-react";

const EngineeringHighlights = () => {
  const highlights = [
    "Architected real-time chat with Socket.io & Redis",
    "Designed RBAC with secure JWT sessions",
    "Implemented Local-First sync with IndexedDB",
    "Optimized LCP by 40% using asset prioritization",
    "Dockerized multi-service MERN applications",
  ];

  const learning = [
    "System Design",
    "Distributed Systems",
    "Kubernetes",
    "Event-Driven Architecture",
  ];

  return (
    <div className="col-span-3 h-full flex flex-col rounded-lg border border-iconBg bg-cardBg p-5">
      <div className="mb-4 flex items-center gap-2">
        <Zap className="text-primary" size={18} />
        <h3 className="text-lg font-semibold text-white">Engineering Highlights</h3>
      </div>
      
      <div className="flex-1 space-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-green-500/60" size={12} />
            <p className="text-xs text-gray-400 leading-tight">
              {highlight}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-iconBg/50">
        <div className="mb-3 flex items-center gap-2">
          <BookOpen className="text-primary" size={16} />
          <h4 className="text-sm font-medium text-white">Currently Learning</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {learning.map((item, index) => (
            <span key={index} className="text-[10px] bg-iconBg px-2 py-0.5 rounded-full text-lightText">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineeringHighlights;
