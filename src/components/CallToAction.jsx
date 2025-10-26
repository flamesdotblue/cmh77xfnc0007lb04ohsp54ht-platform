import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-600/20 via-teal-500/10 to-transparent p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Ready to build a thriving alumni community?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/80">
            Launch a secure, centralized platform for alumni data, communication, events, and mentorship. Be the institution that stays connected well beyond graduation.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full sm:w-96 rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-teal-500 hover:bg-teal-400 transition-colors px-6 py-3 font-medium"
            >
              Request Demo
            </button>
          </form>
          <p className="mt-3 text-xs text-white/60">No spam. We will only contact you regarding early access and product updates.</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
