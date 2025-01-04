import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white animate-fade-in">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Get in touch with our team to learn more about our research,
            collaboration opportunities, or any other inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form Placeholder */}
            <div className="space-y-6 animate-fade-in-left bg-black/30 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
              <p className="text-lg text-gray-300">
                If you would like to contact the team, please fill the form <a href="https://tally.so/r/meKaDe" className="text-blue-400 hover:text-blue-300 underline">here</a>.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group shadow-md">
                  <MapPin className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Location</h3>
                    <p className="text-gray-300">
                      Sydney, Australia 🇦🇺 <br />
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-black/30 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group shadow-md">
                  <Mail className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <h3 className="font-medium mb-1 text-white">Email</h3>
                    <p className="text-gray-300">odysseylabs.ai@proton.me</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
