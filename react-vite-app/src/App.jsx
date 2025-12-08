import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import GetinTouch from './components/GetinTouch';
import Footer from './components/Footer';

function App() {
    const projects = [
        {
            title: "FinTech Dashboard",
            category: "UI/UX Design",
            color: "from-blue-500 to-purple-500"
        },
        {
            title: "E-Commerce App",
            category: "Mobile Design",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Travel Platform",
            category: "Web Development",
            color: "from-green-500 to-teal-500"
        }
    ];

    return (
        <Layout>
            <Navbar />
            <Hero />

            <section id="work" className="py-20 container mx-auto px-4 max-w-5xl">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
                        <p className="text-muted-foreground">Some of my recent projects</p>
                    </div>
                    <a href="#" className="text-sm font-medium hover:underline">View All</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <GetinTouch />
            <Footer />
        </Layout>
    );
}

export default App;
