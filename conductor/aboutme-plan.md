# AboutMe Alignment Improvement Plan

## Objective
Improve the UI alignment and layout of the `AboutMe.tsx` component while ensuring its height does not expand beyond its intended `row-span-3` bounds.

## Key Changes
1. **Container Structure:** Change the outermost `div` to `flex flex-col h-full` and use `overflow-hidden` to prevent any unintended overflow.
2. **Header Row (`flex flex-col sm:flex-row`):**
   - Keep the profile picture and text aligned. On mobile, the image should be above the text (standard UI pattern), rather than `flex-col-reverse` which places it below.
   - Adjust spacing and alignment so the "Available To Work" badge and the Resume button are cleanly aligned with the name and description.
3. **Info Badges (Skills/Location):**
   - The current `flex-wrap justify-center` can create uneven gaps.
   - We'll tighten the padding and use a cleaner wrap or grid. We'll use small tags to save vertical space.
4. **Bottom Social Buttons:**
   - Remove the `sm:absolute sm:inset-x-8 sm:bottom-6` to avoid overlap issues.
   - Use `mt-auto` on the bottom buttons container to push them cleanly to the bottom of the card.
   - Ensure the buttons are part of the normal document flow so they don't overlap the content above.

## Verification
- Check the visual alignment of the header.
- Ensure the card doesn't overflow or break the 6-row grid layout on large screens.
