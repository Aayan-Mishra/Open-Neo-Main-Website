import React from 'react';
import { Brain, Image, MessageSquare, Cpu, ExternalLink, Atom} from 'lucide-react';

const projects = [
  {
    icon: <Image className="h-12 w-12 text-blue-500" />,
    name: 'OdysseyXL',
    description: "State-of-the-art text-to-image generation model with unprecedented quality and control. Powerd by Stability.ai's SDXL 1.0",
    status: 'Active',
    link: 'https://github.com/Odyssey-Labs-AI/OdysseyXL',
    demoUrl: 'https://john6666-votepurchase-multiple-model.hf.space',
    imageLayout: 'grid',
    images: [
      '/projects/odyssey/1.png',
      '/projects/odyssey/2.webp',
      '/projects/odyssey/3.png'
    ]
  },
  {
    icon: <Brain className="h-12 w-12 text-purple-500" />,
    name: 'Apollo-1',
    description: 'Advanced language model pushing the boundaries of natural language understanding. Both Agentic and Chat models. Powerd by Qwen2.5',
    status: 'Under Development',
    link: 'https://huggingface.co/collections/odyssey-labs/apollo-1-67a0699068444e40017e4558',
    demoUrl: '',
    imageLayout: 'grid',
    images: []
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center text-white">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Exploring the frontiers of artificial intelligence through innovative research and development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-3xl bg-[#111111] p-8"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-black">
                    {project.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-4xl font-bold text-white mb-3">
                      {project.name}
                    </h3>
                    <span className={`text-sm px-6 py-2 rounded-full inline-block ${
                      project.status === 'Active' ? 'bg-green-900/50 text-green-400' :
                      'bg-blue-900/50 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed mb-8">{project.description}</p>
                
                <div className="flex gap-4 mb-8">
                  <a
                    href={project.link}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-black text-white text-lg hover:bg-black/70 transition-colors"
                  >
                    Learn More
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-lg hover:bg-blue-700 transition-colors"
                    >
                      Try Demo
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                
                {/* Project Images */}
                {project.imageLayout === 'grid' ? (
                  <div className="grid grid-cols-3 gap-4">
                    {project.images.map((image, imageIndex) => (
                      <div 
                        key={imageIndex} 
                        className="aspect-square rounded-2xl overflow-hidden"
                      >
                        <img 
                          src={image} 
                          alt={`${project.name} preview ${imageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl overflow-hidden h-[500px]">
                    <img 
                      src={project.images[0]} 
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
