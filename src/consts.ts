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
// Replace placeholder values below with your real profile/domain details.
export const SITE: Site = {
  website: "https://eybmits.github.io/",
  author: "Markus Baumann",
  profile: "https://eybmits.github.io/about",
  desc: "Personal website and blog about software, products, and ideas I'm building.",
  title: "Markus Baumann",
  shortName: "eybmits",
  repository: "https://github.com/eybmits/personal-website",
  twitterHandle: "",
  ogImage: "avatar.svg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/eybmits/personal-website/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "America/New_York",
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
