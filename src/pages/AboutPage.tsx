import React from 'react';
import { Calendar, Users, Lightbulb, Target, Github, Mail, Twitter } from 'lucide-react';

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
    title: 'Kyro-n1',
    description: 'Launched our first text generation model, Kyro-n1.'
  },
  {
    date: 'February 2025',
    title: 'Open-Neo',
    description: 'Odyssey Labs is renamed to Open-Neo'
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
    image: 'https://cdn-avatars.huggingface.co/v1/production/uploads/669c7b63fe9496b3c680ed87/q5ZIvWlOkLc4PDz40H8o_.jpeg',
    social: {
      github: 'https://github.com/Aayan-Mishra',
      x: 'https://x.com/Spestly',
      contact: 'https://aayan-mishra.vercel.app/'
    },
    hoverEffect: 'hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-red-500/40'
  },
  {
    name: 'Adversing',
    role: 'Deep Learning Engineer',
    image: '/team/60707212.jpeg',
    social: {
      github: 'https://github.com/Adversing',
      x: 'https://x.com/adversing',
      contact: 'adversing@odysseylabs.ai'
    },
    hoverEffect: 'hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/40'
  },
  {
    name: 'macintosh',
    role: 'Machine Learning Engineer',
    image: '/team/191959356.png',
    social: {
      github: 'https://github.com/maciint0sh',
      x: 'https://x.com/macintosh',
      contact: 'macintosh@odysseylabs.ai'
    },
    hoverEffect: 'hover:scale-[1.02] hover:-rotate-1 hover:shadow-lg hover:shadow-cyan-500/40'
  },
  {
    name: 'Specter',
    role: 'Data Scientist',
    image: '/team/103417697.jpeg',
    social: {
      github: 'https://github.com/Aby-ss',
      x: 'https://x.com/heyspecterr',
      contact: 'raoabdulhadi952@gmail.com'
    },
    hoverEffect: 'hover:scale-105 hover:shadow-lg hover:shadow-rose-500/40'
  },
  {
    name: 'Dark25',
    role: 'External Research Engineer',
    image: '/team/69cee180fb158434697982c71fa4ea0a.png',
    social: {
      github: 'https://github.com/ruben-david-roy',
      x: 'https://x.com/rubendavidroy',
      contact: 'mail@ruben-roy.com'
    },
    hoverEffect: 'hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/40'
  },
];

export default function AboutPage() {
  const isEmail = (str) => {
    return str.includes('@') && str.includes('.');
  };

  const getContactHref = (contact) => {
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
          <h1 className="text-5xl font-bold mb-6">About Open-Neo</h1>
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
