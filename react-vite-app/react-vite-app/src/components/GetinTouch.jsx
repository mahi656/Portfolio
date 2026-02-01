import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowRight, Github, Briefcase, Mail, Phone, Send, X, User, MapPin } from 'lucide-react';

const GetinTouch = () => {
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Message sent successfully! (This is a demo)');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setShowForm(false);
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header & CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
                            Let's Connect
                        </h2>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {!showForm ? (
                            <motion.button
                                key="btn"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setShowForm(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full transition-all text-xl font-bold shadow-2xl shadow-primary/20"
                            >
                                Hire Me Now!
                                <div className="bg-primary-foreground/10 group-hover:bg-primary-foreground/20 p-2 rounded-full transition-colors">
                                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                                </div>
                            </motion.button>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                                className="w-full lg:max-w-xl bg-card/60 backdrop-blur-2xl border border-border rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_-12px_rgba(0,0,0,1)] ring-1 ring-border/50 p-8"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        Send a Message
                                    </h3>
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-muted-foreground"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-muted-foreground ml-2">Your Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Name"
                                                    className="w-full bg-foreground/[0.03] border border-border rounded-2xl py-4 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-muted-foreground ml-2">Email Address</label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                    className="w-full bg-foreground/[0.03] border border-border rounded-2xl py-4 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-muted-foreground ml-2">Phone Number</label>
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91"
                                                    className="w-full bg-foreground/[0.03] border border-border rounded-2xl py-4 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground ml-2">Message</label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Message"
                                            rows={4}
                                            className="w-full bg-foreground/[0.03] border border-border rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-foreground resize-none placeholder:text-muted-foreground/50"
                                        />
                                    </div>

                                    <motion.button
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${isSubmitting
                                            ? 'bg-muted text-muted-foreground cursor-not-allowed'
                                            : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="w-full h-px bg-border mb-16" />

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold">Mahi Sawner</span>
                        </div>
                        <p className="text-muted-foreground font-medium leading-relaxed max-w-xs">
                            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://github.com/mahi656"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-foreground/5 rounded-xl border border-border/50 hover:bg-foreground/10 hover:border-primary/20 transition-all text-muted-foreground hover:text-foreground"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mahi-sawner-a38556304/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-foreground/5 rounded-xl border border-border/50 hover:bg-foreground/10 hover:border-primary/20 transition-all text-muted-foreground hover:text-foreground"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:mahisawner@gmail.com"
                                className="p-2.5 bg-foreground/5 rounded-xl border border-border/50 hover:bg-foreground/10 hover:border-primary/20 transition-all text-muted-foreground hover:text-foreground"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-secondary/50 rounded-lg border border-border/50">
                                <MapPin className="w-4 h-4 text-primary" />
                            </div>
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-xs">Address</h4>
                        </div>
                        <p className="text-lg font-bold text-foreground leading-relaxed">
                            Pune, Maharashtra<br />
                            India
                        </p>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-secondary/50 rounded-lg border border-border/50">
                                <Mail className="w-4 h-4 text-primary" />
                            </div>
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-xs">Email Address</h4>
                        </div>
                        <a href="mailto:mahisawner@gmail.com" className="text-lg font-bold text-foreground block mb-2 hover:text-primary transition-colors">
                            mahi.sawner@adypu.edu.in
                        </a>
                    </div>

                    {/* <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-secondary/50 rounded-lg border border-border/50">
                                <Phone className="w-4 h-4 text-primary" />
                            </div>
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-xs">Phone Number</h4>
                        </div>
                        <p className="text-lg font-bold text-foreground leading-relaxed">
                            +91 9479542577
                        </p>
                    </div> */}
                </div>

                <div className="w-full h-px bg-border mb-8" />
                <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm gap-4 font-medium">
                    <p>© 2025 Mahi Sawner. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default GetinTouch;