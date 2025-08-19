// React import not required with new JSX transform
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
  title: "The Evolution of OdysseyXL: A Journey Through Responsible Innovation",
  excerpt: "Discover the technical breakthroughs and design decisions behind OdysseyXL and how we shape models to augment human creativity responsibly.",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "/blog/odyssey-evolution.jpg",
    category: "Research",
    author: {
      name: "Spestly",
      avatar: "/team/spestly-ody.png"
    },
    slug: "evolution-of-odysseyxl"
  },
  {
  title: "Hercules-3: Towards Better Cognitive Assistants",
  excerpt: "An in-depth look at how Hercules-3 advances reliable language understanding to support education and research workflows.",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "/blog/hercules-boundaries.jpg",
    category: "Technology",
    author: {
      name: "Adversing",
      avatar: "/team/60707212.jpeg"
    },
    slug: "hercules-3-boundaries"
  },
  {
  title: "The Future of Human Capability: Our Vision",
  excerpt: "Exploring our perspective on how research and tools can consciously elevate learning, cognition, and healthcare.",
    date: "March 5, 2025",
    readTime: "10 min read",
    image: "/blog/future-ai-vision.jpg",
    category: "Vision",
    author: {
      name: "Ramo",
      avatar: "/team/8fb0619308eb4976aec5f371ba691f8a.png"
    },
    slug: "future-of-ai-vision"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, updates, and deep dives into our latest research and developments
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-black/30 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400">
                      {post.category}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-400">{post.author.name}</span>
                    </div>

                    {/* Date & Read Time */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a 
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 