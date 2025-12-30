import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Github, ExternalLink, Globe, Layout, Code2 } from 'lucide-react';

const contributions = [
    {
        title: "AlgoVisualizer",
        description: "Contributed core algorithmic visualizations to this open-source platform:",
        highlights: [
            "Sudoku Problem: Designed the complete backtracking visualizer with recursive state management.",
            "Job Scheduling: Built the interactive greedy algorithm tracker for optimal resource analysis."
        ],
        repoUrl: "https://github.com/mahaveergurjar/AlgoVisualizer",
        projectUrl: "https://algo-visualizer-green.vercel.app/",
        repoName: "mahaveergurjar/AlgoVisualizer",
        color: "from-blue-600 to-indigo-600",
    },
    {
        title: "DevDunia",
        description: "Developed several essential developer tools for the DevDunia utility platform:",
        highlights: [
            "Emoji Picker: Designed and built a comprehensive tool for quick emoji discovery and selection.",
            "Base32/58 Tools: Created dedicated encoders and decoders for Base32 and Base58 formats.",
            "Performance: Optimized tool loading times and ensured clean, responsive UI for all utilities."
        ],
        repoUrl: "https://github.com/echobash/devdunia",
        projectUrl: "https://devdunia.com/",
        repoName: "echobash/devdunia",
        color: "from-emerald-600 to-teal-600",
    },
    {
        title: "ApothecaryShop",
        description: "Contributed critical stability fixes to this React-based e-commerce platform:",
        highlights: [
            "Bug Fix: Resolved system crashes by ensuring robust array validation before state mapping.",
            "Reliability: Guaranteed a seamless user experience by maintaining consistent UI rendering."
        ],
        repoUrl: "https://github.com/mohitahlawat2001/ApothecaryShop",
        projectUrl: "https://apothecary-shop.vercel.app/",
        repoName: "mohitahlawat2001/ApothecaryShop",
        color: "from-orange-500 to-rose-500",
    }
];

const Contributions = () => {
    return (
        <section className="py-20 container mx-auto px-4 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-12"
            >
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl shadow-lg shadow-blue-500/10">
                    <GitPullRequest className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Open Source Contributions
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {contributions.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/20 shadow-xl dark:shadow-2xl flex flex-col"
                    >
                        {/* Decorative Header */}
                        <div className="relative h-32 overflow-hidden bg-muted/30 flex items-center justify-center">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`} />
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                        </div>

                        <div className="p-7 md:p-8 flex flex-col h-full z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                    Open Source Contributor
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight leading-tight group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-foreground/80 dark:text-muted-foreground text-[15px] font-medium leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {item.highlights.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-foreground/80 dark:text-muted-foreground/90 text-sm font-medium leading-relaxed">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-6 pt-6 border-t border-border/40 mt-auto">
                                <a
                                    href={item.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[13px] font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-all duration-300 group/link"
                                >
                                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                    <span className="relative">
                                        Live Project
                                        <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#3B82F6] transition-all duration-300 group-hover/link:w-full" />
                                    </span>
                                </a>
                                <a
                                    href={item.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[13px] font-bold text-muted-foreground hover:text-foreground transition-all duration-300 group/link"
                                >
                                    <Github className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                    <span className="relative">
                                        GitHub
                                        <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover/link:w-full" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Contributions;
