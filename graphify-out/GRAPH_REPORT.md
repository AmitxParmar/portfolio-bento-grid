# Graph Report - portfolio-site  (2026-09-15)

## Corpus Check
- 110 files · ~226,251 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 636 nodes · 806 edges · 78 communities (30 shown, 35 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `13f66e6a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- mdx-components.tsx
- cn
- devDependencies
- dialog.tsx
- compilerOptions
- button.tsx
- HireCrowd
- app/page.tsx
- .eslintrc.json
- file-tree.tsx
- enterprise-knowledgebase.mdx
- components.json
- modular-mart.mdx
- Advanced v4 Patterns
- scripts
- hotel-booking.mdx
- quick-chat.mdx
- stream-io.mdx
- Tailwind Design System (v4)
- dependencies
- Patterns
- event-driven-microservices-rabbitmq.mdx
- designing-high-density-bento-grids.mdx
- content-collections.ts
- MCP Tools: code-review-graph
- Debug Issue
- Explore Codebase
- Refactor Safely
- Review Changes
- next-template
- ProjectApiEndpoints.tsx
- ProjectArchitecture.tsx
- useIsMobile
- fonts.ts
- clsx
- cobe
- @content-collections/core
- @content-collections/next
- crg-session-start.sh
- crg-update.sh
- gsap
- lucide-react
- motion
- next.config.mjs
- next-env.d.ts
- next-mdx-remote
- next-themes
- mermaid
- next
- radix-ui
- @radix-ui/react-accordion
- @radix-ui/react-dialog
- @radix-ui/react-scroll-area
- @radix-ui/react-slot
- react
- react-dom
- shadcn
- sharp
- swiper
- tailwind-merge
- tailwindcss-animate
- tw-animate-css
- vaul
- zod
- general.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 52 edges
2. `compilerOptions` - 17 edges
3. `HireCrowd` - 15 edges
4. `Button()` - 12 edges
5. `Badge()` - 10 edges
6. `scripts` - 10 edges
7. `DialogContent()` - 7 edges
8. `DialogTitle()` - 7 edges
9. `getAllProjects()` - 7 edges
10. `Folder` - 6 edges

## Surprising Connections (you probably didn't know these)
- `generateStaticParams()` --calls--> `getAllProjects()`  [EXTRACTED]
  app/@modal/(.)projects/[slug]/page.tsx → lib/projects.ts
- `ProjectModalPage()` --calls--> `getProjectBySlug()`  [EXTRACTED]
  app/@modal/(.)projects/[slug]/page.tsx → lib/projects.ts
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  app/layout.tsx → lib/utils.ts
- `generateStaticParams()` --calls--> `getAllProjects()`  [EXTRACTED]
  app/projects/[slug]/page.tsx → lib/projects.ts
- `ProjectPage()` --calls--> `getProjectBySlug()`  [EXTRACTED]
  app/projects/[slug]/page.tsx → lib/projects.ts

## Import Cycles
- None detected.

## Communities (78 total, 35 thin omitted)

### Community 0 - "mdx-components.tsx"
Cohesion: 0.05
Nodes (9): ArchitectureViewer(), ArchitectureViewerProps, InteractiveCanvas(), MermaidDiagram(), MermaidDiagramProps, g, getRawText(), pre() (+1 more)

### Community 1 - "cn"
Cohesion: 0.06
Nodes (33): font, geist, metadata, RootLayout(), RootLayoutProps, viewport, Marquee(), MarqueeProps (+25 more)

### Community 2 - "devDependencies"
Cohesion: 0.06
Nodes (35): @content-collections/mdx, eslint, eslint-config-next, eslint-config-prettier, eslint-plugin-react, eslint-plugin-tailwindcss, @ianvs/prettier-plugin-sort-imports, devDependencies (+27 more)

### Community 3 - "dialog.tsx"
Cohesion: 0.06
Nodes (33): generateStaticParams(), ProjectModalPage(), ProjectModalProps, generateStaticParams(), ProjectPage(), ProjectPageProps, InteractiveCanvasProps, BlogCard() (+25 more)

### Community 4 - "compilerOptions"
Cohesion: 0.06
Nodes (30): ./.content-collections/generated, dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+22 more)

### Community 5 - "button.tsx"
Cohesion: 0.11
Nodes (15): BlogPostPageProps, BlogMDX(), BlogMDXProps, ReadingProgressBar(), Icon, Icons, Props, MainNav() (+7 more)

### Community 6 - "HireCrowd"
Cohesion: 0.07
Nodes (27): Architecture, Backend, Challenges, Demo, Efficient Job Feed, Engineering Decisions, Engineering Impact, Faster Job Discovery (+19 more)

### Community 7 - "app/page.tsx"
Cohesion: 0.14
Nodes (11): AboutMe(), ContactMe(), EngineeringHighlights(), LatestWritings(), SystemArchitecturePreview(), TechnicalExpertise(), TechStack(), InteractiveHoverButton (+3 more)

### Community 8 - ".eslintrc.json"
Cohesion: 0.09
Nodes (21): extends, rootDir, overrides, plugins, root, rules, @next/next/no-html-link-for-pages, react/jsx-key (+13 more)

### Community 9 - "file-tree.tsx"
Cohesion: 0.16
Nodes (17): Backend(), Frontend(), ProjectStructures, CollapseButton, Direction, File, Folder, FolderComponentProps (+9 more)

### Community 10 - "enterprise-knowledgebase.mdx"
Cohesion: 0.10
Nodes (20): API Reference, Cons, Data Model, Features, Impact & Results, Key Architectural Decisions, Lessons Learned, Low-Level: Ingestion (+12 more)

### Community 11 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, utils, iconLibrary, menuAccent, menuColor, registries, @magicui (+10 more)

### Community 12 - "modular-mart.mdx"
Cohesion: 0.11
Nodes (17): Architectural Patterns, Cons, Features, Impact & Results, Key Architectural Decisions, Lessons Learned, Overview, Project Structure (+9 more)

### Community 13 - "Advanced v4 Patterns"
Cohesion: 0.14
Nodes (13): Advanced v4 Patterns, Best Practices, Container Queries, Custom Utilities with `@utility`, Do's, Don'ts, Namespace Overrides, Pattern 5: Native CSS Animations (v4) (+5 more)

### Community 14 - "scripts"
Cohesion: 0.14
Nodes (13): name, private, scripts, build, dev, format:check, format:write, lint (+5 more)

### Community 15 - "hotel-booking.mdx"
Cohesion: 0.20
Nodes (9): API Reference, Features, Impact & Results, Lessons Learned, Overview, Performance Optimizations, Project Structure, Screenshots (+1 more)

### Community 16 - "quick-chat.mdx"
Cohesion: 0.20
Nodes (9): API Reference, Event Flow, Features, Impact & Results, Lessons Learned, Overview, Performance Optimizations, Screenshots (+1 more)

### Community 17 - "stream-io.mdx"
Cohesion: 0.20
Nodes (9): API Reference, Features, Impact & Results, Lessons Learned, Overview, Performance Optimizations, Project Structure, Screenshots (+1 more)

### Community 18 - "Tailwind Design System (v4)"
Cohesion: 0.22
Nodes (8): 1. Design Token Hierarchy, 2. Component Architecture, Core Concepts, Detailed patterns and worked examples, Key v4 Changes, Quick Start, Tailwind Design System (v4), When to Use This Skill

### Community 19 - "dependencies"
Cohesion: 0.22
Nodes (9): class-variance-authority, dependencies, class-variance-authority, @radix-ui/react-icons, rehype-pretty-code, shiki, @radix-ui/react-icons, rehype-pretty-code (+1 more)

### Community 20 - "Patterns"
Cohesion: 0.25
Nodes (7): Pattern 1: CVA (Class Variance Authority) Components, Pattern 2: Compound Components (React 19), Pattern 3: Form Components, Pattern 4: Responsive Grid System, Patterns, tailwind-design-system — detailed patterns and worked examples, Utility Functions

### Community 22 - "event-driven-microservices-rabbitmq.mdx"
Cohesion: 0.29
Nodes (6): Ensuring Consumer Idempotency, Key Takeaways, The Asynchronous Solution, The Dual-Write Problem & Transactional Outbox Pattern, The Solution: Transactional Outbox, Why Synchronous Communication Breaks at Scale

### Community 23 - "designing-high-density-bento-grids.mdx"
Cohesion: 0.33
Nodes (5): 1. Visual Hierarchy: Tiered Card Sizing, 2. Avoid Viewport-Locking Traps, Accessibility Matters, Subtle Micro-interactions and Tactile Feedback, The Principles of Effective Bento Architecture

### Community 24 - "content-collections.ts"
Cohesion: 0.33
Nodes (4): Post, Project, posts, projects

### Community 25 - "MCP Tools: code-review-graph"
Cohesion: 0.33
Nodes (5): graphify, Key Tools, MCP Tools: code-review-graph, When to use graph tools FIRST, Workflow

### Community 26 - "Debug Issue"
Cohesion: 0.40
Nodes (4): Debug Issue, Steps, Tips, Token Efficiency Rules

### Community 27 - "Explore Codebase"
Cohesion: 0.40
Nodes (4): Explore Codebase, Steps, Tips, Token Efficiency Rules

### Community 28 - "Refactor Safely"
Cohesion: 0.40
Nodes (4): Refactor Safely, Safety Checks, Steps, Token Efficiency Rules

### Community 29 - "Review Changes"
Cohesion: 0.40
Nodes (4): Output Format, Review Changes, Steps, Token Efficiency Rules

### Community 30 - "next-template"
Cohesion: 0.40
Nodes (4): Features, License, next-template, Usage

## Knowledge Gaps
- **295 isolated node(s):** `Project`, `Post`, `$schema`, `root`, `next/core-web-vitals` (+290 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 382 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **35 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `file-tree.tsx`, `dialog.tsx`, `button.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`, `clsx`, `cobe`, `@content-collections/core`, `@content-collections/next`, `gsap`, `lucide-react`, `motion`, `next-mdx-remote`, `next-themes`, `mermaid`, `next`, `radix-ui`, `@radix-ui/react-accordion`, `@radix-ui/react-dialog`, `@radix-ui/react-scroll-area`, `@radix-ui/react-slot`, `react`, `react-dom`, `shadcn`, `sharp`, `swiper`, `tailwind-merge`, `tailwindcss-animate`, `tw-animate-css`, `vaul`, `zod`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `Project`, `Post`, `$schema` to the rest of the system?**
  _295 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `mdx-components.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.052854122621564484 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.06033182503770739 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._