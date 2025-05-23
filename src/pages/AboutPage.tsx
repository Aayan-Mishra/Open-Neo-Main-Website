import React from 'react';
import { Calendar, Users, Lightbulb, Target, Github, Mail, Twitter } from 'lucide-react';

const milestones = [
  {
    date: 'May 2025',
    title: 'Noema Labs was born',
    description: 'On May 15st, 2025, Noema Labs was officially launched as a research lab focused on AI.',
  },
  {
    date: 'May 2025',
    title: 'NoemaCoder-T1-8B Preview',
    description: 'The first preview of NoemaCoder-T1-8B was released (soon!), showcasing our commitment to open-source AI.',
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
    description: "Pushing the boundaries of what's possible in AI research.",
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
    description: 'Creating solutions that make a real difference in the world.',
  },
  {
    icon: (
      <div className="animate-wave">
        <span className="text-2xl">🤝</span>
      </div>
    ),
    title: 'Collaborative Spirit',
    description: 'Working together to achieve breakthrough results.',
  },
];

const teamMembers = [
  {
    name: 'Aayan Mishra',
    role: '',
    image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/669c7b63fe9496b3c680ed87/duK8vCRM2UBvtxhM5h2va.jpeg',
    social: {
      github: '',
      x: '',
      contact: '',
    },
    hoverEffect: 'hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-red-500/40',
  },
  {
    name: 'Ameer Azam',
    role: '',
    image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/6266513d539521e602b5dc3a/NsKi_PW21BkNq5F-TdnHt.png',
    social: {
      github: 'https://github.com/ameerazam08',
      x: '',
      contact: '',
    },
    hoverEffect: 'hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/40',
  },
  {
    name: 'Adversing',
    role: '',
    image: '/team/60707212.jpeg',
    social: {
      github: 'https://github.com/Adversing',
      x: 'https://x.com/adversing',
      contact: ''
    },
    hoverEffect: 'hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/40'
  },
  {
    name: 'Arush Sharma',
    role: '',
    image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/65b2ac56e4191ceeb406aa4b/s4evTNuBvU-580uGg9X1v.png',
    social: {
      github: 'https://github.com/Arush04',
      x: '',
      contact: '',
    },
    hoverEffect: 'hover:scale-[1.02] hover:-rotate-1 hover:shadow-lg hover:shadow-cyan-500/40',
  },
  {
    name: 'Hafedh Hichri',
    role: '',
    image: 'https://avatars.githubusercontent.com/u/70411813?v=4',
    social: {
      github: 'https://github.com/not-lain',
      x: '',
      contact: '',
    },
    hoverEffect: 'hover:scale-105 hover:shadow-lg hover:shadow-rose-500/40',
  },
  {
    name: 'Jordan Pfost',
    role: '',
    image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/no-auth/hbBSfayZfpLYrE925K7zV.png',
    social: {
      github: 'https://github.com/fromancient',
      x: '',
      contact: '',
    },
    hoverEffect: 'hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/40',
  },
  {
    name: 'Ashay Srivastava',
    role: '',
    image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/653d84f13fc9c706fa755d03/F_jYbeuLLM9EX8hKXcbHD.png',
    social: {
      github: 'https://github.com/ashay-sriv-06',
      x: '',
      contact: '',
    },
    hoverEffect: 'hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-orange-500/40',
  },
];

export default function AboutPage() {
  const isEmail = (str: string) => {
    return str.includes('@') && str.includes('.');
  };

  const getContactHref = (contact: string) => {
    if (isEmail(contact)) {
      return `mailto:${contact}`;
    }
    if (!contact.startsWith('http')) {
      return `https://${contact}`;
    }
    return contact;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Noema Labs</h1>
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
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.x && (
                      <a 
                        href={member.social.x}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s X (Twitter)`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.contact && (
                      <a 
                        href={getContactHref(member.social.contact)}
                        className="text-gray-400 hover:text-white transition-colors"
                        target={isEmail(member.social.contact) ? undefined : '_blank'}
                        rel={isEmail(member.social.contact) ? undefined : 'noopener noreferrer'}
                        aria-label={`Contact ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
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
