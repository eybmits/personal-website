import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# ${SITE.title}

${SITE.desc}

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [your-username](https://github.com/your-username)
- LinkedIn: [your-profile](https://www.linkedin.com/in/your-profile/)
- Email: hello@example.com

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
