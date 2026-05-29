"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function MagnettoPortfolio() {
  return (
    <div className="bg-darkBg text-white min-h-screen font-sans selection:bg-neonRed selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center bg-darkBg/80 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-bold tracking-tighter">AJAY SINGH</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#home" className="hover:text-goldAccent transition-colors">Home</a>
          <a href="#about" className="hover:text-goldAccent transition-colors">About</a>
          <a href="#projects" className="hover:text-goldAccent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-goldAccent transition-colors">Contact</a>
        </div>
        <button className="md:hidden text-white">MENU</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-8 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-5xl">
          <motion.h4 variants={fadeInUp} className="text-neonRed uppercase tracking-[0.3em] text-sm mb-6">capture : send : edit</motion.h4>
          <motion.h1 variants={fadeInUp} className="text-7xl md:text-[9rem] font-display font-black tracking-tighter leading-none mb-8">
            AJAY SINGH
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Every frame tells a story. Every design builds a brand. Creative graphic design and professional video editing tailored for modern audiences.
          </motion.p>
        </motion.div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electricBlue/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">Selected Works.</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Beyond Time", category: "Art Direction", img: "https://framerusercontent.com/images/vDS2R7LCoOompxmBq9rV6LicTqI.webp" },
              { title: "Brand Redefine", category: "Brand Identity", img: "https://framerusercontent.com/images/qWafyJa8F6xJsc3zslvSVczRiac.webp" },
              { title: "Every Second", category: "Ad Campaign", img: "https://framerusercontent.com/images/vLFNQftWxn8GlWaCrxJpZKWD10.webp" },
              { title: "Timeless Mastery", category: "Art Direction", img: "https://framerusercontent.com/images/mq1HgIRqnDetOlR0yUFJ40kEIT4.webp" }
            ].map((project, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-6 relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={project.img} alt={project.title} className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-goldAccent text-sm uppercase tracking-widest mb-2">{project.category}</h5>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="w-8 h-8 text-gray-500 group-hover:text-electricBlue transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <img src="https://framerusercontent.com/images/7bhFM0Tg87FLW68G52hNOm91gg.webp" alt="About Maverick" className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h5 className="text-electricBlue uppercase tracking-widest text-sm mb-4">About Us.25</h5>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Crafting Impact.</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              At Magnetto, we craft designs that don’t just look stunning—they create impact. Blending creativity with strategy, we transform ideas into immersive digital experiences that captivate, engage, and convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 bg-surface/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Strategy', 'Web Design', 'Branding', 'UI/UX'].map((service, index) => (
              <div key={service} className="p-8 border border-white/10 hover:border-neonRed transition-colors duration-300 rounded-lg group">
                <span className="text-gray-600 text-5xl font-display font-bold group-hover:text-neonRed transition-colors">0{index + 1}</span>
                <h3 className="text-2xl font-bold mt-8 mb-4">{service}</h3>
                <p className="text-sm text-gray-400">Blending creativity with strategy ensuring every design is results-driven.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's work together.</h2>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind? Whether you’re launching a brand, designing a product, or elevating your digital presence, we’re here to bring your vision to life.
            </p>
            <img src="https://framerusercontent.com/images/WDp2Zq4B8pE5m242xYYTOrQA4.webp" alt="Contact" className="rounded-lg object-cover h-64 w-full opacity-80" />
          </motion.div>
          
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-surface p-10 rounded-2xl border border-white/5 space-y-6">
            <h5 className="text-goldAccent uppercase tracking-widest text-sm mb-8">Contact Us.25</h5>
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First name" className="bg-darkBg border border-white/10 p-4 rounded focus:outline-none focus:border-electricBlue transition-colors w-full" />
              <input type="text" placeholder="Last name" className="bg-darkBg border border-white/10 p-4 rounded focus:outline-none focus:border-electricBlue transition-colors w-full" />
            </div>
            <input type="email" placeholder="Email" className="bg-darkBg border border-white/10 p-4 rounded focus:outline-none focus:border-electricBlue transition-colors w-full" />
            <input type="tel" placeholder="Phone no." className="bg-darkBg border border-white/10 p-4 rounded focus:outline-none focus:border-electricBlue transition-colors w-full" />
            <button className="w-full bg-white text-black font-bold py-5 rounded hover:bg-neonRed hover:text-white transition-all duration-300 mt-4 tracking-wider">
              SUBMIT
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10 bg-black text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">AJAY SINGH</div>
          <div className="text-sm text-gray-500">
            ©2025 MAGNETTO Studio. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
