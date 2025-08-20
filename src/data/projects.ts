export type Project = {
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  longDescription?: string; // markdown
  status?: string;
  link?: string;
  demoUrl?: string;
  repo?: string;
  license?: string;
  version?: string;
  releaseDate?: string;
  type?: 'model' | 'product' | 'service' | 'other';
  tags?: string[];
  metrics?: { name: string; value: string }[];
  authors?: { name: string; role?: string; avatar?: string; profile?: string }[];
  images?: string[];
};

const projects: Project[] = [
  {
    slug: 'nous-model-family',
    name: 'Nous Model Family',
  type: 'model',
    tagline: 'Open models for reasoning, agents and chat — small to large variants',
    description: 'The Nous Model Family is a research-driven collection of open models spanning small to very large parameter counts; designed to offer a consistent instruction-following experience whether you need lightweight latency-optimized models or large-capacity reasoning models.',
    longDescription: `The Nous Model Family targets a wide spectrum of use-cases from edge deployment to large-scale reasoning and long-form chain-of-thought tasks.

Core principles and deliverables:

- Multi-scale design: variants that prioritize either inference cost (small models) or deep reasoning and context retention (larger models).
- Instruction tuning and evaluation: standardized evaluation suites, model cards, and reproducible notebooks to compare instruction-following, factuality, and safety tradeoffs.
- Interoperability: recommended tokenizers, checkpoint formats, and deployment notes so projects can move from research prototypes into production reliably.
- Community-driven benchmarks and contribution guidelines to encourage extensions, adapters, and fine-tuning recipes.

How teams use the family:

- Researchers use the larger variants for chain-of-thought experiments and high-quality assistant behavior.
- Product teams use medium and small variants for conversational features where cost and latency matter.
- Ops teams deploy the smallest variants for on-device or low-inference-cost backends, often applying quantization and pruning to reach targeted SLA goals.

The Nous family is accompanied by documentation, model cards, and example deployments to shorten the path from research to product integration.`,
    status: 'Active',
    link: 'https://huggingface.co/sets/nous-model-family',
    demoUrl: '',
    repo: 'https://github.com/Noema-Research/nous-model-family',
    license: 'MIT',
    version: '1.2.0',
    releaseDate: '2025-06-10',
    tags: ['open-model', 'reasoning', 'agents', 'chat'],
    metrics: [
      { name: 'Params', value: '2B / 4B / 8B' },
      { name: 'Latency', value: '50–300ms (depending on variant & hardware)' }
    ],
    authors: [
      { name: 'Aayan Mishra', role: 'Founder, Noema Research', avatar: 'https://avatars.githubusercontent.com/u/176997922?s=400&u=1d5678bbadc68b20b829f64106c8074475a03e7b&v=4', profile: 'https://aayanmishra.com' }
    ],
    images: [
      '/projects/odyssey/odysseyxl.png',
      '/projects/hercules/Hercules-3.png',
      '/team/103417697.jpeg'
    ]
  },
  {
    slug: 'victor-academy',
    name: 'Victor Academy',
  type: 'product',
    tagline: 'AI-powered study partner for mock tests, textbook tutoring, and progress tracking',
    description: 'Victor Academy is an AI-first education platform that blends adaptive mock tests, AI-guided textbook tutoring, flashcards, and university application tools into a unified student experience.',
    longDescription: `Victor Academy is an AI-powered education platform built to help students prepare more effectively and confidently for exams and applications.

What Victor provides:

- Adaptive mock tests with AI grading: realistic exam simulations with automated, actionable feedback that highlights conceptual gaps and next-step study recommendations.
- Textbook tutoring and targeted Q&A: upload or reference textbook content and receive concise explanations, worked examples, and clarifications.
- Exodus AI: an in-product tutoring assistant that explains solutions step-by-step and adapts explanations to a student's level.
- Study tools: Feynman-style flashcards, focused revision planners, and progress dashboards to track strengths and weaknesses over time.
- University & application support: advice and feedback on personal statements and interview prep for college admissions.

Beta & model notes:

Victor Academy is currently in Beta; many features are available free for beta testers. The product offers tiered plans (Victor Free, Victor Plus, Victor Max) where the Plus/Max tiers add more tests, faster AI models, and unlimited tutoring sessions.

Global curriculum support:

Victor advertises support for HSC, SAT, AP, IB, A-Levels and other curricula — making it suitable for international students preparing for a variety of exams.

Source: public content from https://victor.aayanmishra.com/ (metadata and feature descriptions).`,
    status: 'Beta',
    link: 'https://victor.aayanmishra.com/',
    demoUrl: 'https://victor.aayanmishra.com/',
    repo: '',
    license: '',
    version: '',
    releaseDate: '2025-08-19',
    tags: ['education', 'ai', 'assessment', 'tutoring', 'edtech'],
    metrics: [
      { name: 'Active Students', value: '100+' },
      { name: 'Success Rate', value: '95%' },
      { name: 'Questions Answered', value: '10k+' },
      { name: 'Rating', value: '4.9★' }
    ],
    authors: [
      { name: 'Aayan Mishra', role: 'Founder, Noema Research', avatar: 'https://avatars.githubusercontent.com/u/176997922?s=400&u=1d5678bbadc68b20b829f64106c8074475a03e7b&v=4', profile: 'https://aayanmishra.com' }
    ],
    images: [
      '/projects/victor/victor-light.svg'
    ]
  },
  // Add more projects here with unique slugs
];

export default projects;
