"use client";

import React, { useMemo } from "react";
import { ExternalLink, Github, Calendar, CheckCircle2, Server, Layout, Database, MessageSquare, Shield, Activity, Share2, Info, ChevronRight, Box, Cpu, Network, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Tree as FileTree, Folder, File } from "@/components/magicui/file-tree";
import { 
  ReactFlow, 
  ReactFlowProvider,
  Background, 
  Controls, 
  Panel,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import { motion } from "motion/react";

// Register Lucide icons globally to support references in compiled MDX code without manual imports
const g = globalThis as any;
g.ExternalLink = ExternalLink;
g.Github = Github;
g.Calendar = Calendar;
g.CheckCircle2 = CheckCircle2;
g.Server = Server;
g.Layout = Layout;
g.Database = Database;
g.MessageSquare = MessageSquare;
g.Shield = Shield;
g.Activity = Activity;
g.Share2 = Share2;
g.Info = Info;
g.ChevronRight = ChevronRight;
g.FileText = FileText;

// Architecture Wrapper — renders flow diagram + inline structured breakdown
export const ProjectArchitecture = ({ nodes, edges, title, description, children }: any) => (
  <div className="my-16 space-y-8">
    <ArchitectureHeader
      title={title || "Technical Architecture"}
      description={description}
    />

    <div className="relative group">
      <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-primary/5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
      <ArchitectureFlow nodes={nodes} edges={edges} />
    </div>

    {children && (
      <div className="mt-6 p-6 rounded-2xl border border-iconBg bg-cardBg/40">
        <div className="flex items-center gap-2 mb-4">
          <Network size={16} className="text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-lightText/60">Component Breakdown</span>
        </div>
        <div className="prose prose-invert prose-primary max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-headings:mb-2 prose-headings:mt-4">
          {children}
        </div>
      </div>
    )}
  </div>
);

// 1. Project Hero
export const ProjectHero = ({ title, subtitle, status, github, demo, timeline, tech }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-8 pb-12 border-b border-iconBg mb-16"
  >
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
        <CheckCircle2 size={12} className="mr-2" /> {status}
      </Badge>
      <div className="text-sm text-lightText flex items-center gap-2 bg-iconBg/30 px-3 py-1 rounded-full border border-iconBg">
        <Calendar size={14} className="text-primary" /> {timeline}
      </div>
    </div>
    <div className="space-y-6">
      <h1 className="text-5xl lg:text-8xl font-black tracking-tightest text-darkText leading-[0.9]">
        {title}<span className="text-primary">.</span>
      </h1>
      <p className="text-xl lg:text-2xl text-lightText max-w-4xl leading-relaxed font-medium">
        {subtitle}
      </p>
    </div>
    <div className="flex flex-wrap gap-4 pt-4">
      {demo && (
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={20} className="mr-2" /> Live Project
          </a>
        </Button>
      )}
      {github && (
        <Button variant="outline" size="lg" asChild className="border-iconBg bg-cardBg hover:bg-iconBg rounded-full px-8 h-14 font-bold hover:scale-105 transition-all">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github size={20} className="mr-2" /> View Source
          </a>
        </Button>
      )}
    </div>
  </motion.div>
);

// 2. Info Grid & Card
export const InfoGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
    {children}
  </div>
);

export const InfoCard = ({ title, value, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: 'var(--color-primary)' }}
    className="p-5 rounded-2xl border border-iconBg bg-cardBg/30 flex flex-col gap-2 backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/20"
  >
    <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
      {Icon && <Icon size={18} />}
    </div>
    <div className="space-y-0.5">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lightText/40">{title}</span>
      <span className="text-sm font-bold text-darkText block truncate">{value}</span>
    </div>
  </motion.div>
);

export const ProjectStat = ({ label, value, description }: any) => (
  <div className="p-8 rounded-3xl border border-iconBg bg-cardBg/20 backdrop-blur-sm flex flex-col gap-2 text-center group hover:border-primary/20 transition-colors">
    <span className="text-4xl lg:text-5xl font-black text-primary group-hover:scale-110 transition-transform block">{value}</span>
    <span className="text-sm font-bold text-darkText uppercase tracking-widest">{label}</span>
    {description && <p className="text-xs text-lightText mt-2">{description}</p>}
  </div>
);

export const ArchitectureHeader = ({ title, description }: any) => (
  <div className="space-y-4 mb-8">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
        <Cpu size={20} />
      </div>
      <h2 className="text-3xl font-black text-darkText m-0!">{title || "System Architecture"}</h2>
    </div>
    {description && <p className="text-lg text-lightText leading-relaxed max-w-3xl">{description}</p>}
  </div>
);

// 3. Architecture components
export const ArchitectureImage = ({ src, alt }: { src: string, alt?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative aspect-video w-full overflow-hidden rounded-3xl border border-iconBg bg-cardBg mb-8 group"
  >
    <Image src={src} alt={alt || "Architecture Diagram"} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
    <div className="absolute inset-0 bg-linear-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
      <p className="text-sm font-bold text-darkText flex items-center gap-2">
        <Share2 size={16} className="text-primary" /> {alt || "Architecture Diagram"}
      </p>
    </div>
  </motion.div>
);

const CustomNode = ({ data }: any) => {
  const getIcon = () => {
    if (data.icon) return data.icon;
    const type = (data.type || '').toLowerCase();
    if (type.includes('client') || type.includes('frontend')) return <Layout size={16} />;
    if (type.includes('server') || type.includes('gateway') || type.includes('backend')) return <Server size={16} />;
    if (type.includes('database') || type.includes('redis') || type.includes('mongo')) return <Database size={16} />;
    if (type.includes('service') || type.includes('microservice')) return <Cpu size={16} />;
    if (type.includes('auth') || type.includes('shield')) return <Shield size={16} />;
    if (type.includes('message') || type.includes('socket')) return <MessageSquare size={16} />;
    return <Box size={16} />;
  };

  return (
    <div className="px-5 py-4 shadow-2xl rounded-2xl bg-cardBg border border-iconBg min-w-[180px] hover:border-primary/40 transition-colors group">
      <div className="flex items-center gap-4">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
          {getIcon()}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[9px] font-black uppercase tracking-widest text-lightText/50">{data.type || 'Component'}</span>
          <span className="text-sm font-bold text-darkText leading-none">{data.label}</span>
        </div>
      </div>
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const FlowWrapper = ({ nodes: initialNodes, edges: initialEdges }: any) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[500px] w-full min-h-[500px] rounded-3xl border border-iconBg bg-cardBg/30 overflow-hidden relative shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        colorMode="dark"
      >
        <Background color="#282828" gap={20} />
        <Controls showInteractive={false} className="bg-iconBg border-iconBg fill-darkText" />
        <Panel position="top-right" className="bg-iconBg/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-iconBg">
          <span className="text-[10px] font-bold text-lightText uppercase tracking-widest flex items-center gap-2">
            <Network size={12} className="text-primary" /> Interactive Map
          </span>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export const ArchitectureFlow = (props: any) => (
  <div className="mb-6">
    <ReactFlowProvider>
      <FlowWrapper {...props} />
    </ReactFlowProvider>
  </div>
);

// Custom paragraph: just tighten margins
export const p = ({ children, ...props }: any) =>
  <p className="leading-relaxed text-lightText my-3" {...props}>{children}</p>;

// Helper to render an ASCII tree line with icons
const TreeLine = ({ line }: { line: string }) => {
  const isLeaf = line.includes('├──') || line.includes('└──');
  const isContinue = line.includes('│') && !isLeaf;
  if (!line.trim() && !isContinue) return null;

  if (isLeaf) {
    const isLast = line.includes('└──');
    const parts = line.split(/(├──|└──)/);
    const connector = parts[1] || '';
    const label = (parts[2] || '').trim();
    return (
      <div className="flex items-center gap-2 pl-6 py-1 group hover:bg-primary/5 rounded-lg transition-colors">
        <span className={`font-mono text-xs shrink-0 ${isLast ? 'text-primary/50' : 'text-primary/30'}`}>{connector}</span>
        <Box size={12} className="text-lightText/40 shrink-0 group-hover:text-primary transition-colors" />
        <span className="text-sm text-lightText group-hover:text-darkText transition-colors">{label}</span>
      </div>
    );
  }

  if (isContinue) {
    return <div className="pl-6 font-mono text-xs text-primary/20">{line}</div>;
  }

  // Section header line
  return (
    <div className="flex items-center gap-2 mt-4 mb-1 first:mt-0">
      <Server size={14} className="text-primary shrink-0" />
      <span className="text-sm font-bold text-primary">{line.trim()}</span>
    </div>
  );
};

// Custom code block handler — renders tree syntax with icons
export const pre = ({ children, ...props }: any) => {
  const raw: string = typeof children?.props?.children === 'string'
    ? children.props.children
    : '';
  const lang: string = children?.props?.className || '';

  if (lang.includes('tree') || (raw && (raw.includes('├──') || raw.includes('└──')))) {
    const lines = raw.trim().split('\n');
    return (
      <div className="my-4 p-4 rounded-2xl bg-cardBg/60 border border-iconBg shadow-inner">
        {lines.map((line, i) => <TreeLine key={i} line={line} />)}
      </div>
    );
  }

  // Default code block
  return (
    <pre className="my-4 p-4 rounded-xl bg-cardBg border border-iconBg overflow-x-auto text-sm font-mono text-lightText" {...props}>
      {children}
    </pre>
  );
};

export const ArchitectureDialog = ({ children, title = "Architecture Details" }: { children?: React.ReactNode, title?: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="w-full md:w-fit border-primary/20 text-primary hover:bg-primary/5 rounded-full px-6 py-6 font-bold group">
        <FileText size={18} className="mr-2 group-hover:scale-110 transition-transform" /> View Architecture Details
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-4xl bg-bg border-iconBg h-[80vh] flex flex-col p-0 overflow-hidden">
      <DialogHeader className="p-6 border-b border-iconBg shrink-0">
        <DialogTitle className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Network size={20} />
          </div>
          <span className="text-xl font-bold">{title}</span>
        </DialogTitle>
      </DialogHeader>
      <div className="flex-1 min-h-0 relative">
        <ScrollArea className="h-full w-full p-6 md:p-8">
          <div className="prose prose-invert prose-primary max-w-none">
            {children}
          </div>
        </ScrollArea>
      </div>
    </DialogContent>
  </Dialog>
);

export const Grid = ({
  cols = 2,
  children,
  gap = 4,
}: {
  cols?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  gap?: number | string;
}) => {
  const colsClass = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[cols] || "md:grid-cols-2";

  const gapClass = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    12: "gap-12",
  }[gap] || "gap-4";

  return (
    <div className={`grid grid-cols-1 ${colsClass} ${gapClass} mb-12`}>
      {children}
    </div>
  );
};

export const Step = ({ number, title, children }: any) => (
  <div className="relative pl-16 pb-12 last:pb-0 group">
    <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-iconBg/50 border border-iconBg flex items-center justify-center font-black text-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
      {number}
    </div>
    <div className="absolute left-6 top-12 bottom-0 w-px bg-iconBg group-last:hidden" />
    <h4 className="text-xl font-bold text-darkText mb-2">{title}</h4>
    <div className="text-lightText leading-relaxed">{children}</div>
  </div>
);

export const OutcomeCard = ({ title, value, icon: Icon, color = "primary" }: any) => {
  const colorMap: any = {
    primary: 'text-primary bg-primary/10 border-primary/20',
    green: 'text-green-500 bg-green-500/10 border-green-500/20',
    blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    yellow: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
  };
  
  return (
    <div className="p-8 rounded-[2rem] border border-iconBg bg-linear-to-br from-cardBg/50 to-bg border-b-4 border-b-primary/30 relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
        {Icon && <Icon size={120} />}
      </div>
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${colorMap[color] || colorMap.primary}`}>
        {Icon && <Icon size={24} />}
      </div>
      <div className="space-y-1 relative z-10">
        <span className="text-4xl lg:text-5xl font-black text-darkText tracking-tighter block">{value}</span>
        <h3 className="text-sm font-bold text-lightText uppercase tracking-widest">{title}</h3>
      </div>
    </div>
  );
};

// 4. Feature Grid
export const FeatureGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
    {children}
  </div>
);

export const FeatureCard = ({ title, description, icon: Icon }: any) => (
  <div className="p-6 rounded-2xl border border-iconBg bg-cardBg/50 hover:border-primary/30 transition-colors group">
    <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
      {Icon && <Icon size={20} />}
    </div>
    <h3 className="font-bold text-darkText mb-2">{title}</h3>
    <p className="text-sm text-lightText leading-relaxed">{description}</p>
  </div>
);

// 5. Technical Challenges
export const ChallengeCard = ({ title, problem, solution, result }: any) => (
  <div className="space-y-6 p-8 rounded-3xl border border-iconBg bg-cardBg mb-8">
    <h3 className="text-xl font-bold text-darkText">{title}</h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 flex items-center gap-2">
          <Info size={12} /> The Problem
        </h4>
        <p className="text-lightText leading-relaxed">{problem}</p>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-2 flex items-center gap-2">
          <CheckCircle2 size={12} /> The Solution
        </h4>
        <p className="text-lightText leading-relaxed">{solution}</p>
      </div>
      <div className="pt-4 border-t border-iconBg">
        <span className="text-xs font-bold text-primary flex items-center gap-2">
          <ChevronRight size={14} /> Result: {result}
        </span>
      </div>
    </div>
  </div>
);

// 6. API Reference
export const ApiDialog = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="w-full md:w-fit border-iconBg">
        <Server size={16} className="mr-2" /> Explore API Endpoints
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl h-[80vh] bg-bg border-iconBg flex flex-col p-0">
      <DialogHeader className="p-6 border-b border-iconBg">
        <DialogTitle>API Reference</DialogTitle>
      </DialogHeader>
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-8">
          {children}
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const ApiEndpoint = ({ method, path, description }: any) => (
  <div className="space-y-2 pb-6 border-b border-iconBg last:border-0">
    <div className="flex items-center gap-3">
      <Badge className={
        method === 'GET' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
        method === 'POST' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
        method === 'PUT' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
        'bg-red-500/10 text-red-500 border-red-500/20'
      }>
        {method}
      </Badge>
      <code className="text-sm font-mono text-darkText">{path}</code>
    </div>
    <p className="text-sm text-lightText">{description}</p>
  </div>
);

// 7. Event Flow
export const EventFlow = ({ children }: { children: React.ReactNode }) => (
  <div className="p-8 rounded-3xl border border-iconBg bg-cardBg mb-12">
    <div className="space-y-8 relative">
       {children}
    </div>
  </div>
);

export const EventStep = ({ title, description, isLast = false }: any) => (
  <div className="relative pl-10">
    {!isLast && (
      <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-primary/20" />
    )}
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
      <div className="w-2 h-2 rounded-full bg-primary" />
    </div>
    <div className="space-y-1">
      <h4 className="font-bold text-darkText">{title}</h4>
      <p className="text-sm text-lightText">{description}</p>
    </div>
  </div>
);

// 8. Metrics Table
export const MetricsTable = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-hidden rounded-2xl border border-iconBg bg-cardBg mb-12">
    <table className="w-full text-left text-sm">
      <thead className="bg-iconBg/30 text-lightText uppercase tracking-widest text-[10px] font-bold">
        <tr>
          <th className="px-6 py-4">Optimization</th>
          <th className="px-6 py-4 text-right">Result</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-iconBg">
        {children}
      </tbody>
    </table>
  </div>
);

export const MetricRow = ({ label, value }: { label: string, value: string }) => (
  <tr>
    <td className="px-6 py-4 font-medium text-darkText">{label}</td>
    <td className="px-6 py-4 text-right text-primary font-bold">{value}</td>
  </tr>
);

// 9. Project Gallery
export const ImageGallery = ({ images }: { images: { src: string, alt: string, title: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    {images.map((img, i) => (
      <div key={i} className="group space-y-3">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-iconBg bg-cardBg">
          <Image loading="lazy" src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <p className="text-xs font-bold text-lightText px-2">{img.title}</p>
      </div>
    ))}
  </div>
);

// 10. Project Tree
export const ProjectTree = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 rounded-2xl border border-iconBg bg-cardBg mb-12">
    <FileTree className="bg-transparent" initialSelectedId="root">
      {children}
    </FileTree>
  </div>
);

export { Folder, File };

export const TechBadge = ({ name, icon: Icon }: any) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-iconBg bg-cardBg/30 hover:border-primary/50 transition-colors cursor-default group">
    {Icon && <Icon size={14} className="text-primary group-hover:scale-110 transition-transform" />}
    <span className="text-xs font-bold text-darkText">{name}</span>
  </div>
);

// 11. Tech Stack
export const TechStack = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2 mb-12">
    {items.map((item, i) => (
      <Badge key={i} variant="outline" className="px-3 py-1.5 border-iconBg bg-iconBg/30 text-darkText">
        {item}
      </Badge>
    ))}
  </div>
);

// 12. Callout
export const Callout = ({ children, type = 'info' }: { children: React.ReactNode, type?: 'info' | 'warning' | 'error' | 'success' }) => {
  const styles = {
    info: 'bg-blue-500/5 border-blue-500/20 text-blue-200',
    warning: 'bg-yellow-500/5 border-yellow-500/20 text-yellow-200',
    error: 'bg-red-500/5 border-red-500/20 text-red-200',
    success: 'bg-green-500/5 border-green-500/20 text-green-200'
  };
  
  return (
    <div className={`p-4 rounded-xl border ${styles[type]} mb-8 flex gap-3`}>
      <Info size={18} className="shrink-0 mt-0.5" />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

// 13. Timeline
export const Timeline = ({ items }: { items: { date: string, title: string, description: string }[] }) => (
  <div className="space-y-8 mb-12">
    {items.map((item, i) => (
      <div key={i} className="flex gap-4">
        <div className="w-24 shrink-0 text-xs font-bold text-lightText/60 pt-1 uppercase tracking-tighter">
          {item.date}
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-darkText">{item.title}</h4>
          <p className="text-sm text-lightText">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

// Re-export lucide icons so MDX files can reference them directly
export { Server, Layout, Database, MessageSquare, Shield, Activity, Share2, Info, ChevronRight, CheckCircle2, Calendar, Github, ExternalLink, FileText };
