// React import not required with new JSX transform
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs';

export default function AuthorPage() {
  const { name } = useParams();
  const author = name || '';
  const posts = blogs.filter((p) => (p.author || '').toLowerCase() === author.toLowerCase());

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <div className="max-w-4xl mx-auto py-20 px-4">
        <Link to="/blog" className="text-sm text-gray-300 hover:text-white">← Back to blog</Link>
        <h1 className="text-4xl font-bold mt-6 mb-6">Author: {author}</h1>
        {posts.length === 0 ? (
          <p className="text-gray-400">No posts found for this author.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="block p-4 bg-[#0b0b0b] rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-gray-400">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
