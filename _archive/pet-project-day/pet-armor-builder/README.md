# Pet Armor Builder 🛡️

A delightful visual upselling tool that shows pets getting "armored up" as customers select higher coverage tiers. Built for Spot Pet Insurance's Pet Project Day.

## 🚀 Quick Start

```bash
# Navigate to project directory
cd pet-project-day/pet-armor-builder

# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Architecture

### Core Files & What They Do

#### **Types** (`/types/coverage.ts`)
- **Purpose**: TypeScript definitions for coverage tiers, armor pieces, and data structures
- **Key Types**:
  - `CoverageTier`: none | basic | standard | enhanced | ultimate
  - `ArmorPieceType`: collar | vest | helmet | leg-guards | shield | cape
  - `ArmorPiece`, `CoverageOption`, `AddOn`: Data interfaces

#### **Data** (`/data/coverageData.ts`)
- **Purpose**: Business logic defining coverage tiers and their associated armor
- **Exports**:
  - `coverageOptions`: Array of coverage tiers with pricing and armor pieces
  - `armorPieces`: Metadata for each armor piece (z-index, tier, description)
  - `addOns`: Optional coverage add-ons (wellness, dental)
- **Easy to modify**: Change prices, add new tiers, or customize armor progression here

#### **Components**

##### `ArmorPiece.tsx`
- **Purpose**: Renders individual armor pieces with entrance animations
- **How it works**:
  - Takes `type`, `zIndex`, and `delay` as props
  - Uses Framer Motion's `motion.div` for scale/fade animations
  - Spring physics for bouncy entrance effect
  - Color-coded by armor type (yellow collar, blue vest, etc.)
- **Animation**: Scales from 0 to 1 with opacity fade, staggered by delay

##### `PetArmorBuilder.tsx`
- **Purpose**: Main orchestrator component that displays the pet + armor layers
- **How it works**:
  - Shows base pet illustration (emoji placeholder)
  - Uses `AnimatePresence` to handle armor appearing/disappearing
  - Stagger animations (0.2s delay between each piece)
  - Special glow effect when fully armored (5+ pieces)
- **Key Feature**: z-index layering ensures armor appears in correct order

##### `CoverageSelector.tsx`
- **Purpose**: Interactive UI for selecting coverage tiers
- **How it works**:
  - Maps over `coverageOptions` to create clickable cards
  - Hover animations (scale + lift effect)
  - Active state highlighting
  - Shows price, description, and armor piece count

#### **Main Page** (`/app/page.tsx`)
- **Purpose**: Brings everything together into the demo experience
- **Features**:
  - State management for selected tier and pet type
  - Dog/Cat toggle
  - Split layout: pet display on left, info panel on right
  - Coverage selector at bottom
- **State Flow**: User clicks coverage → updates `selectedTier` → triggers armor animation

## 🎨 How the Animation System Works

### Animation Flow
1. User selects a coverage tier
2. `page.tsx` updates `selectedTier` state
3. New `activeArmorPieces` array is calculated
4. `PetArmorBuilder` receives updated armor list
5. `AnimatePresence` detects new/removed pieces
6. Each piece animates in with a staggered delay (index * 0.2s)

### Framer Motion Features Used
- **`motion.div`**: Animatable div components
- **`AnimatePresence`**: Handles enter/exit animations
- **`initial/animate/exit`**: Define animation states
- **`transition`**: Spring physics with stiffness/damping
- **`whileHover/whileTap`**: Interactive button effects

### Z-Index Layering
Armor pieces stack in this order (back to front):
- 0: Cape (behind everything)
- 1: Leg guards
- 2: Vest
- 3: Collar
- 4: Helmet
- 5: Shield (transparent overlay)
- 10: Base pet (middle layer)
- 20: Glow effect (top layer)

## 🚧 Current Gaps & Next Steps

### 1. **Visual Assets** 🎨 (BIGGEST GAP)
**Current State**: Using colored rectangles and emojis as placeholders

**What's Needed**:
- Actual pet illustrations (dog/cat SVGs or PNGs)
- Armor piece SVGs for each type
- Proper positioning/sizing for each piece

**Options**:
- **Design internally**: Have a designer create custom pet + armor assets
- **Commission artwork**: Hire an illustrator
- **Use AI generation**: Tools like DALL-E, Midjourney for concept art
- **Find open-source**: Search for pet SVGs and adapt them
- **Use 3D models**: Could render pets in 3D with Three.js (more complex)

**Implementation Path**:
```tsx
// Replace placeholders in PetArmorBuilder.tsx:
<img src="/assets/pets/dog-base.svg" alt="Dog" />

// Replace in ArmorPiece.tsx:
<img src={`/assets/armor/${type}.svg`} alt={name} />
```

### 2. **Armor Positioning**
**Current State**: Hardcoded CSS positioning in `ArmorPiece.tsx`

**What's Needed**:
- Precise positioning for each armor piece
- Different positions for dog vs. cat
- Responsive scaling for different screen sizes

**Fix**:
```tsx
const positions = {
  dog: { collar: { top: '30%', left: '50%' }, ... },
  cat: { collar: { top: '28%', left: '50%' }, ... }
};
```

### 3. **Animation Polish**
**Current State**: Basic spring animations

**Enhancements Possible**:
- Sound effects when armor appears
- Particle effects (sparkles, glows)
- Armor pieces "locking into place" animation
- Celebratory animation when reaching Ultimate tier
- Armor shake/bounce on hover
- More dramatic entrance (sliding from edges, spinning)

**Example**:
```tsx
// Add rotation + scale:
initial={{ scale: 0, opacity: 0, rotate: -180 }}
animate={{ scale: 1, opacity: 1, rotate: 0 }}
```

### 4. **Add-On System**
**Current State**: Defined in data but not implemented in UI

**What's Needed**:
- Checkboxes for add-ons (wellness, dental)
- Add-on armor pieces animate on when selected
- Price updates when add-ons selected

### 5. **Mobile Responsiveness**
**Current State**: Works but not optimized for mobile

**Improvements**:
- Stack layout vertically on mobile
- Adjust pet display size
- Touch-friendly buttons
- Coverage cards in scrollable carousel

### 6. **Integration with Real Quote Flow**
**Current State**: Standalone demo

**For Production**:
- Integrate with actual Spot pricing API
- Connect to real coverage plans
- Persist user selection
- Add to quote flow at appropriate step
- A/B testing setup to measure conversion impact

### 7. **Accessibility**
**Gaps**:
- No keyboard navigation
- Missing ARIA labels
- No reduced-motion preference support

**Fixes**:
```tsx
// Respect prefers-reduced-motion:
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
```

### 8. **Performance**
**Current**: Fine for demo, but consider:
- Lazy load armor pieces
- Optimize SVG assets
- Preload critical animations
- Use `will-change` for better performance

## 🎯 Priority Next Steps

### Immediate (for Pet Project Day demo):
1. ✅ Get basic structure working (DONE)
2. ⚠️ **Replace placeholder pet with better emoji/icon** (quick win)
3. ⚠️ **Test animations across browsers**

### Short-term (if pursuing further):
1. Create proper pet illustrations (dog/cat)
2. Design 6 armor piece SVGs
3. Position armor accurately on pets
4. Add sound effects

### Long-term (production-ready):
1. Real pricing integration
2. A/B testing framework
3. Mobile optimization
4. Accessibility compliance
5. Analytics tracking
6. Different breeds (specific breed illustrations)

## 🛠️ Customization Guide

### Change Coverage Tiers
Edit `/data/coverageData.ts`:
```typescript
{
  id: 'premium',
  name: 'Premium Coverage',
  price: 79,
  description: 'New tier description',
  armorPieces: ['collar', 'vest', 'helmet'],
}
```

### Add New Armor Piece
1. Add type to `/types/coverage.ts`:
```typescript
export type ArmorPieceType = '...' | 'wings';
```

2. Add positioning in `ArmorPiece.tsx`:
```typescript
wings: 'top-[25%] left-[50%] w-40 h-20 ...'
```

3. Add to coverage tier in `coverageData.ts`

### Adjust Animation Speed
In `ArmorPiece.tsx`:
```typescript
transition={{
  delay,
  duration: 0.5, // ← Change this (0.3 = faster, 0.8 = slower)
  type: 'spring',
  stiffness: 200, // ← Higher = more bouncy
  damping: 15,
}}
```

### Change Colors
In `ArmorPiece.tsx`, modify `getArmorColor()`:
```typescript
collar: 'bg-yellow-500', // Change to any Tailwind color
```

## 📊 Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling

## 💡 Potential Demo Talking Points

1. **"Visual storytelling for insurance"** - Makes abstract coverage concrete
2. **"Gamification of upselling"** - Engaging, not pushy
3. **"Framer Motion showcase"** - Great example of animation library
4. **"Modular architecture"** - Easy to extend and customize
5. **"Mobile-first thinking"** - Could work great in mobile quote flow

## 🎮 Demo Script

1. Open page → see unarmored pet
2. Click "Basic Coverage" → watch collar appear
3. Click "Standard" → vest animates on
4. Progress to "Ultimate" → full armor + glow effect!
5. Toggle Dog/Cat → same experience for both
6. Explain: "This could be embedded in the quote flow"

## 📝 Notes

- All animations are CSS-based (no canvas/WebGL) for simplicity
- Emojis used for pet are platform-dependent (will look different on iOS/Android/Windows)
- Project uses App Router (modern Next.js approach)
- No backend needed - all client-side
- Ready for deployment to Vercel with zero config

---

**Built for Spot Pet Insurance Pet Project Day 2024** 🐾
