import React from 'react';
import { Users, Briefcase, GraduationCap, Shield } from 'lucide-react';

const items = [
  {
    icon: GraduationCap,
    title: 'Alumni',
    desc: 'Maintain profiles, grow networks, mentor students, and discover opportunities.'
  },
  {
    icon: Users,
    title: 'Students',
    desc: 'Access mentors, internships, and real-world guidance from alumni.'
  },
  {
    icon: Briefcase,
    title: 'Faculty & Admin',
    desc: 'Manage data, organize events, and drive outreach and fundraising effectively.'
  },
  {
    icon: Shield,
    title: 'Recruiters',
    desc: 'Connect with qualified candidates and collaborate with the institution community.'
  }
];

const Stakeholders = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-950 to-black/80">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Stakeholders & Beneficiaries</h2>
          <p className="mt-3 text-white/70">Designed for the entire ecosystem — alumni, students, faculty, and employers.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
