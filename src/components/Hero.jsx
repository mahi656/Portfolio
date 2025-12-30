import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import profilePhoto from '../lib/profile.jpeg';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center pt-40 pb-20 text-center isolate overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8 z-10"
            >
                <div className="relative">
                    <img
                        src={profilePhoto}
                        alt="Mahi Sawner"
                        className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-background p-1.5 rounded-full">
                        <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
                    </div>
                </div>
                <div className="absolute -right-12 -top-4 text-muted-foreground/50 rotate-12">
                    <Sparkles className="w-8 h-8" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 mb-6 bg-secondary/50 px-4 py-1.5 rounded-full border border-border/50 relative z-10"
            >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">Available for work</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-slate-900 dark:text-white relative z-10"
            >
                I'm Mahi Sawner, a <br />
                <span className="text-slate-700 dark:text-slate-300">Computer Science Student & Full-Stack Developer</span> <br />
                <br />
                {/* <span className="text-slate-700 dark:text-slate-300">Startups.</span> */}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed relative z-10"
            >
                A full-stack developer focused on building practical web solutions and continuously improving through real-world projects.
            </motion.p>

            {/* Vibrant Multi-color Mesh */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#50a3f2_50%,#E2E8F0_100%)] opacity-20 blur-[100px] dark:opacity-10 mix-blend-multiply dark:mix-blend-normal -z-10" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 dark:hidden" />
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-10 flex flex-col items-center gap-4 z-10"
            >
                <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
                <button
                    onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 bg-background/50 backdrop-blur-sm px-6 py-2 rounded-full border border-border/50 hover:bg-background/80 transition-colors group cursor-pointer"
                >
                    <div className="w-2 h-2 rounded-full border border-green-500/50 flex items-center justify-center">
                        <div className="w-1 h-1 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Featured Work</span>
                </button>
            </motion.div>

            {/* Decorative Circles */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] border border-blue-200/50 dark:border-blue-800/20 rounded-full -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] border border-blue-100/50 dark:border-blue-900/20 rounded-full -z-10" />
        </section>
    );
};

export default Hero;
