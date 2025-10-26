import React from 'react';
import { Database, Mail, Calendar, Briefcase, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Centralized Alumni Profiles',
    desc: 'A single source of truth for alumni data with self-service updates, academic history, and career milestones.'
  },
  {
    icon: Mail,
    title: 'Smart Communication Suite',
    desc: 'Targeted emails and announcements with segmentation by batch, department, location, and industry.'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    desc: 'Plan reunions, webinars, and meetups. RSVPs, reminders, and attendance tracking built-in.'
  },
  {
    icon: Briefcase,
    title: 'Mentorship & Opportunities',
    desc: 'Connect alumni with students for mentoring, internships, jobs, and collaborative projects.'
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    desc: 'Role-based access control, consent management, and secure data handling aligned with best practices.'
  },
  {
    icon: Users,
    title: 'Networking & Communities',
    desc: 'Create circles by interests or regions to strengthen engagement and foster collaboration.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Key Features</h2>
          <p className="mt-3 text-white/70">
            Everything institutions need to build lasting alumni relationships and unlock community potential.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/20 text-teal-300">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
