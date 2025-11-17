# Wellness Background Implementation

## ✅ What's Working Now

The app now correctly swaps images based on **both armor level AND wellness tier**!

### Current Image Structure

```
/public/assets/pets/
  ├── dog-armor-0.png          (naked dog - no wellness variants needed)
  ├── dog-armor-1.png          (light armor - no wellness variants needed)
  │
  ├── dog-armor-2-gold.png     ✅ (vest with GOLD/yellow glow)
  ├── dog-armor-2-platinum.png ✅ (vest with BLUE/cyan glow)
  ├── dog-armor-2-none.png     ❌ MISSING (vest with NO glow)
  │
  ├── dog-armor-3-gold.png     ✅ (vest+collar with GOLD glow)
  ├── dog-armor-3-platinum.png ✅ (vest+collar with BLUE glow)
  ├── dog-armor-3-none.png     ❌ MISSING (vest+collar with NO glow)
  │
  ├── dog-armor-4-gold.png     ✅ (full armor with GOLD glow)
  ├── dog-armor-4-platinum.png ✅ (full armor with BLUE glow)
  ├── dog-armor-4-none.png     ❌ MISSING (full armor with NO glow)
  │
  ├── dog-armor-5-gold.png     ✅ (max armor with GOLD glow)
  ├── dog-armor-5-platinum.png ✅ (max armor with BLUE glow)
  └── dog-armor-5-none.png     ❌ MISSING (max armor with NO glow)
```

## 🎮 How to Test

Open **http://localhost:3000**

### Test Gold Wellness:
1. Set any coverage parameters (not all minimum)
2. Set Wellness to **Gold**
3. **Result:** Dog should have **YELLOW/GOLD glow** around it

### Test Platinum Wellness:
1. Keep coverage parameters elevated
2. Set Wellness to **Platinum**
3. **Result:** Dog should have **BLUE/CYAN glow** around it
4. **Watch the image swap!** - Should smoothly crossfade from gold to platinum

### Test None Wellness:
1. Set Wellness to **None**
2. **Current behavior:** Shows gold glow (fallback)
3. **Desired behavior:** Should show NO glow (need to generate images)

## ⚠️ Current Limitation

**Missing "none" wellness versions** - When user selects wellness = "none", the app currently falls back to showing gold glow images. This is a temporary workaround.

**Why this matters:**
- Users without wellness shouldn't see ANY background glow
- Gold glow should be exclusive to Gold wellness tier
- Platinum glow should be exclusive to Platinum wellness tier

## 🎨 Generate Missing "None" Wellness Images

You need to generate 4 more images (armor levels 2, 3, 4, 5) with **NO background glow**.

### AI Prompts for "None" Wellness Versions

Use these prompts to generate the missing images:

#### Armor Level 2 (Vest Only) - No Glow
```
A cute friendly golden retriever sitting upright facing forward, wearing a blue armored
vest covering chest and sides, medium protection level, simple cartoon style, mobile game
character art, centered in frame, front view, TRANSPARENT BACKGROUND with NO GLOW EFFECT,
flat 2D design, no shadows, symmetrical, determined expression
```

#### Armor Level 3 (Vest + Collar) - No Glow
```
A cute friendly golden retriever sitting upright facing forward, wearing full blue knight
armor with vest and red studded collar, heavy protection, simple cartoon style, mobile game
character art, centered in frame, front view, TRANSPARENT BACKGROUND with NO GLOW EFFECT,
flat 2D design, no shadows, symmetrical, brave expression
```

#### Armor Level 4 (Full Armor) - No Glow
```
A cute friendly golden retriever sitting upright facing forward, wearing epic dark blue
and gold knight armor with ornate vest, purple and gold helmet, and red studded collar,
ultimate protection, simple cartoon style, mobile game character art, centered in frame,
front view, TRANSPARENT BACKGROUND with NO GLOW EFFECT, flat 2D design, no shadows,
symmetrical, heroic expression
```

#### Armor Level 5 (Maximum) - No Glow
```
A cute friendly golden retriever sitting upright facing forward, wearing legendary dark
blue and gold knight armor with ornate vest, purple and gold helmet, and red studded collar,
maximum legendary protection, simple cartoon style, mobile game character art, centered in
frame, front view, TRANSPARENT BACKGROUND with NO GLOW EFFECT, flat 2D design, no shadows,
symmetrical, epic heroic expression
```

**IMPORTANT:** Emphasize "TRANSPARENT BACKGROUND" and "NO GLOW EFFECT" in the prompts!

## 📂 Once You Generate Them

Save the new images as:
```
/public/assets/pets/dog-armor-2-none.png
/public/assets/pets/dog-armor-3-none.png
/public/assets/pets/dog-armor-4-none.png
/public/assets/pets/dog-armor-5-none.png
```

Then update the code in `SwapPetDisplay.tsx` line 43:

**Current code (temporary):**
```typescript
const wellnessSuffix = armorConfig.wellnessGlow === 'platinum' ? 'platinum' : 'gold';
```

**Updated code (once you have "none" images):**
```typescript
const wellnessSuffix =
  armorConfig.wellnessGlow === 'platinum' ? 'platinum' :
  armorConfig.wellnessGlow === 'gold' ? 'gold' :
  'none';
```

## 🎯 Complete Behavior (Once Fixed)

| Wellness Tier | Background Glow Color | File Suffix |
|--------------|---------------------|-------------|
| **None** | No glow | `-none.png` |
| **Gold** | Yellow/Gold glow | `-gold.png` |
| **Platinum** | Blue/Cyan glow | `-platinum.png` |

## 🧪 Testing Scenarios

Once you have all images:

1. **Start with no wellness:**
   - Coverage: Medium
   - Wellness: None
   - **Expected:** Dog with armor, NO glow

2. **Add Gold wellness:**
   - Change Wellness to Gold
   - **Expected:** Image swaps, golden glow appears

3. **Upgrade to Platinum:**
   - Change Wellness to Platinum
   - **Expected:** Image swaps, blue glow replaces gold

4. **Remove wellness:**
   - Change Wellness to None
   - **Expected:** Image swaps, glow disappears

5. **Increase armor level:**
   - Change Annual Limit to Unlimited
   - **Expected:** More armor appears, glow color stays same

## 💡 Quick Win Alternative

If you don't want to generate "none" versions, you could:

1. **Keep current behavior** - Gold glow always shows for armored dogs
2. **Use the naked dog** - Show dog-armor-0.png when wellness is none (but this loses the armor visualization)
3. **Edit existing images** - Use image editing software to remove the glow from gold versions

## 📊 Summary

**What you have:**
- ✅ 4 armor levels with GOLD backgrounds
- ✅ 4 armor levels with PLATINUM backgrounds
- ✅ Code that swaps images based on wellness tier
- ❌ Missing: 4 armor levels with NO backgrounds

**Current workaround:**
- Wellness "none" shows gold glow images (not ideal but functional)

**To make it perfect:**
- Generate 4 more images with no glow
- Update one line of code
- Done!

---

The system is working! You just need those 4 additional "none" wellness images to complete the full experience. For your demo, you can just avoid setting wellness to "none" and it'll work perfectly with Gold/Platinum!
