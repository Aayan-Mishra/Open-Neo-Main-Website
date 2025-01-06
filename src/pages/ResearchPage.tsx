import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const papers = [
  {
    title: 'Announcing Odyssey Labs - SOTA GenAI',
    authors: 'Odyssey Labs',
    date: '2025',
    conference: 'News',
    abstract: 'Today, we are thrilled to announce the launch of Odyssey Labs. As a key contributor to the generative AI research community, our mission is to pioneer and refine state-of-the-art generative deep learning models for media, including images and videos, and to push the boundaries of creativity, efficiency, and diversity. We believe that generative AI will…',
    link: 'https://huggingface.co/odyssey-labs',
    image: 'https://raw.githubusercontent.com/Odyssey-Labs-AI/Media/refs/heads/main/odysseylabsfix.png'
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Research & Publications</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest research papers, announcements, and scientific contributions
            to the field of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Papers Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {papers.map((paper) => (
              <div
                key={paper.title}
                className="overflow-hidden rounded-3xl bg-black/40 border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Image Section */}
                <div className="aspect-[3/1] overflow-hidden">
                  <img 
                    src={paper.image} 
                    alt={paper.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{paper.title}</h3>
                      <p className="text-gray-400 mb-2">{paper.authors}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        {paper.conference} • {paper.date}
                      </p>
                      <p className="text-gray-300 mb-4">{paper.abstract}</p>
                      <a
                        href={paper.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Read Paper
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
