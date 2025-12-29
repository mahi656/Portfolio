import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowRight, Github, Briefcase } from 'lucide-react';

const GetinTouch = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header & CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-normal leading-tight tracking-tight">
                            Contact Information<br />

                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full transition-all text-lg font-medium pr-4"
                    >
                        <div className="bg-primary-foreground/10 group-hover:bg-primary-foreground/20 p-2 rounded-full transition-colors">
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                        </div>
                        Hire Me Now!
                    </motion.button>
                </div>

                <div className="w-full h-px bg-border mb-16" />

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-foreground rounded-lg rotate-45" />
                            <span className="text-2xl font-bold">Mahi Sawner</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed max-w-xs">
                            Full-stack developer who enjoys building complete, thoughtful digital experiences from idea to execution.
                        </p>
                        <div className="flex gap-4 pt-4">

                            <a href="#" className="p-2 bg-foreground/5 rounded-full hover:bg-foreground/20 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>

                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="font-bold mb-6">Address</h4>
                        <p className="text-muted-foreground leading-loose">
                            Pune, Maharashtra<br />
                            India
                        </p>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="font-bold mb-6">Email Address</h4>
                        <a href="mailto:mehtahimesh4@gmail.com" className="text-muted-foreground block mb-2 hover:text-foreground transition-colors">
                            mahisawner@gmail.com
                        </a>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="font-bold mb-6">Phone Number</h4>
                        <p className="text-muted-foreground leading-loose">
                            +91 9479542577<br />

                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-border mb-8" />


                <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm gap-4">
                    {/* <div className="flex gap-8">
                        <a href="#" className="hover:text-foreground transition-colors">Templates</a>
                        <a href="#" className="hover:text-foreground transition-colors">Tools</a>
                        <a href="#" className="hover:text-foreground transition-colors">Features</a>
                        <a href="#" className="hover:text-foreground transition-colors">About Us</a>
                    </div> */}
                    <p>© 2025 Mahi Sawner. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default GetinTouch;