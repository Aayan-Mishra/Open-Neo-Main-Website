// React import not required with new JSX transform
import { Link } from 'react-router-dom';
import { Brain, ExternalLink } from 'lucide-react';
import projects from '../data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center text-white">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Building tools and research that consciously enhance cognitive, educational, and medical capabilities for real-world impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group relative rounded-3xl bg-[#111111] p-8 block"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-black">
                    <Brain className="h-12 w-12 text-purple-500" />
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
                  {project.link && (
                    <span className="inline-flex items-center px-6 py-3 rounded-xl bg-black text-white text-lg">
                      Learn More
                    </span>
                  )}
                  {project.demoUrl && (
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-lg">
                      Try Demo
                      <ExternalLink className="h-5 w-5" />
                    </span>
                  )}
                </div>

                {/* Preview area */}
                <div className="rounded-2xl overflow-hidden h-44 bg-[#0b0b0b] flex items-center justify-center text-gray-500">
                  <span>Preview</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
