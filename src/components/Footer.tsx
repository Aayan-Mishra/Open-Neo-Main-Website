import React, { useState } from 'react';
import { Github, Twitter, Mail, Monitor, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000); // Hide message after 5 seconds
  };

  return (
    <footer className="bg-black/80 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Open-Neo</h3>
            <p className="text-gray-400 text-sm">
              Revolutionizing the future of AI through groundbreaking research and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white text-sm">Projects</a></li>
              <li><a href="/research" className="text-gray-400 hover:text-white text-sm">Research</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Odyssey-Labs-AI" 
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="" 
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:odysseylabs.ai@proton.me" 
                className="text-gray-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/mZ9BxT29Hz"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Monitor className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
              {showMessage && (
                <p className="text-sm text-gray-400 mt-2 animate-fade-in">
                  🚧 Uh oh, We don't have this setup yet. Sorry!
                </p>
              )}
            </form>

            {/* Status Indicator */}
            <a 
              href="https://odysseylabs.statuspage.io/"  // or your status page URL
              className="mt-4 flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="relative">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="absolute inset-0 h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
              </div>
              <span className="text-gray-300 text-sm">All systems operational</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Open-Neo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
