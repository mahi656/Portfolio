import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import * as SiIcons from 'react-icons/si';

const iconColors = {
    SiNextdotjs: 'hsl(var(--foreground))',
    SiNodedotjs: '#339933',
    SiExpress: 'hsl(var(--foreground))',
    SiMongodb: '#47A248',
    SiSocketdotio: 'hsl(var(--foreground))',
    SiRender: '#46E3B7',
    SiReact: '#61DAFB',
    SiCss3: '#1572B6',
    SiTailwindcss: '#06B6D4',
    SiJavascript: '#F7DF1E',
    SiTypescript: '#3178C6',
    SiHtml5: '#E34F26',
};

const ProjectCard = ({ title, category, image, color, liveUrl, githubUrl, description, stack, iconName, tags }) => {
    // Dynamically get the icon from lucide-react
    const ProjectIcon = Icons[iconName] || Icons.Code;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 flex flex-col transition-all duration-500 hover:border-primary/20 shadow-xl dark:shadow-2xl"
        >
            {/* Decorative Header (Replaces Image) */}
            <div className="relative h-48 overflow-hidden bg-muted/30 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`} />
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                <div className={`p-6 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/5 backdrop-blur-md relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <ProjectIcon className="w-14 h-14 text-foreground/90" />
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-7 flex flex-col h-full z-10 gap-4">
                {/* Header: Title and stack icons */}
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-foreground tracking-tight leading-tight max-w-[70%]">{title}</h3>
                    <div className="flex gap-3 pt-1.5">
                        {stack && stack.map((iconName, idx) => {
                            const Icon = SiIcons[iconName];
                            return Icon ? (
                                <Icon
                                    key={idx}
                                    className="w-5 h-5 transition-all duration-300 hover:scale-120"
                                    style={{ color: iconColors[iconName] || 'currentColor' }}
                                />
                            ) : null;
                        })}
                    </div>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-muted-foreground leading-relaxed text-[15px] font-medium">
                        {description}
                    </p>
                )}

                {/* Tech Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-[11px] font-bold rounded-full bg-foreground/[0.03] border border-border/50 text-muted-foreground/80 transition-colors group-hover:border-primary/20 group-hover:text-foreground/90"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer Links (Reference style: minimalist text links) */}
                <div className="flex items-center gap-6 pt-6 mt-auto">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[14px] font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-all duration-300 group/link"
                        >
                            <Icons.ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            <span className="relative">
                                Live Demo
                                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#3B82F6] transition-all duration-300 group-hover/link:w-full" />
                            </span>
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[14px] font-bold text-muted-foreground hover:text-foreground transition-all duration-300 group/link"
                        >
                            <Icons.Github className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            <span className="relative">
                                GitHub
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover/link:w-full" />
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
