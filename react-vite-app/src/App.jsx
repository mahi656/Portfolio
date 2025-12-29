import React from 'react';
import * as Icons from 'lucide-react';
import Layout from './components/Layout';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import GetinTouch from './components/GetinTouch';
import About from './components/About';
import TechStack from './components/TechStack';
import Contributions from './components/Contributions';
import SectionSeparator from './components/SectionSeparator';
import Footer from './components/Footer';

function App() {
    const projects = [
        {
            title: "Ambulance Booking System",
            category: "Healthcare Platform",
            color: "from-red-500 to-rose-500",
            liveUrl: "https://ambulance-booking-sooty.vercel.app/",
            githubUrl: "https://github.com/mahi656/AMB_One",
            description: "Real-time emergency response platform featuring live tracking, driver assignment, and secure JWT authentication. Built with a scalable microservices architecture.",
            iconName: "Ambulance",
            tags: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.io", "Render"],
            stack: ["SiNextdotjs", "SiNodedotjs", "SiExpress", "SiMongodb", "SiSocketdotio", "SiRender"]
        },
        {
            title: "Splitwise Clone",
            category: "Frontend App",
            color: "from-green-500 to-emerald-500",
            liveUrl: "https://finalproject-beta-orcin.vercel.app/",
            githubUrl: "https://github.com/mahi656/Finalproject",
            description: "A comprehensive expense sharing application focusing on clean UI and efficient balance tracking. Built as a high-performance frontend clone.",
            iconName: "Wallet",
            tags: ["HTML5", "CSS", "JavaScript", "React", "Responsive Design"],
            stack: ["SiHtml5", "SiCss3", "SiJavascript", "SiReact"]
        },
        {
            title: "RailEase",
            category: "Mobile Application",
            color: "from-blue-600 to-cyan-600",
            liveUrl: "https://drive.google.com/file/d/1HzQPxGO3F94-T5FqPGN5KUrIY7MH5fz7/view",
            githubUrl: "https://github.com/mahi656/RailEase",
            description: "A comprehensive React Native application for train booking and ticket management. Features interactive seat selection, real-time availability, and persistent storage for saved tickets.",
            iconName: "TrainFront",
            tags: ["React Native", "Expo", "AsyncStorage", "Navigation"],
            stack: ["SiReact", "SiJavascript", "SiExpo"]
        }
    ];

    return (
        <Layout>
            <Cursor />
            <Navbar />
            <Hero />
            <SectionSeparator />
            <About />
            <SectionSeparator />
            <TechStack />
            <SectionSeparator />
            <Contributions />
            <SectionSeparator />

            <section id="work" className="py-20 container mx-auto px-4 max-w-5xl">
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-secondary/50 border border-border/50 shadow-sm">
                            <Icons.Code className="w-6 h-6 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Featured Projects
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <SectionSeparator />

            <GetinTouch />
            <Footer />
        </Layout>
    );
}

export default App;
