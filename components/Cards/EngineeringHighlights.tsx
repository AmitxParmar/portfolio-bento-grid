import { Zap, CheckCircle2, Cpu } from "lucide-react";

const EngineeringHighlights = () => {
  const highlights = [
    "Microservices Architecture",
    "RabbitMQ Event Bus",
    "Redis Caching & Pub/Sub",
    "Transactional Outbox Pattern",
    "CQRS Design Pattern",
    "OpenTelemetry Observability",
    "Circuit Breaker Resilience",
    "Event Sourcing",
    "Local-First Sync (IndexedDB)",
    "Kong API Gateway",
    "Docker Containerization",
    "AWS Infrastructure",
  ];

  return (
    <div className="flex flex-1 flex-col rounded-[2rem] border-premium card-gradient-orange p-6 lg:p-4 2xl:p-8 hover-glow-purple transition-all duration-500 group/highlights">
      <div className="mb-6 flex flex-col items-center justify-center text-center">
        <h4 className="text-[10px] mb-1 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-highlights:opacity-100 transition-opacity">
          <Zap className="fill-primary/20" size={12} /> Technical Depth
        </h4>
        <h3 className="text-xl font-black text-white tracking-tighter lg:text-base 2xl:text-2xl leading-none">
          Engineering Highlights
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 lg:gap-x-3 lg:gap-y-2 2xl:gap-x-6 2xl:gap-y-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-2 group/item">
            <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 transition-colors group-hover/item:bg-primary/20">
              <CheckCircle2 className="text-primary" size={8} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-wider text-white/70 group-hover/item:text-white transition-colors leading-tight truncate" title={highlight}>
              {highlight}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 opacity-10 group-hover/highlights:opacity-20 transition-opacity flex justify-end">
        <Cpu size={40} className="text-primary rotate-12" />
      </div>
    </div>
  );
};

export default EngineeringHighlights;
