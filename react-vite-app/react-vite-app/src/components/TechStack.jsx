import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiVercel,
    SiMysql,
    SiGit,
    SiGithub,
    SiPython,
    SiJsonwebtokens,
    SiPrisma,
} from 'react-icons/si';

const techs = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'hsl(var(--foreground))' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: 'hsl(var(--foreground))' },
    { name: 'JWT Authentication', icon: SiJsonwebtokens, color: 'hsl(var(--foreground))' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748' },
    { name: 'Vercel', icon: SiVercel, color: 'hsl(var(--foreground))' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: 'hsl(var(--foreground))' },
]
const TechStack = () => {
    return (
        <section className="py-20 container mx-auto px-4 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-12"
            >
                <div className="p-3 bg-secondary/50 rounded-xl border border-border/50">
                    <SiReact className="w-6 h-6 text-blue-400 rotate-90 animate-spin-slow" />
                </div>
                <h2 className="text-3xl font-bold">Tech Arsenal</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="group relative bg-card/50 dark:bg-card/10 backdrop-blur-sm border border-border/40 hover:border-primary/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-default hover:shadow-xl hover:shadow-primary/5 hover:bg-card/80 dark:hover:bg-card/20"
                    >
                        {/* Glow Effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-15 dark:group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none"
                            style={{ backgroundColor: tech.color }}
                        />

                        <div className="relative z-10 p-3 rounded-xl bg-background border border-border/40 group-hover:border-primary/30 transition-colors shadow-sm">
                            <tech.icon
                                className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                                style={{ color: tech.color }}
                            />
                        </div>

                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground z-10 transition-colors">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default TechStack;
