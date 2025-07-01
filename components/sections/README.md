# Section Components

This directory contains modular, reusable section components that were extracted from the monolithic `LandingPage.tsx` component.

## Components

### Core Sections
- **BlockArt** - Main hero banner with title and subtitle
- **OurStorySection** - Story section with image and text content
- **ValuesSection** - Core values/principles display
- **MembersSection** - Team members showcase
- **AlumniSpotlightSection** - Featured alumni stories
- **AchievementsSection** - Accomplishments and impact
- **NewsSection** - News and media coverage
- **GallerySection** - Photo gallery grid
- **EventsSection** - Upcoming events display
- **ContactSection** - Contact information

## Benefits of This Structure

### 1. **Reusability**
- Each section can be used independently in other pages
- Easy to mix and match sections for different layouts
- Consistent styling and behavior across the site

### 2. **Maintainability**
- Smaller, focused components are easier to understand and modify
- Changes to one section don't affect others
- Clear separation of concerns

### 3. **Performance**
- Components can be lazy-loaded if needed
- Smaller bundle sizes for individual sections
- Better code splitting opportunities

### 4. **Developer Experience**
- Easier to work on specific features
- Better code organization
- Clearer component responsibilities

## Usage

```tsx
import { BlockArt, ValuesSection, ContactSection } from './sections';

export default function MyPage() {
  return (
    <div>
      <BlockArt 
        title="Custom Title"
        subtitle="Custom subtitle"
      />
      <ValuesSection />
      <ContactSection 
        email="custom@email.com"
        phone="+1234567890"
      />
    </div>
  );
}
```

## Props Interface

Each component accepts props for customization:

- **title** - Section heading (optional, has defaults)
- **data arrays** - Content arrays (optional, have defaults)
- **styling props** - Background colors, spacing, etc.

## Adding New Sections

1. Create a new component file in this directory
2. Define TypeScript interfaces for props
3. Include default values for all optional props
4. Export from `index.ts`
5. Add to the main LandingPage if needed

## Best Practices

- Always provide default values for optional props
- Use TypeScript interfaces for type safety
- Keep components focused on a single responsibility
- Use consistent naming conventions
- Include proper accessibility attributes 