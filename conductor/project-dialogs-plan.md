# Transition Project Pages to Modular Dialogs

## Objective
Replace the dedicated individual project pages (`app/projects/[slug]/page.tsx`) with a modular, comprehensive Dialog view that renders directly inside the `ProjectsGallery.tsx`. This includes updating the data schema to support API Endpoints and Architecture sections.

## Key Files & Context
- **`content-collections.config.ts`**: Will be updated to include `apiEndpoints` in the schema and leverage the existing `architecture` field.
- **`components/Cards/ProjectsGallery.tsx`**: Will be updated to consume data from `allProjects` (Content Collections) instead of `lib/projects.ts` and handle the new Dialog logic.
- **`components/Cards/ProjectCard/`**: Will be updated to open the new comprehensive dialog.
- **`app/projects/[slug]/page.tsx`**: Target for deprecation and removal.

## Implementation Steps

### Phase 1: Schema and Data Updates
1. **Update `content-collections.config.ts`**:
   - Add an optional `apiEndpoints` array to the project schema. Structure: `z.array(z.object({ method: z.string(), path: z.string(), description: z.string() }))`.
   - Ensure the `architecture` field is properly utilized (already an optional string).
2. **Migrate Content**: Update the existing `.mdx` files in `content/projects/` to include `apiEndpoints` and `architecture` content if needed for testing.

### Phase 2: Modular Dialog Components
1. Create a new directory `components/Cards/ProjectDetailsDialog/` (or similar) to house the modular components.
2. Build the following sub-components to keep the code modular and avoid a massive single file:
   - `ProjectDetailsDialog.tsx` (Main Dialog container)
   - `ProjectHeader.tsx` (Hero image, title, metrics, status, GitHub/Live links)
   - `ProjectContent.tsx` (Renders the compiled MDX content)
   - `ProjectApiEndpoints.tsx` (New section iterating through `apiEndpoints`)
   - `ProjectArchitecture.tsx` (New section displaying architecture details)
   - `ProjectSidebar.tsx` (Tech stack, role, etc.)

### Phase 3: Integration
1. **Update `components/Cards/ProjectsGallery.tsx`**:
   - Import `allProjects` from `content-collections` instead of `lib/projects.ts`.
2. **Update Card/Trigger logic**:
   - Connect the new `ProjectDetailsDialog` to the individual project cards in the gallery.
   - Pass the full Content Collection `Project` object down to the new dialog.

### Phase 4: Cleanup
1. Delete `app/projects/[slug]/page.tsx` and the `[slug]` directory to remove the dedicated routing.
2. Clean up `lib/projects.ts` if it is no longer used elsewhere in the application to prevent data duplication.

## Verification & Testing
- Build the project to ensure type safety and Content Collections schema validity.
- Test the Dialog rendering in `ProjectsGallery` across desktop and mobile (responsive) views.
- Ensure MDX content, API Endpoints, and Architecture sections format correctly and scroll properly within the Dialog.