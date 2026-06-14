import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# ${SITE.title}

${SITE.desc}

[Principles I believe in.](/posts/2026/things-i-believe-in)

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [eybmits](https://github.com/eybmits)
- LMU profile: [Markus Baumann](https://www.ifi.lmu.de/mvs/en/team/contact-page/contact-page_9536.html)
- QAR-Lab: [Quantum Applications and Research Laboratory](https://qarlab.de/en/)
- Google Scholar: [Markus Baumann profile](https://scholar.google.com/citations?hl=en&user=gjjgrw0AAAAJ)
- Email: hello@eybmits.dev

---

*This is the markdown-only view. Visit the full website for interactive features like search and theme switching.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
