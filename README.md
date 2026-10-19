# AMAN STUDIO — Luxury Photography Portfolio (2026 Edition)

An ultra-modern, high-end editorial and fine art photography portfolio website crafted for **Aman Studio** / **Aman Photography**. Designed according to 2026 luxury digital aesthetics, featuring dark obsidian surfaces, brushed champagne gold typography, realistic camera EXIF metadata, interactive retouching comparison, and smooth tactile micro-interactions.

---

## ✨ Features & Highlights

- **Bespoke Luxury Brand Identity & Logo:**
  - Includes a custom-designed luxury logo (`assets/images/logo.jpg`) featuring a geometric camera aperture iris intertwined with a refined serif monogram "A".
  
- **Fluid 2026 Micro-Interactions & Animations:**
  - **Dynamic Magnetic Cursor:** Adapts in real-time with context badges (`VIEW`, `DRAG`, `CLICK`).
  - **3D Parallax Tilt Hero Card:** Smooth perspective movement reacting to cursor coordinates.
  - **Web Audio API Camera Shutter SFX:** Realistic synthesized mechanical shutter click when exploring works, snapping the hero camera, or filtering categories (toggleable via the top navigation bar).

- **Dynamic Curated Portfolio Gallery:**
  - Interactive category filters:
    - *Editorial & High Fashion*
    - *Portraits & Personalities*
    - *Luxury Destination Weddings*
    - *Architecture & Spaces*
    - *Street & Documentary*
  - Authentic EXIF metadata tags on each card (e.g., `Hasselblad X2D 100C • XCD 55mm f/2.5 • 1/250s f/2.8 ISO 64`).

- **Fullscreen High-Resolution Lightbox:**
  - Full-screen view with deep EXIF exposure data drawer (Camera, Lens, Settings, Location, Publication).
  - Keyboard navigation (Left / Right arrow keys, Escape key) and smooth controls.

- **Interactive Before / After Retouching Slider:**
  - Draggable split-screen comparison showing raw sensor capture vs. Aman Studio's signature film color grade.

- **Editorial Case Studies:**
  - Behind-the-scenes narratives from prestigious commissions: *Vogue Scandinavia (Paris)*, *Villa Balbianello Wedding (Lake Como)*, and *Kyoto Spatial Architecture*.

- **The Arsenal (Professional Gear Kit):**
  - Showcases medium format Hasselblad X2D, Leica M11-P rangefinder, Sony Cine bodies, G-Master primes, and Broncolor/Profoto lighting.

- **Services & Investment Packages:**
  - 4 transparent tiers (*Editorial Campaign*, *Signature Destination Wedding*, *Fine Art Portraiture*, *Architecture & Space*) with turnaround times and deliverable checklists.

- **Interactive Booking / Consultation Engine:**
  - Comprehensive client intake form with instant submission feedback and generated booking reference codes.

- **Luxury Ateliers & Global Footprint:**
  - Dedicated studio addresses in London (Mayfair), Mumbai (Bandra), and New York (SoHo), with newsletter dispatch and complete footer navigation.

- **100% English Content:**
  - Pure, elegant English copy suitable for international fashion magazines, gallery curators, and high-net-worth private clientele.

---

## 🚀 How to Run the Website

### Option 1: Live Local Server (Recommended)
Run the built-in lightweight Python server from the project directory:
```bash
python3 -m http.server 3000
```
Then open your browser and navigate to:
```
http://localhost:3000
```

### Option 2: Direct File Open
You can also directly double-click `index.html` to open it in any web browser (Chrome, Safari, Firefox, Edge, Arc). No build steps, Node.js, or complex dependencies required!

---

## 📁 Project Structure

```
├── index.html              # Main single-page luxury portfolio experience
├── README.md               # Documentation & setup guide
└── assets/
    ├── css/
    │   └── style.css       # Custom styles, luxury obsidian palette, animations & responsiveness
    ├── js/
    │   ├── data.js         # Centralized portfolio items, EXIF data, packages, reviews & awards
    │   └── main.js         # Audio synthesizer, cursor, lightbox, slider & form logic
    └── images/
        └── logo.jpg        # Ultra-modern luxury camera aperture emblem
```

---

## 🎨 How to Customize

- **Add New Photos:** Open [`assets/js/data.js`](file:///Users/saifaman/Documents/Code/assets/js/data.js) and append an item to `AMAN_DATA.portfolio` with your photo URL, title, camera body, lens, and location.
- **Change Pricing / Packages:** Edit `AMAN_DATA.services` in [`assets/js/data.js`](file:///Users/saifaman/Documents/Code/assets/js/data.js).
- **Update Studio Contact & Locations:** Edit `AMAN_DATA.profile` or footer links in [`index.html`](file:///Users/saifaman/Documents/Code/index.html).

---

© 2026 AMAN STUDIO. All rights reserved.
