import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

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
                        src="data:image/jpeg;base64,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"
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
