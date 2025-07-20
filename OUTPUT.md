[Example output - you should start from scratch]

## Changes Made

### [App]

1. Simplified the `App` component by code splitting it into smaller components.
2. Removed unnecessary imports and streamlined the component structure.

### [images.ts]

1. Added constants for images used in the application.

### [Header]

1. Updated the `Header` component to include a search bar with improved accessibility.
2. Added a logo image with alt text for better accessibility.
3. Improved the styling of the search input for better user experience.

### [Hero]

1. Refactored the `Hero` component to use a background image from constants.
2. Added a search bar with a callback function to handle search input.

### [SearchBar]

1. Updated the `SearchBar` component to handle keydown events for accessibility.
2. Implemented a callback function to handle search input changes.
3. Created a separate type `SearchBarProps` to ensure type safety.
