import React from 'react';
import { motion } from 'framer-motion';

const SectionSeparator = () => {
    return (
        <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-20 opacity-40"
            />
        </div>
    );
};

export default SectionSeparator;
