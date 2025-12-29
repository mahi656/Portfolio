import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },

    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 max-w-5xl">
                <nav className="flex items-center justify-between py-6">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg hidden sm:block">Mahi Sawner</span>
                    </div>

                    <div className="hidden md:flex items-center bg-secondary/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/50">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background/50"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            View Resume
                        </motion.button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
