import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const markdownContent = `# About ${SITE.title}

I'm ${SITE.author}, a software engineer focused on building useful products and sharing practical learnings from shipping real systems.

## Focus Areas

- Product engineering
- AI-assisted development workflows
- Developer tooling and architecture
- Technical writing

## Contact

- GitHub: https://github.com/your-username
- LinkedIn: https://www.linkedin.com/in/your-profile/
- Email: hello@example.com

---

[Back to Home](/index.md)`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
