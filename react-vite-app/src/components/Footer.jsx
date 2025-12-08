import React from 'react';

const Footer = () => {
    return (
        <footer className="py-10 mt-20 border-t border-border/40">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Mahi Sawner. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm font-medium text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
