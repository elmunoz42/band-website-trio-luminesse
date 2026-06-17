export type PerformancePackage = {
  title: string;
  description: string;
  idealFor: string;
};

export type EventListing = {
  date: string;
  title: string;
  location: string;
};

export type SiteContent = {
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroActions: {
    primary: string;
    secondary: string;
  };
  aboutTitle: string;
  aboutBody: string;
  soundNotes: string[];
  packages: PerformancePackage[];
  events: EventListing[];
};

const fallbackContent: SiteContent = {
  eyebrow: "Santa Barbara jazz pop soul trio",
  heroTitle: "Soulful music for every occasion",
  heroLead:
    "Established in Santa Barbara, Trio Luminesse is an engaging acoustic jazz-pop trio blending Bossa Nova, soul, and R&B with the warmth of an intimate living room performance.",
  heroActions: {
    primary: "Book the trio",
    secondary: "Hear the sound"
  },
  aboutTitle: "Warmth, groove, and story for Santa Barbara and beyond",
  aboutBody:
    "With warm acoustic textures, lush vocal melodies, and laid-back beats, the band playfully blends coastal California charm and acoustic soul. From original compositions to fresh versions of contemporary songs by artists like Billie Eilish, Trio Luminesse creates performances that are fun, deeply engaging, and easy to settle into.",
  soundNotes: [
    "Bossa Nova sway",
    "Laid-back beats",
    "Soulful vocals",
    "R&B warmth"
  ],
  packages: [
    {
      title: "Private Gatherings",
      description:
        "An intimate, polished set for homes, gardens, dinners, and listening-room moments.",
      idealFor: "Cocktail hours, birthdays, house concerts"
    },
    {
      title: "Weddings",
      description:
        "Ceremony, cocktail, and reception music shaped to the feeling of the day.",
      idealFor: "Ceremonies, receptions, rehearsal dinners"
    },
    {
      title: "Community Events",
      description:
        "Family-friendly soul and groove for public programs, arts events, and outdoor stages.",
      idealFor: "Festivals, fundraisers, cultural events"
    }
  ],
  events: [
    {
      date: "Now booking",
      title: "Spring and summer private events",
      location: "Santa Barbara County"
    },
    {
      date: "Available",
      title: "Acoustic trio sessions",
      location: "Central Coast"
    }
  ]
};

type WordPressPage = {
  acf?: Partial<SiteContent>;
};

export async function getSiteContent(): Promise<SiteContent> {
  const endpoint = process.env.WORDPRESS_API_URL;

  if (!endpoint) {
    return fallbackContent;
  }

  try {
    const response = await fetch(`${endpoint.replace(/\/$/, "")}/wp-json/wp/v2/pages?slug=home`, {
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return fallbackContent;
    }

    const pages = (await response.json()) as WordPressPage[];
    const acf = pages[0]?.acf;

    return {
      ...fallbackContent,
      ...acf,
      heroActions: {
        ...fallbackContent.heroActions,
        ...acf?.heroActions
      }
    };
  } catch {
    return fallbackContent;
  }
}
