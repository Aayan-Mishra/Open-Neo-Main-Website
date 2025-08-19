// React import not required with new JSX transform
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogs from '../data/blogs';

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-gray-400 mb-8">Insights and updates from Noema Research.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="overflow-hidden rounded-3xl bg-black/40 border border-white/10 hover:border-white/20 transition-all">
              <div className="aspect-[3/1] overflow-hidden">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#0b0b0b] flex items-center justify-center text-gray-500">No preview</div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white mb-0">{post.title}</h3>
                  <span className="ml-auto text-sm px-3 py-1 rounded-full bg-blue-900/50 text-blue-400">{post.category}</span>
                </div>

                <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>

                <div className="flex items-center">
                  <div className="text-sm text-gray-400">{post.date} • {post.readTime}</div>
                  <div className="ml-auto inline-flex items-center text-blue-400">Read more <ArrowRight className="ml-2 h-4 w-4" /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
