# 720p Gallery Optimization Plan

## Objective
Optimize the `ProjectsGallery` dialog and `ProjectCard` components so that the entire grid fits vertically on a 720p display without requiring a scrollbar.

## Scope & Impact
- **`components/Cards/ProjectCard/index.tsx`**: Reduces vertical footprint of individual cards.
- **`components/Cards/ProjectsGallery.tsx`**: Reduces vertical padding and gaps within the dialog container.

## Implementation Steps

### 1. Ultra-Compact Project Cards
Modify `ProjectCard/index.tsx`:
- Reduce the image container height to `h-24 sm:h-28` (96px - 112px).
- Reduce the description from `line-clamp-2` to `line-clamp-1` to save an extra line of text.
- Adjust the internal padding of the card content from `p-2 sm:p-3` to `p-2` universally to tighten the layout.

### 2. Minimal Dialog Padding
Modify `ProjectsGallery.tsx`:
- Update `DialogContent` to use `max-h-[95vh]` to maximize usable screen real estate.
- Reduce the sticky header padding to `py-3 lg:py-4`.
- Reduce the padding around the year sections (e.g., `py-12` to `py-4 lg:py-6`).
- Reduce the gap between year blocks and grid items (e.g., `gap-12` to `gap-4`).
- Slightly reduce the font size of the Year heading to `text-xl lg:text-2xl`.

## Verification
- Review the component on a simulated 720p screen (1280x720).
- Confirm that multiple years (e.g., 2024 and 2023) fit within the single view without triggering the internal dialog scrollbar.