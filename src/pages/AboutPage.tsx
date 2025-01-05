import React from 'react';
import { Calendar, Users, Lightbulb, Target, Github, Linkedin } from 'lucide-react';

const milestones = [
  {
    date: 'October 2024',
    title: 'OdysseyXL was born',
    description: 'Believe it or not but OdysseyXL was a small personal project!'
  },
  {
    date: 'January 2025',
    title: 'Odyssey Labs',
    description: 'With the rapid growth of OdysseyXL, we decided to turn it into a full-fledged research lab.'
  },
  {
    date: 'January 2025',
    title: 'Hercules-3',
    description: 'Launched our flagship text generation model, Hercules-3.'
  },
];

const values = [
  {
    icon: (
      <div className="animate-flicker">
        <Lightbulb className="h-6 w-6 text-yellow-500 transition-all duration-100" />
      </div>
    ),
    title: 'Innovation First',
    description: 'Pushing the boundaries of what\'s possible in AI research.'
  },
  {
    icon: (
      <div className="animate-pulse-grow">
        <div className="relative">
          <Target className="h-6 w-6 text-blue-500" />
          <div className="absolute inset-0 animate-ripple rounded-full border-2 border-blue-500/50"></div>
          <div className="absolute inset-0 animate-ripple delay-300 rounded-full border-2 border-blue-500/50"></div>
        </div>
      </div>
    ),
    title: 'Impact Driven',
    description: 'Creating solutions that make a real difference in the world.'
  },
  {
    icon: (
      <div className="animate-wave">
        <span className="text-2xl">🤝</span>
      </div>
    ),
    title: 'Collaborative Spirit',
    description: 'Working together to achieve breakthrough results.'
  }
];

const teamMembers = [
  {
    name: 'Spestly',
    role: 'Diffusion Model Engineer',
    image: '/team/spestly-ody.png',
    bio: 'Spestly is a deep learning engineer with a passion for creating cutting-edge AI models.',
    social: {
      github: 'https://github.com/Aayan-Mishra',
    },
    hoverEffect: 'hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-red-500/40'
  },
  {
    name: 'Adversing',
    role: 'Deep Learning Engineer',
    image: '/team/60707212.jpeg',
    bio: 'Adversing is a deep learning engineer with a passion for creating cutting-edge AI models.',
    social: {
      github: 'https://github.com/Adversing',
    },
    hoverEffect: 'hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/40'
  },
  {
    name: 'macintosh',
    role: 'Machine Learning Engineer',
    image: '/team/191959356.png',
    bio: 'macintosh is a machine learning engineer with a passion for creating cutting-edge AI models.',
    social: {
      github: 'https://github.com/maciint0sh',
    },
    hoverEffect: 'hover:scale-[1.02] hover:-rotate-1 hover:shadow-lg hover:shadow-cyan-500/40'
  },
  {
    name: 'Ramo',
    role: 'Creative Director',
    image: '/team/8fb0619308eb4976aec5f371ba691f8a.png',
    bio: 'Ramo is a creative director with a passion for creating innovative AI models.',
    social: {
      github: 'https://github.com/iRamo65',
    },
    hoverEffect: 'hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/40'
  },
  {
    name: 'Specter',
    role: 'Data Scientist',
    image: '/team/103417697.jpeg',
    bio: 'Specter is a data scientist with a passion for creating innovative AI models.',
    social: {
      github: 'https://github.com/Aby-ss',
    },
    hoverEffect: 'hover:scale-105 hover:shadow-lg hover:shadow-rose-500/40'
  },
  {
    name: 'Dark25',
    role: 'External Research Engineer',
    image: '/team/69cee180fb158434697982c71fa4ea0a.png',
    bio: 'Dark25 has a passion for creating innovative AI models.',
    social: {
      github: 'https://github.com/ruben-david-roy',
    },
    hoverEffect: 'hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/40'
  },
   {
    name: 'Kazex',
    role: 'Media Director',
    image: '/team/Kazex.png',
    bio: 'Kazex has a passion for creating innovative AI models.',
    social: {},
    hoverEffect: 'hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-cyan-500/40'
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Odyssey Labs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of researchers, engineers, and innovators dedicated to advancing
            the field of artificial intelligence through groundbreaking research and development.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="overflow-x-auto">
            <div className="relative min-w-max mx-auto" style={{ width: 'fit-content' }}>
              {/* Timeline Line */}
              <div className="absolute h-0.5 bg-blue-500/20 top-8 left-0 right-0 z-0">
                <div className="h-full bg-blue-500 w-full animate-timeline-progress"></div>
                {/* End dots */}
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
              </div>
              
              {/* Timeline Items */}
              <div className="flex gap-16 relative z-10">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center w-64 opacity-0 animate-timeline-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Date Bubble */}
                    <div className="w-24 h-24 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center mb-4">
                      <span className="text-blue-500 font-bold text-center text-sm">{milestone.date}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-black/40 rounded-xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="mb-4">
                  <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm inline-block">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`p-6 bg-black/20 rounded-xl border border-white/10 transition-all duration-300 ${member.hoverEffect}`}
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        className="text-gray-400 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
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
