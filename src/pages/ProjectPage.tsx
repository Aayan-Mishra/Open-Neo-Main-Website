// React import not required with new JSX transform
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import { ExternalLink } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import ReactMarkdown from 'react-markdown';

function normalizeSlug(s: string) {
  return s.trim().toLowerCase().replace(/[^a-z0-9-]+/g, '-');
}

export default function ProjectPage() {
  const { slug: rawSlug } = useParams();
  const navigate = useNavigate();
  const slug = rawSlug ? normalizeSlug(rawSlug) : '';

  const project = projects.find((p) => normalizeSlug(p.slug) === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 bg-black text-white">
        <div className="max-w-4xl mx-auto py-40 text-center">
          <h1 className="text-5xl font-bold mb-6">Project not found</h1>
          <p className="text-xl text-gray-300">We couldn't find a project with the slug "{rawSlug}".</p>
          <div className="mt-8">
            <button onClick={() => navigate('/projects')} className="px-6 py-3 rounded-lg bg-blue-600">Back to projects</button>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // If the incoming slug is not the canonical slug, navigate to the canonical path (friendly redirects)
    if (project && rawSlug && normalizeSlug(project.slug) === slug && project.slug !== rawSlug) {
      // replace history so users and crawlers see canonical URL
      navigate(`/projects/${project.slug}`, { replace: true });
      return;
    }

    document.title = `${project.name} — Noema Research`;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', project.description || '');

    const _ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!_ogTitle) {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:title');
      el.content = `${project.name} — Noema Research`;
      document.head.appendChild(el);
    } else {
      _ogTitle.content = `${project.name} — Noema Research`;
    }

    const _ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!_ogDesc) {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:description');
      el.content = project.description || '';
      document.head.appendChild(el);
    } else {
      _ogDesc.content = project.description || '';
    }

    if (project.images && project.images.length > 0) {
      let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.content = project.images[0];
    }

    // og:url and canonical link
    const canonicalUrl = `${window.location.origin}/projects/${project.slug}`;
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
  }, [project]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const features: string[] = ((): string[] => {
    if (project.longDescription) {
      const lines = project.longDescription.split('\n').map((l) => l.trim()).filter(Boolean);
      return lines.slice(0, 6);
    }
    return project.tags || [];
  })();

  // Use explicit project.type to decide model vs product/service. Defaults to non-model.
  const isModelProject = project.type === 'model';

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <div className="max-w-6xl mx-auto py-20 px-4">
        <div className="mb-6 flex items-center gap-4">
          <Link to="/projects" className="text-sm text-gray-300 hover:text-white">← Back to projects</Link>
        </div>

        <section className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">{project.name}</h1>
            {project.tagline && <p className="text-lg text-gray-300 mb-4">{project.tagline}</p>} 
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.status && <span className="text-sm px-3 py-1 rounded-full bg-green-900/40 text-green-300">{project.status}</span>}
              {project.version && <span className="text-sm px-3 py-1 rounded-full bg-zinc-900 text-zinc-300">v{project.version}</span>}
              {project.releaseDate && <span className="text-sm px-3 py-1 rounded-full bg-zinc-900 text-zinc-300">Released {project.releaseDate}</span>}
            </div>

            <p className="text-lg text-gray-300 mb-6">{project.description}</p>

            <div className="flex gap-4 mb-8">
              {project.link && (
                <a href={project.link} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-lg hover:opacity-90 transition" target="_blank" rel="noopener noreferrer">
                  {isModelProject ? 'View on HuggingFace' : 'Visit site'}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.repo && (
                <a href={project.repo} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white text-lg hover:opacity-90 transition">Repository</a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-lg hover:bg-blue-700 transition-colors">
                  Try Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            {project.metrics && (
              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                {project.metrics.map((m) => (
                  <div key={m.name} className="px-3 py-2 rounded-lg bg-zinc-900">{m.name}: <strong className="ml-2 text-white">{m.value}</strong></div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full md:w-96">
            {project.images && project.images.length > 0 ? (
              <button onClick={() => setLightboxIndex(0)} className="w-full rounded-2xl overflow-hidden block">
                <img src={project.images[0]} alt={`${project.name} cover`} className="w-full h-64 object-cover rounded-2xl" />
              </button>
            ) : (
              <div className="w-full h-64 rounded-2xl bg-[#0b0b0b] flex items-center justify-center">No preview</div>
            )}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            {project.longDescription ? (
              <div className="prose prose-invert text-gray-200">
                <ReactMarkdown>{project.longDescription}</ReactMarkdown>
              </div>
            ) : (
              <p className="text-gray-300">{project.description}</p>
            )}

            <h3 className="text-xl font-semibold mt-8 mb-3">Features</h3>
            <ul className="list-disc pl-5 text-gray-300">
              {features.map((f, i) => (
                <li key={i} className="mb-2">{f}</li>
              ))}
            </ul>

            {isModelProject && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-3">How to use</h3>
                <div className="text-gray-300">
                  <p>Install or load the model from the linked repository or HuggingFace set. Below is a minimal usage snippet (pseudo):</p>
                  <pre className="bg-black/60 rounded-md p-4 mt-4 overflow-auto"><code>{`from transformers import AutoModel\n\nmodel = AutoModel.from_pretrained('${project.repo || project.link}')\n# run inference...`}</code></pre>
                </div>
              </>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-zinc-900 p-4 rounded-xl">
              <h4 className="text-sm text-gray-400 mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {(project.tags || []).map((t) => <span key={t} className="text-xs px-2 py-1 bg-black/40 rounded">{t}</span>)}
              </div>
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl">
              <h4 className="text-sm text-gray-400 mb-2">Contributors</h4>
              <div className="space-y-2">
                {(project.authors || []).map((a) => (
                  <div key={a.name} className="flex items-center gap-3">
                    {a.avatar ? <img src={a.avatar} alt={a.name} className="w-10 h-10 rounded-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-zinc-700" />}
                    <div>
                      <div className="text-sm font-medium">{a.name}</div>
                      {a.role && <div className="text-xs text-gray-400">{a.role}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          {project.images && project.images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((img, i) => (
                <button key={i} onClick={() => setLightboxIndex(i)} className="rounded-2xl overflow-hidden focus:outline-none">
                  <img src={img} alt={`${project.name} ${i + 1}`} className="w-full h-48 object-cover" />
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden h-64 bg-[#0b0b0b] flex items-center justify-center text-gray-500">No media available</div>
          )}
        </section>

        {lightboxIndex !== null && project.images && (
          <Lightbox images={project.images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
        )}
      </div>
    </div>
  );
}
