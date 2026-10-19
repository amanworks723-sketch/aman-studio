/**
 * AMAN STUDIO - Photography Portfolio Data
 * Complete English Content | 2026 Editorial Standard
 */

const AMAN_DATA = {
  profile: {
    name: "Aman",
    brandName: "AMAN STUDIO",
    title: "Editorial, Portrait & Luxury Destination Photographer",
    bio: "With over a decade behind medium format and rangefinder cameras, Aman specializes in high-fashion editorial, intimate character portraits, and timeless luxury destination weddings worldwide.",
    quote: "Light is not merely illumination; it is the ink with which we carve human vulnerability into eternity.",
    experienceYears: "12+",
    storiesCaptured: "480+",
    awardsCount: "24",
    countriesWorked: "32",
    contactEmail: "contact@amanstudio.art",
    phone: "+1 (555) 839-2026",
    locations: ["London (Mayfair)", "Mumbai (Bandra)", "New York (SoHo)"]
  },

  portfolio: [
    {
      id: "work-1",
      title: "Chiaroscuro Nocturne",
      subtitle: "Haute Couture Autumn Campaign",
      category: "editorial",
      categoryLabel: "Editorial & Fashion",
      location: "Paris, France",
      year: "2026",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 55mm f/2.5 V",
      settings: "f/2.8 • 1/250s • ISO 64",
      aspectRatio: "portrait",
      client: "Vogue Scandinavia",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      description: "An homage to baroque lighting in contemporary haute couture. Shot in the historic streets of Le Marais during twilight, balancing ambient city luminescence with a single diffused strobe.",
      featured: true
    },
    {
      id: "work-2",
      title: "Soul in Monochrome",
      subtitle: "Intimate Character Study",
      category: "portraits",
      categoryLabel: "Portraits & People",
      location: "New York City, USA",
      year: "2026",
      camera: "Leica M11-P",
      lens: "Noctilux-M 50mm f/0.95 ASPH",
      settings: "f/1.2 • 1/500s • ISO 100",
      aspectRatio: "portrait",
      client: "The New Yorker Culture Issue",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      description: "A stripped-back study of raw identity and quiet gaze. Captured with natural northern studio window light to emphasize authentic skin texture and micro-expressions.",
      featured: true
    },
    {
      id: "work-3",
      title: "The Amalfi Vows",
      subtitle: "Luxury Cliffside Destination Wedding",
      category: "weddings",
      categoryLabel: "Luxury Destination Weddings",
      location: "Positano, Italy",
      year: "2025",
      camera: "Sony Alpha 1",
      lens: "FE 85mm f/1.2 GM",
      settings: "f/1.6 • 1/1250s • ISO 100",
      aspectRatio: "landscape",
      client: "Private Couple Commission",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      description: "Golden hour Mediterranean vows overlooking the Tyrrhenian Sea. Focusing on unscripted emotional intimacy bathed in warm Italian sun and seaside breeze.",
      featured: true
    },
    {
      id: "work-4",
      title: "Monolithic Silence",
      subtitle: "Brutalist Architectural Essay",
      category: "architecture",
      categoryLabel: "Architecture & Spaces",
      location: "Kyoto, Japan",
      year: "2026",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 28mm f/4 P",
      settings: "f/8.0 • 1/60s • ISO 64",
      aspectRatio: "landscape",
      client: "Architectural Digest International",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      description: "Geometric harmony between raw textured concrete, geometric shadows, and organic minimalist courtyards. Exploring architectural silence in modern urban spaces.",
      featured: false
    },
    {
      id: "work-5",
      title: "Vanguard Elegance",
      subtitle: "Editorial Cover Series",
      category: "editorial",
      categoryLabel: "Editorial & Fashion",
      location: "Milan, Italy",
      year: "2026",
      camera: "Sony Alpha 1",
      lens: "FE 50mm f/1.2 GM",
      settings: "f/2.0 • 1/800s • ISO 100",
      aspectRatio: "portrait",
      client: "Harper's Bazaar Italia",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
      description: "Clean silhouettes and fluid movement captured during Milan Fashion Week. Emphasizing garment drape, tension, and bold chromatic contrast.",
      featured: true
    },
    {
      id: "work-6",
      title: "Tokyo In The Rain",
      subtitle: "Cinematic Street Documentary",
      category: "street",
      categoryLabel: "Street & Documentary",
      location: "Shinjuku, Tokyo",
      year: "2025",
      camera: "Leica M11-P",
      lens: "Summicron-M 35mm f/2 ASPH",
      settings: "f/2.0 • 1/160s • ISO 800",
      aspectRatio: "landscape",
      client: "Magnum Photo Essay Contest",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
      description: "Neon reflections on rain-slicked asphalt. A solitary moment frozen inside the world's most kinetic metropolis.",
      featured: false
    },
    {
      id: "work-7",
      title: "Whispers of Tuscany",
      subtitle: "Villa Cetinale Celebration",
      category: "weddings",
      categoryLabel: "Luxury Destination Weddings",
      location: "Siena, Italy",
      year: "2026",
      camera: "Sony Alpha 1",
      lens: "FE 35mm f/1.4 GM",
      settings: "f/1.8 • 1/1600s • ISO 100",
      aspectRatio: "portrait",
      client: "Private Couple Commission",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      description: "Candlelit courtyard dinner amidst cypress trees and Romanesque stone walls. An unhurried celebration of heritage, family, and boundless romance.",
      featured: false
    },
    {
      id: "work-8",
      title: "The Artist's Solitude",
      subtitle: "Sculptor Atelier Portrait",
      category: "portraits",
      categoryLabel: "Portraits & People",
      location: "Barcelona, Spain",
      year: "2025",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 80mm f/1.9",
      settings: "f/2.2 • 1/200s • ISO 100",
      aspectRatio: "square",
      client: "Artforum Quarterly",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      description: "Marble dust caught in sunbeams, weathered hands holding carving chisels. A visual document of creative devotion and manual mastery.",
      featured: false
    },
    {
      id: "work-9",
      title: "Oasis of Glass",
      subtitle: "Nordic Pavilion Study",
      category: "architecture",
      categoryLabel: "Architecture & Spaces",
      location: "Reykjavik, Iceland",
      year: "2026",
      camera: "Sony Alpha 1",
      lens: "FE 24-70mm f/2.8 GM II",
      settings: "f/5.6 • 1/400s • ISO 100",
      aspectRatio: "landscape",
      client: "Nordic Design Institute",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      description: "The interplay of frosted glass, geothermal fog, and subarctic winter sky. Exploring how architecture dissolves into wild landscapes.",
      featured: false
    },
    {
      id: "work-10",
      title: "Crimson Velvet",
      subtitle: "Jewelry & Luxury Still Life",
      category: "editorial",
      categoryLabel: "Editorial & Fashion",
      location: "Geneva, Switzerland",
      year: "2026",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 120mm f/3.5 Macro",
      settings: "f/11 • 1/125s • ISO 64",
      aspectRatio: "portrait",
      client: "Haute Horlogerie Journal",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
      description: "Macro precision highlighting bespoke craftsmanship and refractive depth under precision Broncolor optical snoot lighting.",
      featured: false
    },
    {
      id: "work-11",
      title: "Dusk on Bosphorus",
      subtitle: "Transcontinental Movement",
      category: "street",
      categoryLabel: "Street & Documentary",
      location: "Istanbul, Turkey",
      year: "2025",
      camera: "Leica M11-P",
      lens: "Summilux-M 50mm f/1.4 ASPH",
      settings: "f/2.4 • 1/320s • ISO 400",
      aspectRatio: "portrait",
      client: "National Geographic Traveler",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800&auto=format&fit=crop",
      description: "Ferry silhouettes crossing the straits as minarets pierce the purple twilight. A timeless junction where two continents greet the sea.",
      featured: false
    },
    {
      id: "work-12",
      title: "Lake Como Mirage",
      subtitle: "Villa Balbianello Soirée",
      category: "weddings",
      categoryLabel: "Luxury Destination Weddings",
      location: "Lake Como, Italy",
      year: "2026",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 38mm f/2.5 V",
      settings: "f/2.8 • 1/1000s • ISO 100",
      aspectRatio: "landscape",
      client: "Private Couple Commission",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1600&auto=format&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
      description: "Wooden Riva boat gliding across mirror-still alpine waters as dusk envelops the terraced gardens of Balbianello.",
      featured: true
    }
  ],

  caseStudies: [
    {
      id: "case-paris",
      title: "The Parisian Nocturne",
      subtitle: "Haute Couture Visual Essay for Vogue",
      tagline: "Bridging 18th-century classical chiaroscuro with 2026 cyberpunk avant-garde.",
      coverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Location", val: "Le Marais & Place Vendôme" },
        { label: "Deliverables", val: "18 High-Res Master Plates" },
        { label: "Camera Body", val: "Hasselblad X2D 100C" },
        { label: "Global Reach", val: "2.4M Readers" }
      ],
      synopsis: "Commissioned by Vogue to capture the ephemeral tension of high fashion after midnight. We utilized available sodium vapor street lighting coupled with an off-camera battery-powered Profoto B10X wrapped in custom warm cine-gels to preserve authentic Parisian nocturnal ambiance."
    },
    {
      id: "case-amalfi",
      title: "Echoes of Positano",
      subtitle: "A Three-Day Mediterranean Destination Affair",
      tagline: "Unscripted luxury, organic emotion, and cliffside cinematic memory.",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Duration", val: "3 Full Days" },
        { label: "Curated Plates", val: "450 Heirloom Photos" },
        { label: "Format", val: "Medium Format & 35mm Cine" },
        { label: "Deliverable", val: "Handcrafted Italian Leather Album" }
      ],
      synopsis: "From a welcome spritz cruise along the Amalfi cliffs to a candlelit terrace reception at Villa San Giacomo, Aman's team documented the entire weekend with zero posed interruptions, allowing authentic joy and familial intimacy to guide the visual narrative."
    },
    {
      id: "case-kyoto",
      title: "Kyoto: Shadows & Form",
      subtitle: "Fine Art Architectural Exhibition Series",
      tagline: "Studying the dialogue between silence, concrete, and seasonal timber.",
      coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Exhibition", val: "Tokyo Photo Biennale 2026" },
        { label: "Prints Sold", val: "Limited Edition of 10" },
        { label: "Print Medium", val: "Hahnemühle Photo Rag Baryta" },
        { label: "Curator Award", val: "Gold Medal for Spatial Poetics" }
      ],
      synopsis: "A two-week residency exploring contemporary Japanese spatial theory. By limiting the capture to sunrise and dusk with zero post-processing distortion, each frame honors the architect's sacred relationship with natural light and emptiness (Ma)."
    }
  ],

  retouchingShowcase: {
    title: "The Art of Color & Tonal Depth",
    subtitle: "RAW Capture vs. Aman Studio Signature Grade",
    description: "Every master plate undergoes a meticulous bespoke color treatment, balancing skin micro-tones, organic film grain curve, and specular highlight rolloff inspired by vintage 70mm cinema film stocks.",
    rawImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop&sat=-40&con=10",
    gradedImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop"
  },

  gearKit: [
    {
      category: "Bodies",
      items: [
        { name: "Hasselblad X2D 100C", specs: "100MP Medium Format BSI Sensor • 16-Bit Color • 15 Stops Dynamic Range", badge: "Primary Studio Body" },
        { name: "Leica M11-P", specs: "60MP Full Frame • Rangefinder • Content Credentials Authentication", badge: "Street & Intimate Editorial" },
        { name: "Sony Alpha 1", specs: "50.1MP Stacked Exmor RS • 30fps Burst • 8K 10-Bit Cinematic", badge: "Fast Action & Weddings" }
      ]
    },
    {
      category: "Glass & Primes",
      items: [
        { name: "Leica Noctilux-M 50mm f/0.95 ASPH", specs: "Legendary dreamy bokeh, optical signature for fine-art portraiture", badge: "Signature Prime" },
        { name: "Sony FE 85mm f/1.2 GM", specs: "Unmatched edge-to-edge sharpness and clinical skin tonal separation", badge: "Portrait Essential" },
        { name: "Hasselblad XCD 55mm f/2.5 V", specs: "Integrated leaf shutter with flash sync up to 1/4000th of a second", badge: "Studio Master" },
        { name: "Sony FE 35mm f/1.4 GM", specs: "Natural human field-of-view for documentary and environmental storytelling", badge: "Documentary Prime" }
      ]
    },
    {
      category: "Lighting & Grip",
      items: [
        { name: "Profoto B10X Plus (500Ws)", specs: "High-speed sync, bi-color continuous modeling LED, extreme color stability", badge: "Mobile Power" },
        { name: "Broncolor Para 133 Softbox", specs: "Parabolic light shaper delivering three-dimensional wrapped illumination", badge: "Editorial Key" },
        { name: "Gitzo Systematic Carbon Fiber", specs: "Zero-vibration rock solid support for medium format long exposures", badge: "Support" }
      ]
    }
  ],

  services: [
    {
      id: "service-editorial",
      tier: "Editorial & Campaign",
      title: "Commercial & Fashion Direction",
      price: "From $4,500",
      turnaround: "7–10 Business Days",
      popular: false,
      deliverables: [
        "Full creative concept & moodboard development",
        "Full-day on-location or studio production",
        "High-end frequency separation & color grading",
        "Full commercial global advertising licensing",
        "Digital live-tethering for art director review"
      ],
      idealFor: "Fashion houses, luxury lifestyle brands, magazines, and designer lookbooks."
    },
    {
      id: "service-wedding",
      tier: "Signature Destination",
      title: "Luxury Destination Weddings",
      price: "From $8,500",
      turnaround: "3–4 Weeks",
      popular: true,
      deliverables: [
        "Full coverage (Multi-day: Rehearsal, Main Event, After-Party)",
        "Aman as lead photographer + dedicated 2nd shooter",
        "400+ hand-retouched high-resolution digital plates",
        "Bespoke Italian archival leather heirloom album",
        "Private password-protected client portal with instant download",
        "Worldwide travel and accommodation coordination included"
      ],
      idealFor: "Couples seeking an unscripted, high-fashion editorial approach to their wedding weekend."
    },
    {
      id: "service-portrait",
      tier: "Private Commission",
      title: "Fine Art Portraiture",
      price: "From $2,200",
      turnaround: "5 Business Days",
      popular: false,
      deliverables: [
        "3-hour intimate studio or location session",
        "Pre-shoot aesthetic & wardrobe consultation",
        "15 signature museum-grade retouched plates",
        "Two 16x20\" fine-art Hahnemühle archival prints",
        "Digital archive in uncompressed TIFF and web formats"
      ],
      idealFor: "Creative directors, artists, executives, and discerning individuals desiring legacy imagery."
    },
    {
      id: "service-architecture",
      tier: "Spatial & Heritage",
      title: "Architectural & Interior Series",
      price: "From $3,800",
      turnaround: "7 Business Days",
      popular: false,
      deliverables: [
        "Pre-scouting solar path & natural light mapping",
        "Dawn and blue-hour atmospheric captures",
        "Perspective-controlled architectural compositing",
        "Architectural Digest & Monocle editorial submission prep",
        "Perpetual media and editorial rights"
      ],
      idealFor: "Architects, luxury hoteliers, interior designers, and property developers."
    }
  ],

  testimonials: [
    {
      client: "Sophia Laurent",
      title: "Creative Director",
      company: "Vogue Scandinavia",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "Working with Aman is like witnessing poetry materialize in real time. His mastery of shadow and gentle direction creates photographs that feel both timelessly classic and cutting-edge modern. Our Paris cover shoot set a new benchmark for the magazine.",
      rating: 5
    },
    {
      client: "Alexander & Elena Wright",
      title: "Private Clients",
      company: "Lake Como Wedding",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      quote: "We didn't want the typical formulaic wedding photos. Aman turned our wedding at Villa Balbianello into a cinematic visual novel. He was completely unobtrusive, yet captured moments so raw and gorgeous they brought our families to tears.",
      rating: 5
    },
    {
      client: "Marcus Chen",
      title: "Principal Architect",
      company: "Atelier Chen & Partners",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      quote: "Architectural photography requires an acute understanding of silence, rhythm, and vanishing points. Aman translated our Kyoto pavilion project with breathtaking precision. His medium format captures captured the soul of the space.",
      rating: 5
    }
  ],

  awards: [
    { year: "2026", title: "World Press Photo Contemporary Arts", organization: "World Press Photo Foundation", location: "Amsterdam" },
    { year: "2025", title: "Sony World Photography Award - Fashion Winner", organization: "World Photography Organisation", location: "London" },
    { year: "2025", title: "International Wedding Photographer of the Year (Overall Winner)", organization: "IWPOTY", location: "Sydney" },
    { year: "2024", title: "Hasselblad Masters Finalist - Portraiture", organization: "Hasselblad Foundation", location: "Gothenburg" },
    { year: "2023", title: "Leica Oskar Barnack Award - Newcomer Nomination", organization: "Leica Camera AG", location: "Wetzlar" }
  ]
};

// Freeze data to prevent mutations
Object.freeze(AMAN_DATA);
