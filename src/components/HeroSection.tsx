"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv-data";
import { MapPin, Mail, Phone, Linkedin, Download, Github } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center py-24 lg:py-32 overflow-hidden bg-dot-pattern">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Side: Photo with Floating Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -5 }}
                        animate={{ opacity: 1, x: 0, rotate: 3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative lg:order-1"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [3, 1, 3]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-56 h-56 lg:w-72 lg:h-72 rounded-3xl border-2 border-blue-500/20 p-2 bg-slate-900/40 backdrop-blur-sm shadow-2xl shadow-blue-500/10"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/api/photo"
                                alt={cvData.name}
                                className="w-full h-full object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cvData.name)}&background=030408&color=3b82f6&size=256`;
                                }}
                            />
                        </motion.div>

                        {/* Animated Glow behind photo */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full -z-10 animate-pulse" />

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 border-4 border-background rounded-full shadow-lg shadow-green-500/20"
                            title="Disponible para nuevos proyectos"
                        />
                    </motion.div>

                    {/* Right Side: Content with Staggered Entrance */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400/80 text-sm font-medium mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            {cvData.yearsOfExperience} Años de Experiencia
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="text-4xl lg:text-7xl font-bold tracking-tight mb-4 text-gradient leading-tight"
                        >
                            {cvData.name}
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl lg:text-3xl font-medium text-blue-400/70 mb-6"
                        >
                            {cvData.role}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="max-w-xl text-base lg:text-lg text-slate-400 leading-relaxed mb-10"
                        >
                            {cvData.summary}
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1, delayChildren: 0.6 }
                                }
                            }}
                            className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm text-slate-500 font-medium mb-12"
                        >
                            {[
                                { icon: MapPin, text: cvData.location },
                                { icon: Mail, text: cvData.email, href: `mailto:${cvData.email}` },
                                { icon: Phone, text: cvData.phone }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className="flex items-center gap-2"
                                >
                                    <item.icon className="w-4 h-4 text-blue-500/70" />
                                    {item.href ? (
                                        <a href={item.href} className="hover:text-white transition-colors">{item.text}</a>
                                    ) : (
                                        <span>{item.text}</span>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <a
                                href="/api/cv"
                                download
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold transition-all shadow-lg shadow-blue-500/25 hover:bg-blue-500 hover:-translate-y-1 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <Download className="w-5 h-5" />
                                <span>Descargar CV</span>
                            </a>
                            <a
                                href={cvData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold transition-all border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 active:scale-95 group"
                            >
                                <Linkedin className="w-5 h-5 text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-transform" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href={cvData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold transition-all border border-slate-800 hover:border-white/20 hover:-translate-y-1 active:scale-95 group"
                            >
                                <Github className="w-5 h-5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-transform" />
                                <span>GitHub</span>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Improved Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 group-hover:text-blue-400 transition-colors">Explorar</span>
                    <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1 group-hover:border-blue-500/50 transition-colors">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>          </section>
    );
}
