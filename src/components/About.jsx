import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Column: Visuals */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl p-8 overflow-hidden group hover:border-border transition-colors">

                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="p-4 bg-secondary/50 rounded-xl border border-border/50 flex flex-col items-center text-center gap-2 hover:bg-secondary/80 transition-colors">
                                    <Globe className="w-6 h-6 text-blue-500" />
                                    <span className="text-sm font-medium">Web Dev</span>
                                </div>
                                <div className="p-4 bg-secondary/50 rounded-xl border border-border/50 flex flex-col items-center text-center gap-2 hover:bg-secondary/80 transition-colors">
                                    <Cpu className="w-6 h-6 text-purple-500" />
                                    <span className="text-sm font-medium">Problem Solving</span>
                                </div>
                                <div className="col-span-2 p-4 bg-secondary/50 rounded-xl border border-border/50 flex items-center justify-center gap-3 hover:bg-secondary/80 transition-colors">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="text-sm font-medium">Open to new opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-muted-foreground w-fit">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                            <span>Student</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            About Me
                        </h2>

                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a Computer Science student with a strong interest in web development and problem-solving. I enjoy building complete applications while understanding both the underlying logic and the user experience.
                            </p>
                            <p>
                                Through projects and coursework, I have gained experience building practical web solutions and continuously improving by learning from real-world development and developer communities.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl -z-10" />
        </section>
    );
};

export default About;
