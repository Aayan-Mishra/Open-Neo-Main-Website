// Dynamic blog loader: reads markdown files from ../content/blog at build time using Vite.
export type BlogPost = {
  title: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  image?: string;
  category?: string;
  author?: string;
  slug: string;
  content?: string; // markdown
};

function parseFrontmatter(raw: string) {
  const fmRegex = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;
  const m = raw.match(fmRegex);
  if (!m) return { data: {}, content: raw };
  const fm = m[1];
  const content = m[2] || '';
  const data: Record<string, any> = {};
  fm.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
    data[key] = val;
  });
  return { data, content };
}

// import all markdown files in src/content/blog as raw text (eager at build time)
// Vite changed the glob API: replace `as: 'raw'` with `query: '?raw', import: 'default'`.
const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const posts: BlogPost[] = Object.entries(modules).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw);
  // slug from frontmatter or filename
  const filename = path.split('/').pop() || path;
  const slug = (data.slug as string) || filename.replace(/\.md$/, '');
  return {
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    date: data.date || '',
    readTime: data.readTime || '',
    image: data.image || '',
    category: data.category || '',
    author: data.author || '',
    slug,
    content,
  };
});

// sort by date desc if available
posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

export default posts;

