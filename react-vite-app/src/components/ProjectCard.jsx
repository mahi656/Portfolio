import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, category, image, color, liveUrl, githubUrl, description, tags }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl overflow-hidden bg-card/10 backdrop-blur-xl border border-white/5 flex flex-col hover:border-white/10 transition-all duration-300 shadow-lg"
        >
            {/* Subtle Gradient Glow */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${color} opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative p-6 flex flex-col h-full z-10 gap-5">
                {/* Header */}
                <div className="space-y-1">
                    <p className="text-xs font-semibold text-primary/80 tracking-wider uppercase">{category}</p>
                    <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-muted-foreground leading-relaxed text-sm">
                        {description}
                    </p>
                )}

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 border border-white/5 text-muted-foreground group-hover:text-foreground transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Reference-Style Link Buttons */}
                <div className="flex items-center gap-6 pt-2 mt-2">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span className="relative">
                                Live Demo
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-400 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                            </span>
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
                        >
                            <Github className="w-4 h-4" />
                            <span className="relative">
                                GitHub
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
