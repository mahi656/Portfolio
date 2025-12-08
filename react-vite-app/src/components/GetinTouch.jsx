import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

const GetinTouch = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Green Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-green-400/30 via-green-300/10 to-transparent blur-3xl -z-10 pointer-events-none mix-blend-multiply dark:mix-blend-normal" />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6 font-sans">
                        Let's Make It Happen
                    </h2>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        always open to new opportunities, collaborations, and creative challenges. Let's work together to bring ideas to life
                    </p>

                    <motion.button
                        onClick={() => setIsModalOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium transition-all hover:bg-primary/90"
                    >
                        <ArrowRight className="w-5 h-5" />
                        Get In Touch
                    </motion.button>
                </motion.div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default GetinTouch;
