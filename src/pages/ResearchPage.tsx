import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const papers = [
  {
    title: 'Announcing Open-Neo - SOTA Generative AI',
    authors: 'Open-Neo Founding team',
    date: 'Jan 2025',
    conference: 'News',
    abstract: 'Today, we are thrilled to announce the launch of Open-Neo. As a key contributor to the generative AI research community, our mission is to pioneer and refine state-of-the-art generative deep learning models for media, including images and videos, and to push the boundaries of creativity, efficiency, and diversity. We believe that generative AI will…',
    link: 'https://huggingface.co/open-neo',
    image: 'https://cdn-lfs-us-1.hf.co/repos/16/14/1614554dd1168c7fec8df36ea340434a161d77f621eebc46439941088c6b783c/23538cc1a979fd9fc702cab5b38aa02c5f01b85dfb0f88cb696d323a166af076?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27Open-Neo.png%3B+filename%3D%22Open-Neo.png%22%3B&response-content-type=image%2Fpng&Expires=1748141131&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0ODE0MTEzMX19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zLzE2LzE0LzE2MTQ1NTRkZDExNjhjN2ZlYzhkZjM2ZWEzNDA0MzRhMTYxZDc3ZjYyMWVlYmM0NjQzOTk0MTA4OGM2Yjc4M2MvMjM1MzhjYzFhOTc5ZmQ5ZmM3MDJjYWI1YjM4YWEwMmM1ZjAxYjg1ZGZiMGY4OGNiNjk2ZDMyM2ExNjZhZjA3Nj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=GToRByQVLFj5p%7ER6upx3RLhb-A-bNNrWNbMK11bGQ2JX5Pn5EWhdomF8U4xAvs8UH1izQzfQXO53GNRJ7lAV2llNr3JusBQfuYPijbACHd-Ba11xpCKdikeU-3pWAnOglg9EwFJ3%7EeV1cNQqGpzi08bIlfmixd33JAyC1wI0My51sgA7LtIrQSrKJENrefqaohl2uTB2d8NIqaeLMYLzE03vulM7sU9F7KVOSFK-ocO--cUzX2vHez6bvOeXP47nQWs8IxPc-3QYKvhowwsskO07kWOyCSBu%7EoH8uPJR-YiV9R6-e7%7E1bVUZXS%7E-JM39QkUYF1dSrGWMsPi-XfepOA__&Key-Pair-Id=K24J24Z295AEI9'
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
                        Read More
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
