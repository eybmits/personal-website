// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  email: string;
  desc: string;
  title: string;
  shortName: string;
  repository: string;
  twitterHandle: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration.
export const SITE: Site = {
  website: "https://eybmits.github.io/",
  author: "Markus Baumann",
  profile: "https://eybmits.github.io/about",
  email: "markus.baumann@campus.lmu.de",
  desc: "Markus Baumann is a researcher at LMU Munich / QAR-Lab working on Quantum Reservoir Computing, Quantum Machine Learning, and time-series forecasting, with public artifacts for reproducible and inspectable computational research.",
  title: "Markus Baumann",
  shortName: "eybmits",
  repository: "https://github.com/eybmits/research-website",
  twitterHandle: "",
  ogImage: "avatar.png",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/eybmits/research-website/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "Europe/Berlin",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  { href: "/", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/archives", label: "Archives" },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/eybmits", label: "GitHub" },
  {
    href: "https://scholar.google.com/citations?hl=en&user=gjjgrw0AAAAJ",
    label: "Google Scholar",
  },
  {
    href: "https://www.ifi.lmu.de/mvs/de/team/kontaktseite/markus-baumann-eb504667.html",
    label: "LMU profile",
  },
  { href: "https://qarlab.de/en/", label: "QAR-Lab" },
  { href: "/rss.xml", label: "RSS" },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Twitter: "twitter",
  BlueSky: "bsky",
  RSS: "rss",
  Email: "mail",
};
