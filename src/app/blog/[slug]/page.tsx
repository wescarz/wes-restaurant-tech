import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/components/shared/SEO";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm text-[var(--accent)] hover:underline mb-8 inline-block">
        ← Volver al blog
      </Link>
      <header className="mb-10">
        <p className="text-sm text-[var(--accent)]">{post.frontmatter.category}</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--text-primary)]">
          {post.frontmatter.title}
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          {new Date(post.frontmatter.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>
      <div className="blog-content text-[var(--text-primary)] [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mt-4 [&_a]:text-[var(--accent)] [&_a]:hover:underline [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2">
        <MDXRemote source={post.content} />
      </div>
      <div className="mt-12">
        <Button href="/blog" variant="outline">
          Más artículos
        </Button>
      </div>
    </article>
  );
}
