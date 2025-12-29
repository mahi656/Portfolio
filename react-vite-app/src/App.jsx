import React from 'react';
import Layout from './components/Layout';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import GetinTouch from './components/GetinTouch';
import About from './components/About';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {
    const projects = [
        {
            title: "Ambulance Booking System",
            category: "Healthcare Platform",
            color: "from-red-500 to-rose-500",
            liveUrl: "https://ambulance-booking-sooty.vercel.app/",
            githubUrl: "https://github.com/mahi656/AMB_One",
            description: "Real-time emergency response platform featuring live tracking, driver assignment, and secure JWT authentication. Built with a scalable microservices architecture and deployed on Render.",
            tags: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Render"]
        },
        {
            title: "Splitwise Clone",
            category: "Full Stack App",
            color: "from-green-500 to-emerald-500",
            liveUrl: "https://finalproject-beta-orcin.vercel.app/",
            githubUrl: "https://github.com/mahi656/Finalproject",
            description: "A comprehensive expense sharing application allowing groups to split bills and track debts efficiently. Features secure user authentication and real-time balance updates.",
            tags: ["React", "Express", "Node.js", "MongoDB"]
        }
    ];

    return (
        <Layout>
            <Cursor />
            <Navbar />
            <Hero />
            <About />
            <TechStack />

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
