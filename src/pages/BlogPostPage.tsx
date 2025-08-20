// React import not required with new JSX transform
import { useParams, Link } from 'react-router-dom';
import blogs, { BlogPost } from '../data/blogs';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

type CodeProps = { inline?: boolean; className?: string; children?: any };

function CodeBlock({ inline, className, children }: CodeProps) {
  const codeString = String(children || '').replace(/\n$/, '');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(codeString);
      } else {
        const ta = document.createElement('textarea');
        ta.value = codeString;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  if (inline) return <code className={className}>{children}</code>;

  // Hotfix: always render a safe fallback block (no dynamic imports) to avoid runtime errors in production.
  return (
    <div className="relative">
      <button onClick={handleCopy} className="absolute right-3 top-3 z-10 bg-black/60 text-white text-xs px-3 py-1 rounded-md hover:bg-black/80">{copied ? 'Copied' : 'Copy'}</button>
      <pre className="rounded-md bg-[#0b0b0b] p-4 overflow-auto text-sm"><code className={className}>{codeString}</code></pre>
    </div>
  );
}

export default function BlogPostPage() {
  const { slug: raw } = useParams();
  const slug = raw ? raw.toLowerCase() : '';
  const post = blogs.find((b) => b.slug.toLowerCase() === slug) as BlogPost | undefined;

  if (!post) {
    return (
      <div className="min-h-screen pt-20 bg-black text-white">
        <div className="max-w-4xl mx-auto py-40 text-center">
          <h1 className="text-5xl font-bold mb-6">Post not found</h1>
          <p className="text-xl text-gray-300">We couldn't find a post with the slug "{raw}".</p>
          <div className="mt-8">
            <Link to="/blog" className="px-6 py-3 rounded-lg bg-blue-600">Back to blog</Link>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    document.title = `${post.title} — Noema Research`;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', post.excerpt || '');

    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setProp('og:title', `${post.title} — Noema Research`);
    setProp('og:description', post.excerpt || '');
    if (post.image) setProp('og:image', post.image);

    const canonicalUrl = `${window.location.origin}/blog/${post.slug}`;
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (!ogUrl) {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:url');
      el.content = canonicalUrl;
      document.head.appendChild(el);
    } else {
      ogUrl.content = canonicalUrl;
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    } else {
      canonicalLink.href = canonicalUrl;
    }
  }, [post]);

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="mb-6 flex items-center gap-4">
          <Link to="/blog" className="text-sm text-gray-300 hover:text-white">← Back to blog</Link>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <p className="text-gray-400 mb-6">{post.date} • {post.readTime}</p>
            {post.image && <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8" />}
            <div className="prose prose-invert text-gray-200">
              <ReactMarkdown components={{ code: CodeBlock }}>
                {post.content || ''}
              </ReactMarkdown>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-zinc-900 p-4 rounded-xl">
              <h4 className="text-sm text-gray-400 mb-2">Author</h4>
              <div>
                <a href={`/author/${encodeURIComponent(post.author || '')}`} className="text-white font-medium">{post.author}</a>
              </div>
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl">
              <h4 className="text-sm text-gray-400 mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {/* placeholder tags - extend frontmatter to support tags */}
                <span className="text-xs px-2 py-1 bg-black/40 rounded">research</span>
                <span className="text-xs px-2 py-1 bg-black/40 rounded">models</span>
              </div>
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl">
              <h4 className="text-sm text-gray-400 mb-2">Share</h4>
              <div className="flex flex-col gap-2">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title + ' ' + (window.location.href))}`} target="_blank" rel="noopener noreferrer" className="text-blue-400">Share on Twitter</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400">Share on LinkedIn</a>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
