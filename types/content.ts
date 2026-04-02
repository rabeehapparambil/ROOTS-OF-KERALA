export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ImageReference {
  src: string;
  alt: string;
}

export interface ExperienceItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: "stay" | "food" | "family" | "local-life";
  highlights: string[];
}

export interface NarrativeMoment {
  id: string;
  label: string;
  title: string;
  description: string;
  note: string;
  tone: "dawn" | "noon" | "dusk";
  image: ImageReference;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "landscape" | "square";
  layout?: "feature" | "tall" | "wide" | "standard";
}

export interface FamilyMember {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: ImageReference;
}

export interface BookingChannel {
  kind: "whatsapp" | "email" | "airbnb" | "instagram";
  label: string;
  href: string;
  description: string;
  cta: string;
}

export interface InquiryFormValues {
  name: string;
  country: string;
  dates: string;
  guests?: string;
  message: string;
}

export interface SiteContent {
  brand: {
    name: string;
    location: string;
    tagline: string;
    descriptor: string;
  };
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    trustNotes: string[];
    floatingNote: string;
    visualPrimary: ImageReference;
    visualSecondary: ImageReference;
  };
  story: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    trustDetails: Array<{
      title: string;
      description: string;
    }>;
    images: ImageReference[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
  };
  dayNarrative: {
    eyebrow: string;
    title: string;
    description: string;
    companionEyebrow: string;
    companionTitle: string;
    companionDescription: string;
    companionHighlights: string[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    companionEyebrow: string;
    companionTitle: string;
    highlights: string[];
  };
  family: {
    eyebrow: string;
    title: string;
    description: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    formTitle: string;
    formDescription: string;
    submitLabel: string;
    helperText: string;
    successTitle: string;
    successDescription: string;
    fields: {
      name: { label: string; placeholder: string };
      country: { label: string; placeholder: string };
      dates: { label: string; placeholder: string };
      guests: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
  };
  footer: {
    note: string;
    microcopy: string;
  };
}
