"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, Tag } from 'lucide-react';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Ecosystem", "Technology", "Real Estate", "Compliance"];

  const posts = [
    {
      id: 1,
      title: "The Future of RWA: Navigating Global Compliance",
      excerpt: "How FEBEL is bridging the gap between traditional finance and decentralized protocols through automated KYC systems.",
      date: "Feb 12, 2026",
      category: "Compliance",
      author: "FEBEL Core",
      readTime: "8 min read",
      featured: true,
      image: "📊"
    },
    {
      id: 2,
      title: "Scalability Without Compromise",
      excerpt: "An in-depth look at our sustainable consensus mechanism and how it handles institutional throughput.",
      date: "Jan 28, 2026",
      category: "Technology",
      author: "Engineering Team",
      readTime: "12 min read",
      image: "⚡"
    },
    {
      id: 3,
      title: "Tokenizing Real Estate: A New Liquidity Era",
      excerpt: "Exploring the successful deployment of Propzine and the fractional ownership revolution.",
      date: "Jan 15, 2026",
      category: "Real Estate",
      author: "Product Strategy",
      readTime: "6 min read",
      image: "🏢"
    },
    // Add more posts as needed
  ];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(p => p.featured);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900">
      
      {/* Blog Hero Section */}
      <header className="pt-32 pb-16 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">The FEBEL <span className="text-indigo-600">Journal.</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Insights into the next generation of asset tokenization, regulated protocols, and digital sovereignty.</p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16">
        
        {/* Featured Post */}
        {featuredPost && activeCategory === "All" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-24 group cursor-pointer"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:border-indigo-500/50">
              <div className="aspect-video bg-indigo-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-9xl group-hover:scale-105 transition-transform duration-500">
                {featuredPost.image}
              </div>
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">Featured Article</span>
                <h2 className="text-4xl font-bold leading-tight group-hover:text-indigo-600 transition-colors">{featuredPost.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                  <span>{featuredPost.author}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none" 
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all"
            >
              <div className="aspect-video bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500 border-b border-slate-100 dark:border-slate-800">
                {post.image}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-indigo-600 transition-colors flex-1">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:gap-4 transition-all">
                  Read Article <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Stay ahead of the curve.</h2>
            <p className="text-xl text-indigo-100 mb-10">Get the latest institutional RWA insights delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-1 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 focus:outline-none focus:bg-white/20 transition-all"
              />
              <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;