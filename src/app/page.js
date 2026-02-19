"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Globe, Moon, Sun, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";


const AnimatedString = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
    <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M-100 400C200 200 400 600 720 400C1040 200 1240 600 1540 400"
        stroke="url(#gradientString)"
        strokeWidth="2"
        animate={{
          d: [
            "M-100 400C200 200 400 600 720 400C1040 200 1240 600 1540 400",
            "M-100 400C200 600 400 200 720 400C1040 600 1240 200 1540 400",
            "M-100 400C200 200 400 600 720 400C1040 200 1240 600 1540 400",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradientString" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" stopOpacity="0" />
          <stop offset="0.5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const StartupHero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync theme with the HTML element
    // We target documentElement which is the <html> tag
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 overflow-xhidden transition-colors duration-300">


      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-indigo-600 dark:text-indigo-400">FEBEL</div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-indigo-500">Learn</a>
            <a href="#" className="hover:text-indigo-500">Build</a>
            <a href="#" className="hover:text-indigo-500">Ecosystem</a>
            <a href="#" className="hover:text-indigo-500">Community</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><Globe size={20} /></button>

          {/* Working Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 dark:shadow-none">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              The foundation for <span className="text-indigo-600 dark:text-indigo-400">digital sovereignty.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
              Build decentralized applications with the security of a global network. Scalable, sustainable, and open to everyone.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Start Building <Terminal size={18} />
              </button>
              <button className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                What is FEBEL? <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 rounded-3xl overflow-hidden border border-white dark:border-slate-800 shadow-2xl flex items-center justify-center"
          >
            <Image
              src="/hero.png"
              alt="Hero Illustration"
              fill
              className="object-cover"
            />

          </motion.div>
        </div>
      </main>

      <WhatIsFebel />
      <EcosystemSection />
      <TokenizationNarrative />
      <CommunitySection />
      <FebelNews />
      <Footer />
    </div>
  );
};

const WhatIsFebel = () => {
  const features = [
    {
      title: "Immutable Security",
      description: "Leveraging advanced cryptographic proofs to ensure your data and transactions remain tamper-proof and sovereign.",
      icon: "🛡️",
    },
    {
      title: "Global Scalability",
      description: "Engineered for high-throughput applications without sacrificing decentralization or increasing gas fees.",
      icon: "⚡",
    },
    {
      title: "Carbon Neutral",
      description: "A sustainable consensus mechanism that powers the future of web3 without the environmental footprint.",
      icon: "🌿",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">
              The Vision
            </h2>
            <h3 className="text-4xl font-bold mb-6">
              A new standard for the decentralized web.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              FEBEL isn't just another blockchain. It’s a comprehensive ecosystem designed to bridge the gap between complex protocols and human-centric design.
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

          {/* A CTA Card for the grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-indigo-600 text-white flex flex-col justify-between"
          >
            <p className="font-bold text-lg">Ready to explore the whitepaper?</p>
            <a href="#" className="flex items-center gap-2 font-medium hover:underline">
              Download Docs <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );

};

const EcosystemSection = () => {
  const dapps = [
    {
      name: "Propzine",
      desc: "Decentralized listing and media for the real estate industry. Transparent, verified, and borderless.",
      tags: ["Real Estate", "Media"],
      span: "md:col-span-1 md:row-span-1", // Larger Hero Tile
      color: "bg-blue-500/10 border-blue-500/20",
      image: "🏠" // Replace with <img src="/propzine.png" />
    },
    {
      name: "Propteria",
      desc: "Marketplace for RWA tokens. Fractional ownership of real-world assets.",
      tags: ["RWA", "DeFi"],
      span: "md:col-span-1 md:row-span-1",
      color: "bg-emerald-500/10 border-emerald-500/20",
      image: "🪙"
    },
    {
      name: "On-Chain Agreement",
      desc: "Trustless legal frameworks for builders and developers.",
      tags: ["LegalTech", "Builders"],
      span: "md:col-span-1 md:row-span-1", // Vertical Tile
      color: "bg-purple-500/10 border-purple-500/20",
      image: "📜"
    },
    {
      name: "NFT Doc Verify",
      desc: "Instant document verification system using NFT-based identity.",
      tags: ["Identity", "Security"],
      span: "md:col-span-3 md:row-span-1",
      color: "bg-orange-500/10 border-orange-500/20",
      image: "🆔"
    },
    {
      name: "LIVS",
      desc: "Log Integrity Verification System. Ensuring every event is immutable.",
      tags: ["Infrastructure", "Logs"],
      span: "md:col-span-3 md:row-span-1", // Horizontal Tile
      color: "bg-indigo-500/10 border-indigo-500/20",
      image: "📊"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-16">
        <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">
          Established Ecosystem
        </h2>
        <h3 className="text-4xl font-bold max-w-2xl leading-tight">
          Built on FEBEL. Powering the next generation of decentralized software.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
        {dapps.map((dapp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`${dapp.span} ${dapp.color} rounded-3xl border p-8 flex flex-col justify-between overflow-hidden relative group transition-all`}
          >
            {/* Background Image/Icon Placeholder */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-9xl pointer-events-none">
              {dapp.image}
            </div>

            <div>
              <div className="flex gap-2 mb-4">
                {dapp.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold mb-3">{dapp.name}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                {dapp.desc}
              </p>
            </div>

            <div className="mt-8">
              <button className="flex items-center gap-2 text-sm font-bold group/btn">
                Launch App
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TokenizationNarrative = () => {
  const points = [
    {
      title: "Liquidity for the Illiquid",
      desc: "Tokenization breaks down massive assets like real estate into fractional digital units, allowing 24/7 global trading and instant settlement on the Febel network.",
      benefit: "Market Efficiency",
      icon: "🌐"
    },
    {
      title: "Automated Compliance",
      desc: "Febel integrates regulatory requirements directly into the smart contract. Transactions only execute if KYC/AML and jurisdictional rules are met, ensuring total safety for banks.",
      benefit: "Built-in Legality",
      icon: "⚖️"
    },
    {
      title: "Reduced Counterparty Risk",
      desc: "By moving assets on-chain, we eliminate expensive intermediaries and manual paperwork, reducing operational costs and human error by up to 80%.",
      benefit: "Operational Excellence",
      icon: "📉"
    },
    {
      title: "Institutional Trust",
      desc: "A regulated, institutional-grade environment designed for banks and governments to move trillion-dollar industries onto the blockchain with full transparency.",
      benefit: "Government Grade",
      icon: "🏛️"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row gap-16">

        {/* Left Side: Sticky Header */}
        <div className="md:w-1/3">
          <div className="sticky top-32 space-y-6">
            <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              The Paradigm Shift
            </h2>
            <h3 className="text-5xl font-extrabold leading-tight">
              World is shifting towards <span className="text-indigo-600">tokenization.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              We are moving from a world of siloed, slow-moving assets to a global, 24/7 programmable economy.
            </p>
            <div className="pt-8">
              <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Flowing Content */}
        <div className="md:w-2/3 space-y-32">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className="flex flex-col gap-6">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-500 w-fit">
                  {point.icon}
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                    {point.benefit}
                  </span>
                  <h4 className="text-3xl font-bold">{point.title}</h4>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
                <div className="pt-10 border-b border-slate-100 dark:border-slate-800 w-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const CommunitySection = () => {
  const communityStats = [
    { label: "Active Builders", value: "1,200+" },
    { label: "Proposals Voted", value: "85" },
    { label: "Countries Represented", value: "40+" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="relative bg-indigo-600 rounded-[3rem] p-12 md:p-20 overflow-hidden group">

        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl -ml-10 -mb-10 animate-pulse"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-indigo-200 font-bold uppercase tracking-[0.2em] text-sm mb-6">
              Join the Movement
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              A decentralized future is built <span className="text-indigo-300">together.</span>
            </h3>
            <p className="text-xl text-indigo-100 leading-relaxed mb-10 max-w-lg">
              FEBEL is more than a protocol—it's a global collective of developers, creators, and visionaries redefining digital sovereignty. Join our Discord to start building the next generation of RWAs.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="https://discord.gg/z4m2eAJN"
                target="_blank"
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20 group/link"
              >
                Join our Discord
                <div className="p-1 bg-indigo-100 rounded-lg group-hover/link:translate-x-1 transition-transform">
                  <ChevronRight size={18} />
                </div>
              </a>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                View Governance
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {communityStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
            <div className="bg-indigo-500/30 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <div className="text-indigo-200 text-xs font-mono mb-2">NEXT UP:</div>
              <div className="text-white font-bold leading-tight">Global Hackathon Q3 2026</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FebelNews = () => {
  const blogPosts = [
    {
      title: "The Future of RWA: Navigating Global Compliance",
      excerpt: "How FEBEL is bridging the gap between traditional finance and decentralized protocols through automated KYC.",
      date: "Feb 12, 2026",
      category: "Ecosystem",
      image: "📊" // Placeholder for your future blog thumbnails
    },
    {
      title: "Scalability Without Compromise",
      excerpt: "An in-depth look at our sustainable consensus mechanism and how it handles institutional throughput.",
      date: "Jan 28, 2026",
      category: "Technology",
      image: "⚡"
    },
    {
      title: "Tokenizing Real Estate: A New Liquidity Era",
      excerpt: "Exploring the successful deployment of Propzine and the fractional ownership revolution in urban markets.",
      date: "Jan 15, 2026",
      category: "Real Estate",
      image: "🏢"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">
            FEBEL News
          </h2>
          <h3 className="text-4xl font-bold">Latest from the journal</h3>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm font-bold hover:text-indigo-600 transition-colors">
          View All Posts <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* Blog Image Placeholder */}
            <div className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-2xl mb-6 overflow-hidden flex items-center justify-center text-6xl group-hover:scale-[1.02] transition-transform duration-500 border border-slate-200 dark:border-slate-800">
              {post.image}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{post.date}</span>
              </div>
              <h4 className="text-xl font-bold leading-tight group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="pt-2 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600">
                Read More <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile-only View All Button */}
      <button className="md:hidden w-full mt-10 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold">
        View All Posts
      </button>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    { name: "X (Twitter)", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Discord", href: "#", icon: "👾" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Facebook", href: "#", icon: "fb" },
  ];

  const footerLinks = {
    Protocol: ["Whitepaper", "Governance", "Security", "Tokenomics"],
    Developers: ["Documentation", "GitHub", "API Reference", "Grants"],
    Ecosystem: ["Propzine", "Propteria", "LIVS", "DApps"],
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="text-3xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400">
              FEBEL
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              The institutional-grade infrastructure for regulated RWA tokenization and digital sovereignty.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all group"
                  title={social.name}
                >
                  <span className="font-bold text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase text-xs tracking-widest">
                {category}
              </h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-xs">
            © 2026 FEBEL Protocol. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StartupHero;
