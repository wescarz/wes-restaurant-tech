import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { createMetadata } from "@/components/shared/SEO";

export const metadata = createMetadata({
  title: "Blog",
  description: "Artículos sobre food cost, digitalización, HACCP y gestión de restaurantes.",
  path: "/blog",
});

const CATEGORIES = ["Food Cost", "Digitalización", "HACCP", "Gestión"];

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)]">Blog</h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Consejos y tendencias para restaurantes
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--accent)]/50"
          >
            <Badge variant="accent" className="mb-3">
              {post.frontmatter.category}
            </Badge>
            <h2 className="font-heading text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
              {post.frontmatter.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-2">
              {post.frontmatter.description}
            </p>
            <p className="mt-4 text-xs text-[var(--text-secondary)]">
              {new Date(post.frontmatter.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-[var(--text-secondary)]">Próximamente más artículos.</p>
      )}
    </div>
  );
}
