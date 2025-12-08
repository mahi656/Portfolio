import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, image, color }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl overflow-hidden bg-secondary/30 border border-border/50 aspect-[4/3] cursor-pointer hover:border-primary/20 transition-colors"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            {image && (
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
            )}

            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-1">{title}</h3>
                        <p className="text-muted-foreground">{category}</p>
                    </div>
                    <div className="bg-background/50 p-3 rounded-full backdrop-blur-sm group-hover:bg-background transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

                <div className="w-full h-1/2 bg-background/50 rounded-2xl backdrop-blur-sm border border-border/20 shadow-lg translate-y-4 group-hover:translate-y-2 transition-transform" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
