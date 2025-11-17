# Simple AI Prompts - Full Image Swap Version

**MUCH EASIER APPROACH:** Generate complete images of dogs/cats with different armor levels. No layering needed!

---

## 🎯 What You Need

**6 images per pet type = 12 images total**

### For Dogs:
1. Dog with no armor
2. Dog with light armor
3. Dog with medium armor
4. Dog with heavy armor
5. Dog with ultimate armor
6. Dog with maximum legendary armor

### For Cats (optional):
Same 6 variations but with a cat

---

## 🐕 DOG ARMOR VARIATIONS

### Level 0: No Armor
```
A cute friendly golden retriever sitting upright facing forward, no armor or accessories,
simple cartoon style, mobile game character art, centered in frame, front view,
transparent background PNG, flat 2D design, no shadows, symmetrical, clean vector look,
happy expression
```

### Level 1: Light Armor (Basic Protection)
```
A cute friendly golden retriever sitting upright facing forward, wearing a simple light
blue collar and small chest guard, minimal armor, simple cartoon style, mobile game
character art, centered in frame, front view, transparent background PNG, flat 2D design,
no shadows, symmetrical, happy expression, starter equipment look
```

### Level 2: Medium Armor (Growing Protection)
```
A cute friendly golden retriever sitting upright facing forward, wearing a blue armored
vest covering chest and sides, medium protection level, simple cartoon style, mobile game
character art, centered in frame, front view, transparent background PNG, flat 2D design,
no shadows, symmetrical, determined expression, mid-tier equipment look
```

### Level 3: Heavy Armor (Strong Protection)
```
A cute friendly golden retriever sitting upright facing forward, wearing full blue knight
armor with vest and purple helmet, heavy protection, simple cartoon style, mobile game
character art, centered in frame, front view, transparent background PNG, flat 2D design,
no shadows, symmetrical, brave expression, advanced equipment look
```

### Level 4: Ultimate Armor (Maximum Protection)
```
A cute friendly golden retriever sitting upright facing forward, wearing epic dark blue
and gold knight armor with ornate vest, purple and gold helmet, and cyan glowing shield
aura, ultimate protection, simple cartoon style, mobile game character art, centered in
frame, front view, transparent background PNG, flat 2D design, no shadows, symmetrical,
heroic expression, legendary equipment quality
```

### Level 5: Maximum Legendary (100% Protection)
```
A cute friendly golden retriever sitting upright facing forward, wearing legendary dark
blue and gold knight armor with glowing golden accents, purple and gold ornate helmet,
bright cyan shield aura, golden particles and sparkles around body, maximum legendary
protection, simple cartoon style, mobile game character art, centered in frame, front view,
transparent background PNG, flat 2D design, no shadows, symmetrical, epic heroic expression,
ultimate legendary equipment quality with glowing effects
```

---

## 🐱 CAT ARMOR VARIATIONS (Optional)

Just replace "golden retriever" with "orange tabby cat" in all prompts above!

### Level 0: No Armor (Cat)
```
A cute friendly orange tabby cat sitting upright facing forward, no armor or accessories,
simple cartoon style, mobile game character art, centered in frame, front view,
transparent background PNG, flat 2D design, no shadows, symmetrical, clean vector look,
calm expression
```

*...repeat pattern for levels 1-5 with "orange tabby cat"*

---

## 📐 TECHNICAL SPECS

**Image Requirements:**
- **Size:** 1024x1024px (square)
- **Format:** PNG with transparency
- **Style:** Consistent cartoon/flat design across all levels
- **Composition:** Pet centered, facing forward
- **Background:** Transparent (no background)
- **Shadows:** None (for clean overlay)

---

## 🎨 STYLE CONSISTENCY TIPS

### For Best Results:

1. **Generate all 6 dog levels in one session** - Better style consistency
2. **Use "same art style as previous image"** after the first one
3. **Keep the dog's pose identical** across all levels - only armor changes
4. **Specify the same breed** (golden retriever) for all

### Color Palette Guide:
- Light armor: Light blue (#60A5FA)
- Medium armor: Blue (#3B82F6)
- Heavy armor: Dark blue (#1E40AF) + Purple (#9333EA)
- Ultimate: Dark blue + Gold (#FCD34D) + Cyan glow (#22D3EE)
- Maximum: All of above + Sparkle effects

---

## 🚀 GENERATION WORKFLOW

### Step 1: Start with Level 0 (No Armor)
Generate the base dog first. Get this right before proceeding.

**Check:**
- ✅ Centered in frame
- ✅ Facing forward
- ✅ Clean transparent background
- ✅ Good proportions

### Step 2: Generate Level 1 (Light Armor)
Add "same art style as previous image" to prompt.

**Check:**
- ✅ Dog looks identical, just added light armor
- ✅ Armor is subtle and minimal

### Step 3: Progress through levels 2-5
Each level should show MORE armor, keeping the dog's base appearance consistent.

### Step 4: Test in App
Save images as:
```
/public/assets/pets/
  dog-armor-0.png
  dog-armor-1.png
  dog-armor-2.png
  dog-armor-3.png
  dog-armor-4.png
  dog-armor-5.png
```

---

## 💡 ALTERNATIVE: Simpler Style

If you want an even simpler approach, try geometric/minimalist:

### Geometric Dog (All Levels)
```
A simple geometric dog made of circles and rounded shapes, sitting pose, front view,
[+ armor level description],
flat material design, bold primary colors, minimalist app icon style,
transparent background PNG, no gradients, clean vector look
```

This style:
- ✅ Easier for AI to maintain consistency
- ✅ Cleaner, more "designed" look
- ✅ Works great for UI
- ✅ Less photorealistic, more graphic

---

## 📦 FILE STRUCTURE

```
/public/assets/pets/
  dog-armor-0.png    ← No armor (0 protection)
  dog-armor-1.png    ← Light armor (1-25 protection)
  dog-armor-2.png    ← Medium armor (26-50 protection)
  dog-armor-3.png    ← Heavy armor (51-75 protection)
  dog-armor-4.png    ← Ultimate armor (76-95 protection)
  dog-armor-5.png    ← Maximum armor (96-100 protection)

  cat-armor-0.png    ← Same progression for cats
  cat-armor-1.png
  cat-armor-2.png
  cat-armor-3.png
  cat-armor-4.png
  cat-armor-5.png
```

---

## 🎯 PRIORITY ORDER

**Minimum Viable (3 images):**
1. ⭐ dog-armor-0.png (no armor)
2. ⭐ dog-armor-2.png (medium armor)
3. ⭐ dog-armor-5.png (maximum armor)

**Good Demo (6 images):**
1-6. All dog armor levels

**Full Experience (12 images):**
1-12. All dog + cat armor levels

---

## 🔄 HOW TO USE IN CODE

Once you have images, just drop them in `/public/assets/pets/` and uncomment these lines in `SwapPetDisplay.tsx`:

```tsx
<img
  src={getImagePath()}
  alt={`${petType} with ${getArmorDescription(armorLevel)}`}
  className="w-full h-full object-contain"
/>
```

The code already handles:
- ✅ Smooth cross-fade animations
- ✅ Automatic armor level calculation (based on coverage)
- ✅ Scale/rotation effects on swap
- ✅ Protection score display
- ✅ Celebration effects at max level

---

## 📱 WHERE TO GENERATE

**Recommended platforms:**

1. **ChatGPT Plus** (DALL-E 3)
   - Paste prompts directly
   - Good at following detailed instructions
   - Easy to iterate ("same style as previous")

2. **Microsoft Designer** (free)
   - Free DALL-E access
   - Download as PNG

3. **Midjourney**
   - Add: `--ar 1:1 --no background --style raw`
   - Best quality but needs Discord

---

## 🎬 DEMO SCRIPT

Once you have images:

1. Open http://localhost:3000
2. Start with low coverage (shows dog-armor-0.png)
3. Increase Annual Limit → watch dog upgrade armor
4. Increase Reimbursement → more armor
5. Decrease Deductible → even more armor
6. Add Wellness → glow effects
7. Hit 100 protection → **MAXIMUM ARMOR + CELEBRATION**

The image swaps are smooth with spring animations - looks way better than layering!

---

**TIP:** Generate just 3 images first (levels 0, 2, 5) to test if you like the style before generating all 6!
