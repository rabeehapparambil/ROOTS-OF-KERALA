import type {
  BookingChannel,
  ExperienceItem,
  FamilyMember,
  GalleryItem,
  NarrativeMoment,
  SiteContent,
} from "@/types/content";

export const siteContent: SiteContent = {
  brand: {
    name: "ROOTS OF KERALA",
    location: "Mannarkad, Kerala",
    tagline: "Don't visit Kerala. Live it.",
    descriptor:
      "A family homestay near the Silent Valley foothills, rooted in food, conversation, and local life.",
  },
  navItems: [
    { label: "Story", href: "#story" },
    { label: "Experience", href: "#experience" },
    { label: "A Day Here", href: "#day-in-our-home" },
    { label: "Moments", href: "#moments" },
    { label: "Family", href: "#meet-the-family" },
    { label: "Book", href: "#booking" },
  ],
  hero: {
    eyebrow: "Mannarkad, lived slowly",
    title: "Don't visit Kerala. Live it.",
    description:
      "Stay with a real family in Mannarkad. Wake to cardamom tea, home-cooked meals, paddy-field light, and the everyday rhythms that make this quieter side of Kerala unforgettable.",
    primaryCta: {
      label: "Book Your Stay",
      href: "#booking",
    },
    secondaryCta: {
      label: "Explore the Experience",
      href: "#story",
    },
    trustNotes: [
      "Three guest rooms shaped for quiet mornings, shaded afternoons, and deep sleep.",
      "Home-style breakfast and dinner prepared with seasonal Palakkad produce.",
      "Village roads, foothill air, and local life instead of packaged sightseeing.",
    ],
    floatingNote:
      "Paddy fields, coconut shade, banana leaf lunches, and family stories after dusk.",
    visualPrimary: {
      src: "/images/hero/palakkad-fields.jpg",
      alt: "Misty paddy fields near Mannarkad in Palakkad district with the hills beyond.",
    },
    visualSecondary: {
      src: "/images/hero/palakkad-coconut-grove.jpg",
      alt: "A coconut grove in Palakkad district with soft green light filtering through the trees.",
    },
  },
  story: {
    eyebrow: "A real home at the edge of the hills",
    title: "A family stay framed by paddy fields, rain trees, and everyday Kerala life.",
    lead:
      "ROOTS OF KERALA is built around hospitality that cannot be staged: slippers at the door, a second serving before you ask, and hosts who treat arrival like meeting an old friend.",
    paragraphs: [
      "The home sits near Mannarkad in Palakkad district, where village roads open into paddy fields and the air carries a little of the Western Ghats with it. Mornings feel clear, green, and unhurried.",
      "Guests step into family rhythm rather than a scripted itinerary. Some days that means tea on the veranda, a drive toward the Silent Valley foothills, and conversations in the kitchen. Other days it means resting under the trees and letting the afternoon stay quiet.",
    ],
    trustDetails: [
      {
        title: "Cooked at home",
        description:
          "Breakfast and dinner are prepared in the family kitchen with Palakkad rice, coconut, garden herbs, traditional spice blends, and the kind of care that never feels transactional.",
      },
      {
        title: "Hosted personally",
        description:
          "You are not checking into a system. You are arriving at a home where your hosts know the roads, the food, and how to make first-time guests feel genuinely at ease.",
      },
      {
        title: "Rooted in Mannarkad",
        description:
          "Village markets, old temple streets, forest-edge drives, monsoon-green fields, and late-evening conversation are all part of the experience when timing allows.",
      },
    ],
    images: [
      {
        src: "/images/hero/kerala-house.jpg",
        alt: "A Kerala family homestay with red roof tiles, white walls, and lush greenery.",
      },
      {
        src: "/images/hero/palakkad-coconut-grove.jpg",
        alt: "Filtered sunlight through a coconut grove in Palakkad district.",
      },
    ],
  },
  experience: {
    eyebrow: "The experience",
    title: "The kind of luxury that feels shaded, grounded, and close to the land.",
    description:
      "The richness of the stay comes from quiet detail: the light, the food, the family, and the feeling of being welcomed into a place with roots.",
  },
  dayNarrative: {
    eyebrow: "A day in our home",
    title: "From misty fields to lamplit evenings, the day opens softly.",
    description:
      "The pace changes with the rain, the season, and what you feel like doing. But the feeling stays the same: green, grounded, and quietly memorable.",
  },
  gallery: {
    eyebrow: "Moments from Mannarkad",
    title:
      "Fields, food, trees, birdsong, and the textures that make this corner of Kerala feel lived in.",
    description:
      "The memory of the stay is built from small, grounded things: wet earth after rain, a path under old trees, lunch served warm, a peacock in the distance, and late light across the fields.",
  },
  family: {
    eyebrow: "Meet the family",
    title: "The people behind the home are the reason it feels different.",
    description:
      "The warmth of ROOTS OF KERALA comes from the family that lives here. Their generosity shapes the stay far more than any amenity list could.",
  },
  booking: {
    eyebrow: "Book your Mannarkad stay",
    title: "Start with a conversation, then let the stay take shape naturally.",
    description:
      "Tell us when you want to come, how you like to travel, and what kind of pace you are hoping for. We will guide you from there.",
    formTitle: "Prepare your inquiry",
    formDescription:
      "Version one keeps things personal. We create a ready-to-send WhatsApp or email message so your stay can begin with a direct conversation.",
    submitLabel: "Prepare Inquiry",
    helperText:
      "WhatsApp is the fastest way to hear back. Email, Airbnb, and Instagram are also available if you prefer a different path.",
    successTitle: "Your inquiry is ready.",
    successDescription:
      "Choose your preferred handoff below and we will already have the context we need to reply thoughtfully.",
    fields: {
      name: {
        label: "Your name",
        placeholder: "Amelia Carter",
      },
      country: {
        label: "Country",
        placeholder: "United Kingdom",
      },
      dates: {
        label: "Preferred dates",
        placeholder: "10-14 September",
      },
      guests: {
        label: "Guests",
        placeholder: "2 adults",
      },
      message: {
        label: "Tell us a little about your trip",
        placeholder:
          "We love quiet stays, local food, and would be interested in a village walk or a relaxed day close to the fields.",
      },
    },
  },
  footer: {
    note: "A warm family stay in Mannarkad, Palakkad district, for travellers who want to feel Kerala slowly.",
    microcopy: "Imagery, contact links, and story details can all be swapped easily from the content layer.",
  },
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "stay",
    eyebrow: "Stay",
    title: "Rooms with quiet edges and soft morning light.",
    description:
      "Thoughtful rooms, a calm veranda, and the kind of stillness that makes you slow down without trying.",
    icon: "stay",
    highlights: ["Private room comfort", "Garden and veranda views", "Space to rest between village outings"],
  },
  {
    id: "food",
    eyebrow: "Food",
    title: "Meals that feel like an invitation into the kitchen.",
    description:
      "Expect breakfasts shaped by the season, home-style curries, banana leaf lunches, and recipes passed hand to hand.",
    icon: "food",
    highlights: ["Home-cooked breakfasts", "Traditional Kerala dinners", "Palakkad produce and family recipes"],
  },
  {
    id: "family",
    eyebrow: "Family",
    title: "Hosted with the warmth of being expected.",
    description:
      "Care here is personal. The family checks in gently, notices what you enjoy, and leaves room for privacy when you want it.",
    icon: "family",
    highlights: ["Personal hosting", "Flexible local recommendations", "Conversation without pressure"],
  },
  {
    id: "local-life",
    eyebrow: "Local Life",
    title: "See Kerala through village roads, fields, and foothill air.",
    description:
      "Walk local lanes, visit Mannarkad's quieter corners, meet neighbours, and experience this part of Kerala beyond itineraries.",
    icon: "local-life",
    highlights: ["Mannarkad village walks", "Foothill viewpoints", "Seasonal local moments"],
  },
];

export const dayMoments: NarrativeMoment[] = [
  {
    id: "morning",
    label: "Morning",
    title: "Mist over the fields, first tea, and a quiet house waking.",
    description:
      "Morning arrives softly in Mannarkad. Light lifts from the paddy fields, tea appears before conversation fully begins, and the house stretches into the day at an unhurried pace.",
    note: "Best paired with cardamom tea, fresh appam, and a little time on the veranda.",
    tone: "dawn",
    image: {
      src: "/images/hero/palakkad-fields.jpg",
      alt: "Misty paddy fields near Mannarkad in soft morning light.",
    },
  },
  {
    id: "afternoon",
    label: "Afternoon",
    title: "Shared meals, shaded roads, and the rich middle of the day.",
    description:
      "This is when the house feels fullest. Lunch lingers, the kitchen stays busy, and the world outside glows in leaf green, warm earth, and filtered light.",
    note: "Some guests walk village roads after lunch. Others stay back for another coffee and more stories.",
    tone: "noon",
    image: {
      src: "/images/hero/banana-leaf-meal.jpg",
      alt: "A banana leaf meal with Kerala dishes served in warm daylight.",
    },
  },
  {
    id: "evening",
    label: "Evening",
    title: "Soft sunset, cooler air, and longer conversations.",
    description:
      "After sundown the air changes. Lamps come on, the pace drops, and dinner turns into the kind of conversation that makes the place feel less like accommodation and more like a remembered home.",
    note: "It is often the quietest part of the stay, especially after rain.",
    tone: "dusk",
    image: {
      src: "/images/gallery/palakkad-sunset.jpg",
      alt: "A red sunset seen through palms in Palakkad district.",
    },
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "home",
    src: "/images/hero/kerala-house.jpg",
    alt: "A Kerala family home with tiled roof, white walls, and dense tropical greenery.",
    caption: "The home sits quietly among palms and shade, closer to family rhythm than to formal hospitality.",
    aspect: "portrait",
    layout: "tall",
  },
  {
    id: "fields",
    src: "/images/hero/palakkad-fields.jpg",
    alt: "Green paddy fields near Mannarkad with hills in the background.",
    caption: "Morning in Mannarkad often begins with mist lifting off the fields.",
    aspect: "landscape",
    layout: "feature",
  },
  {
    id: "meal",
    src: "/images/hero/banana-leaf-meal.jpg",
    alt: "A traditional Kerala meal served on a banana leaf with several side dishes.",
    caption: "Meals arrive with the generosity of a family table, not a menu.",
    aspect: "portrait",
    layout: "standard",
  },
  {
    id: "grove",
    src: "/images/hero/palakkad-coconut-grove.jpg",
    alt: "Coconut trees and lush greenery in Palakkad district.",
    caption: "Coconut shade and filtered light make the land feel cool, even in the fuller hours of the day.",
    aspect: "landscape",
    layout: "standard",
  },
  {
    id: "path",
    src: "/images/gallery/palakkad-path.jpg",
    alt: "A quiet stepped path beneath an old tree in Palakkad district.",
    caption: "Local life is often found on quiet steps, old trees, and roads with no rush in them.",
    aspect: "portrait",
    layout: "standard",
  },
  {
    id: "peacock",
    src: "/images/gallery/palakkad-peacock.jpg",
    alt: "A peacock standing in bright green landscape near Palakkad.",
    caption: "Nature is never far away here; sometimes it arrives before breakfast.",
    aspect: "portrait",
    layout: "standard",
  },
  {
    id: "evening",
    src: "/images/gallery/palakkad-sunset.jpg",
    alt: "A red sun hanging low behind palms in Palakkad district.",
    caption: "Evening turns spare and beautiful, with palms reduced to line and shadow.",
    aspect: "landscape",
    layout: "wide",
  },
];

export const familyMembers: FamilyMember[] = [
  {
    name: "Leela",
    role: "Host and home cook",
    bio: "Leela is the quiet heart of the home. She is known for meals built around Palakkad produce, gentle hospitality, and recipes that taste like memory.",
    quote: "We want guests to feel settled enough to forget they were ever checking in.",
    image: {
      src: "/images/family/leela.jpg",
      alt: "Portrait photo of Leela, the homestay host.",
    },
  },
  {
    name: "Rajan",
    role: "Storyteller and local guide",
    bio: "Rajan knows the roads, foothill viewpoints, and family stories that give Mannarkad its texture. He is happiest showing guests the slower side of Kerala.",
    quote: "The most beautiful places here are often the ones you would never think to search for.",
    image: {
      src: "/images/family/rajan.jpg",
      alt: "Portrait photo of Rajan, the homestay host and local guide.",
    },
  },
  {
    name: "Devika",
    role: "Culture bridge and guest contact",
    bio: "Devika helps guests settle in, answers questions, and translates local rhythm into a first-time guest's comfort without losing the home's warmth.",
    quote: "Guests remember how the home felt. Everything else follows from that.",
    image: {
      src: "/images/family/devika.jpg",
      alt: "Portrait photo of Devika, a family member of the homestay.",
    },
  },
];

export const bookingLinks: BookingChannel[] = [
  {
    kind: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919961112233",
    description: "Fastest for direct questions, dates, and a personal reply from the family.",
    cta: "Message on WhatsApp",
  },
  {
    kind: "instagram",
    label: "Instagram",
    href: "https://instagram.com/rootsofkerala",
    description: "See the mood of the home, latest moments, and message us from social if you prefer.",
    cta: "Visit Instagram",
  },
  {
    kind: "email",
    label: "Email",
    href: "mailto:stay@rootsofkerala.in",
    description: "Ideal if you prefer sending a longer travel note with questions and preferences.",
    cta: "Send an Email",
  },
  {
    kind: "airbnb",
    label: "Airbnb",
    href: "https://www.airbnb.com/rooms/roots-of-kerala-placeholder",
    description: "Use a marketplace flow if you would like extra booking familiarity and comparison.",
    cta: "View on Airbnb",
  },
];
