# Next.js 15 & Tailwind v4 Migration Plan

## Objective
Migrate the portfolio application to the latest versions of Next.js (15), React (19), Tailwind CSS (v4), and `shadcn/ui`, utilizing automated official codemods to handle the heavy lifting. We will also ensure a clean starting point by reverting all uncommitted TypeScript changes while preserving your markdown content.

## Scope & Impact
- **React & Next.js**: Upgrading to React 19 and Next.js 15. This introduces async request APIs (`params`, `searchParams`) and changes default caching behaviors. The Next.js codemod will automate the bulk of syntax updates.
- **Tailwind CSS v4**: Moving to a CSS-first configuration. `tailwind.config.js`/`ts` will be removed, and theme settings will be centralized in `globals.css` via the `@theme` directive.
- **Shadcn/ui**: Re-initializing the CLI to support the Tailwind v4 integration and update components to their React 19 equivalents.
- **Working Tree**: Reverting recent experimental UI modifications to ensure a stable base for the migration.

## Proposed Solution (Automated Codemod Strategy)
We will leverage official upgrade tools rather than manual rewrites to minimize human error and ensure adherence to the new framework standards. 

## Implementation Plan

### Phase 1: Revert & Prepare Workspace
1. Revert recent uncommitted `.tsx` and `.ts` changes (e.g., `ProjectDialog`, `ProjectArchitecture`) using `git restore .`.
2. Clean untracked experimental files (ensuring markdown files in `content/projects` are ignored/preserved).

### Phase 2: Next.js 15 & React 19 Upgrade
1. Run `npx @next/codemod@canary upgrade latest` to update dependencies to Next.js 15 and React 19.
2. Address any residual async API warnings (`params`, `searchParams`) if the codemod misses edge cases in dynamic routes.
3. Update `@types/react` and `@types/react-dom` to the latest v19.

### Phase 3: Tailwind CSS v4 Migration
1. Run `npx @tailwindcss/upgrade` to auto-migrate the Tailwind configuration.
2. Verify `tailwind.config.ts` has been successfully absorbed into `styles/globals.css`.
3. Update `postcss.config.js` and PostCSS dependencies if necessary to align with Tailwind v4's new first-party Vite/bundler integrations.

### Phase 4: Shadcn/ui & UI Library Updates
1. Re-initialize `shadcn/ui` with `npx shadcn@latest init --force` to apply the Tailwind v4 compatible CSS variables and setup.
2. Update specific components (like `framer-motion` to `motion`, `lucide-react`) to their latest versions via `npm install` or `pnpm update`.
3. Run the project locally (`pnpm dev`) to fix any broken component imports or removed React 19 patterns (e.g., `forwardRef` deprecations).

## Verification & Testing
- Build the project (`pnpm build`) to ensure type safety and production readiness.
- Verify that standard routing and MDX rendering remain intact with Next 15's new caching defaults.
- Check styling across components to ensure the Tailwind v4 migration didn't break custom colors or plugins.

## Rollback Strategy
If the automated upgrades introduce cascading breakages, we will abort the migration, discard the changes using `git reset --hard HEAD`, and reassess a manual, incremental approach.