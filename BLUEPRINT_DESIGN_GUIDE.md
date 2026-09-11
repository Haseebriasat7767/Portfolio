# The Blueprint Portfolio Redesign
## Design Direction & Implementation Guide

### Overview
"The Blueprint" is an architectural visualization-themed portfolio redesign that positions the agency as a digital architect. The website "constructs itself" as users scroll, using blueprint grid patterns, before/after transformations, and a phased process narrative.

### Visual Identity

#### Color Palette
- **Background**: `#06060a` (dark navy)
- **Panel/Surface**: `#101018` (slightly lighter)
- **Text**: `#f2f2f5` (off-white)
- **Muted**: `#8b8b98` (gray)
- **Primary Accent**: `#7c5cff` (purple) — use for CTAs, primary interactions
- **Secondary Accent**: `#35e0c9` (cyan/teal) — use for highlights, borders, grid elements

#### Typography
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Headlines**: Bold (800), letter-spacing: -0.02em
- **Body**: Regular weight, 16px size
- **Accents**: Uppercase labels with tracking (0.1em+)

#### Design Elements
1. **Blueprint Grid**: Subtle background pattern using cyan at 0.05 opacity
   ```css
   background-image:
     linear-gradient(0deg, transparent 24%, rgba(53, 224, 201, 0.05) 25%...),
     linear-gradient(90deg, transparent 24%, rgba(53, 224, 201, 0.05) 25%...);
   background-size: 60px 60px;
   ```

2. **Corner Brackets**: Accent elements in cyan, placed at 4 corners of key sections
   - Width: 40px, Height: 40px, Border: 2px solid

3. **Gradient Accents**: Linear gradients using purple to cyan
   - Headlines: 120deg gradient from white → cyan → purple
   - CTAs: Gradient backgrounds with shadow effects

4. **Border Styling**: 1px borders using `rgba(53, 224, 201, 0.1)` for subtle definition

### Page Structure

#### 1. Hero Section
- **Visual**: Blueprint grid background with accent lines
- **Content**: 
  - Eyebrow: "Building Digital Experiences"
  - H1: "Where Vision Becomes Blueprint"
  - Subtitle: Supporting copy about architecture metaphor
  - CTA Group: Primary + Ghost button
- **Interaction**: Scroll reveals construction animations below
- **Height**: Full viewport (900px)

#### 2. Featured Transformations
- **Visual**: Before/After project cards showing transformation
- **Layout**: 2-column grid
- **Card Structure**:
  - Before/After visual split (show basic → transformed)
  - Project name + type
  - Key metrics (growth percentages, engagement, retention)
- **Count**: 6 projects total (2 per artboard, repeat pattern for full implementation)
- **Metrics**: Lead growth, engagement increase, conversion improvements

#### 3. Process Breakdown
- **Visual**: 4-step process with connecting line
- **Steps**:
  1. **Foundation** — Understanding vision & requirements
  2. **Design** — Interactive prototypes & design systems
  3. **Development** — Engineering performant experiences
  4. **Launch** — Deploy, optimize, iterate
- **Design**: Numbered badges (gradient fill), blueprint grid accents per step
- **Interaction**: Steps reveal with horizontal scroll or timeline animation

#### 4. Results & Impact
- **Visual**: 3-column stats grid with blueprint overlay
- **Content**:
  - +150% Average Engagement
  - 6 Featured Projects
  - 100% Client Satisfaction
- **Accents**: Blueprint grid background pattern with transparency
- **CTA**: Final conversion button with supporting copy

### Animation & Interaction Patterns

#### Scroll Interactions
- **Hero Grid**: Subtle grid reveal as users scroll past hero
- **Before/After**: Slide-in animation from opposite sides on scroll into view
- **Process Steps**: Sequential fade-in with connecting line animation

#### Hover States
- **Cards**: 8px translateY, enhanced shadow (box-shadow: 0 24px 60px rgba(0,0,0,0.4))
- **Buttons**: 2px translateY, increased shadow intensity
- **Links**: Color shift to accent-2

#### Loading/Scroll
- **Dot Animation**: Pulse effect (opacity 0.3 → 1.0, 2s cycle)
- **Grid Fade**: Blueprint grid opacity animates from 0.2 → 0.4 on scroll

### Component Specifications

#### Buttons
```
Primary:
- Background: linear-gradient(120deg, #7c5cff, #a78bff)
- Padding: 14px 28px
- Border-radius: 999px
- Shadow: 0 8px 30px rgba(124, 92, 255, 0.35)
- Hover: translateY(-2px), shadow 0 12px 40px

Ghost:
- Background: transparent
- Border: 1px solid rgba(255, 255, 255, 0.08)
- Hover: border-color: rgba(255, 255, 255, 0.3)
```

#### Cards
```
- Background: var(--panel) or with gradient overlay
- Border: 1px solid rgba(53, 224, 201, 0.1)
- Border-radius: 12-20px
- Padding: 20-32px
- Overflow: hidden (for background patterns)
```

#### Eyebrow Labels
```
- Font: 12px, 600 weight, uppercase
- Tracking: 0.14em
- Color: var(--accent-2)
- Prefix: Dot with glow effect
```

### Responsive Breakpoints

- **Desktop**: 1440px (full blueprint grid, 3-column layouts)
- **Tablet**: 900px (grid → 2 columns, tighter spacing)
- **Mobile**: 600px (stack to 1 column, simplified grid)

### Implementation Priority

**Phase 1** (Hero + Basic Layout):
- Blueprint grid background system
- Typography hierarchy
- Color tokens in CSS variables
- Basic responsive grid

**Phase 2** (Section Components):
- Project cards with before/after split
- Process timeline with step counter
- Results metric cards
- Gradient and border treatments

**Phase 3** (Interactions):
- Scroll animations (Framer Motion)
- Card hover effects
- Button state changes
- Grid fade on scroll

**Phase 4** (3D Enhancements):
- Three.js architecture visualization
- Animated blueprint reveals
- 3D model integration in hero/project sections

### Design File Reference
See interactive canvas: [The Blueprint Portfolio Design](https://claude.ai/code/artifact/8b10826b-4c93-4258-8f99-996adf673bc7)

Four artboards showing full user journey:
1. Hero with blueprint theme
2. Projects with transformation narratives
3. Process with architectural breakdown
4. Results with impact metrics and conversion CTA
