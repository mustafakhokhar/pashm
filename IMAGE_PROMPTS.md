# PASHM — Image generation prompts (interim drafts)

Prompts tuned for **photorealism** to replace the current AI drafts. Each maps to a slot
and target file on the site, with the right aspect ratio baked in.

## How to make AI images read as real (not rendered)
1. **Prompt like a photograph:** name a **film stock** (Kodak Portra 400) + a **real lens/aperture**. This alone shifts models toward photographic rendering.
2. **Natural light only,** with a stated direction/time. No "studio", no "cinematic".
3. **Ask for grain + imperfection:** "fine film grain, true-to-life texture, unposed, authentic". Avoid `8k, hyperdetailed, masterpiece, ultra-detailed, cinematic, beautiful` — these cause the glossy AI look.
4. **Keep stylisation low:** Midjourney `--style raw --s 50`. Flux/Imagen/DALL·E are already photoreal — just paste the descriptive prompt and drop the `--` flags.
5. **Cohesion:** generate the whole set with the same wording, and lock one good result as a **style reference** (MJ `--sref <image-url>`) so all ten look shot by one hand. Generate 4+ variations each, retry hands/faces, upscale the winner.

**Shared negative prompt** (for Flux / Stable Diffusion / tools with a negative field — MJ uses the inline `--no`):
```
3d render, CGI, digital art, illustration, painting, cartoon, plastic skin, waxy, airbrushed,
oversaturated, HDR, glossy, over-sharpened, artificial studio lighting, harsh flash, perfect symmetry,
flawless, deformed hands, extra fingers, mutated, text, watermark, logo, signature, oversmooth
```

---

## HERO → `public/photography/hero.jpg` (16:9)
```
Candid documentary landscape photograph, golden hour in a high-altitude Hindu Kush valley in
Swat, Pakistan. A lone shepherd in simple woollen clothing walks away from camera along a worn
dirt path through dry golden meadow grass, a small scattered herd of cashmere goats grazing
nearby. Layered hazy mountain ridgelines behind, low warm sun just above the peaks backlighting
the scene, long soft shadows, faint dust and atmospheric haze. Shot on Kodak Portra 400, 35mm
lens, f/8, slightly elevated eye level. Subject and herd right of centre, open meadow and pale
sky filling the left third, path leading in from the foreground. Muted warm earth palette, fine
film grain, true-to-life, unposed, editorial restraint.
--ar 16:9 --style raw --s 50 --no 3d render, cgi, illustration, oversaturated, hdr, text, watermark
```

---

## PRODUCTS

### Fibre → `public/photography/fibre.jpg` (4:5)
```
Candid still-life photograph, raw undyed cashmere down laid in soft natural drifts along a worn
wooden workshop table beside a window, in a rustic plaster-walled room. The fibre shows a natural
colour gradient — cream, fawn, light brown, soft charcoal-grey. A woven basket and a few simple
hand tools sit softly out of focus behind. Soft directional window light from the left, about 45
degrees, warm and gentle. Shot on Kodak Portra 400, medium format, 50mm, f/4, camera slightly
above at about 25 degrees. Fibre fills the lower-middle of the frame with quiet negative space
above, shallow depth of field. Muted bone-and-stone palette, fine film grain, authentic texture,
unstyled.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic, oversaturated, hdr, text, watermark
```

### Yarn → `public/photography/yarn.jpg` (4:5)
```
Candid still-life photograph, a single cone of undyed handspun cashmere yarn standing on a
linen-draped table in a rustic workshop, one loose strand of yarn trailing across the cloth. A
traditional wooden spinning wheel and folded natural textiles sit softly blurred in the
background. Soft window light from the side, warm and quiet. Shot on Kodak Portra 400, medium
format, 85mm, f/2.8, eye level. Natural undyed cream tones, bone-and-stone palette, fine film
grain, true-to-life fibre texture, unposed, editorial.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic, oversaturated, hdr, text, watermark
```

### Pieces (shawl) → `public/photography/piece.jpg` (4:5)
```
Candid still-life photograph, a fringed undyed cream cashmere shawl draped over the back of an
old dark wooden chair beside a window, in a quiet neutral interior with soft daylight. The weave
and hand-knotted fringe are visible, the drape natural and relaxed. Large soft window light
raking gently across the cloth to reveal texture. Shot on Kodak Portra 400, 50mm, f/2.8. Warm
muted palette, fine film grain, authentic, understated, editorial.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic, oversaturated, hdr, text, watermark
```

---

## PROCESS

### The Comb → `public/photography/the_comb.jpg` (4:5)
```
Candid documentary photograph, close on a weathered older man's hands combing fine soft down from
a cashmere goat with a simple metal hand-comb, wisps of pale fibre lifting free. Outdoors in a
high mountain pasture, early morning. Soft raking morning side light, warm. Shot on Kodak Portra
400, 85mm, f/2.8, tight on the hands, comb and fibre; the man's face out of frame or softly out
of focus. Natural weathered skin texture, real wear, fine film grain, photojournalistic, unposed.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic skin, deformed hands, extra fingers, oversaturated, hdr, text, watermark
```

### The Sort → `public/photography/the_sort.jpg` (4:5)
```
Candid documentary photograph, high angle looking down at a pair of weathered hands separating
fine cashmere down from coarse outer hair on a piece of undyed cloth, small sorted piles of
natural-coloured fibre (cream, fawn, brown) nearby on a rustic wooden table. Soft even light from
a nearby window. Shot on Kodak Portra 400, 50mm, f/4, near top-down at about 80 degrees. Warm
muted palette, fine film grain, authentic hands and texture, unposed, editorial reportage.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic skin, deformed hands, extra fingers, oversaturated, hdr, text, watermark
```

### The Wheel (spinning) → `public/photography/the_yarn.jpg` (4:5)
```
Candid documentary photograph, a person's hands spinning undyed cashmere into fine yarn on a
traditional low wooden spinning wheel, a thin thread drawing out between the fingers. Dim rustic
workshop, a shaft of soft window light catching the thread and the wheel's spokes. Slight natural
motion blur on the spinning wheel, hands sharp. Shot on Kodak Portra 400, 50mm, f/2.8, profile
view, slow shutter. Warm low-key palette, fine film grain, authentic, photojournalistic.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic skin, deformed hands, oversaturated, hdr, text, watermark
```

### The Loom → `public/photography/the_loom.jpg` (4:5)
```
Candid documentary photograph, a weaver working at a traditional wooden handloom, hands passing
the shuttle through the warp, undyed cashmere cloth taking shape. Directional window light raking
across the parallel warp threads, warm wood, dim workshop. Shot on Kodak Portra 400, 35mm, f/4,
three-quarter view capturing both the weaver's hands and the loom structure. Warm muted palette,
fine film grain, authentic, reportage, unposed.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic skin, deformed hands, oversaturated, hdr, text, watermark
```

---

## SIGNATURE — the apple-cider-vinegar wash → `public/photography/the_wash.jpg` (4:5)
*Your most ownable frame. Generate the most variations here.*
```
Candid documentary photograph, weathered hands lifting a soft mass of wet cashmere fibre out of a
copper basin filled with pale amber apple-cider-vinegar wash, water sheeting off and droplets
caught mid-air, a faint wisp of steam. Dim moody workshop, a single soft window light from the
side at about 45 degrees and slightly behind, catching the wet sheen; deep shadows on the
opposite side, chiaroscuro. Shot on Kodak Portra 400, 85mm, f/2.8, angled about 40 degrees
looking down into the basin, fast shutter freezing the drips. Warm low-key palette, authentic wet
texture, fine film grain, intimate, photojournalistic.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, plastic skin, deformed hands, extra fingers, oversaturated, hdr, glossy, text, watermark
```

---

## MACRO — fibre texture → `public/photography/fibre-macro.jpg` (4:5 or 1:1)
```
Extreme macro photograph of raw dehaired cashmere down filling the frame, showing the natural
colour gradient from cream to fawn to soft brown to charcoal in adjacent drifts. Fine individual
fibres catch a low grazing side light with a soft backlight rim making the down edges glow; crimp
and loft clearly visible. Shot on Kodak Portra 400, 100mm macro lens, f/5.6, focus-stacked
sharpness with a soft falloff into the background. Warm neutral light, bone-and-stone palette,
fine film grain, true-to-life fibre texture, no styling.
--ar 4:5 --style raw --s 50 --no 3d render, cgi, illustration, oversaturated, hdr, oversharpened, text, watermark
```

---

*When you have the new files, drop them in `~/Downloads` with the same names you used before
(`hero3.png`, `the_fiber_piece.png`, etc.) and tell me — I'll optimise and wire them into the
same slots, one by one, same keep/revert loop.*
