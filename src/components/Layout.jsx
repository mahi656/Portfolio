import React from 'react';
import { ThemeProvider } from './theme-provider';

const Layout = ({ children }) => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="main-layout min-h-screen bg-background text-foreground font-sans antialiased transition-colors duration-300">
                <main className="relative z-10">
                    {children}
                </main>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
