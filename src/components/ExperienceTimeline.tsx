"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv-data";

export default function ExperienceTimeline() {
    return (
        <section className="py-24 bg-dot-pattern">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="max-w-2xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Experiencia Profesional</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Una trayectoria de más de {cvData.yearsOfExperience} años entregando soluciones tecnológicas de alto impacto en sectores críticos.
                        </p>
                    </motion.div>
                </div>

                <div className="relative ml-4 md:ml-6">
                    {/* Animated Timeline Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent"
                    />

                    <div className="space-y-16">
                        {cvData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="relative pl-10 md:pl-16"
                            >
                                {/* Animated Dot on the timeline */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        delay: 0.5 + (index * 0.1)
                                    }}
                                    className="absolute -left-[6px] top-6 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)] z-10"
                                />

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass p-8 md:p-10 rounded-3xl hover:border-blue-500/30 transition-all group overflow-hidden relative"
                                >
                                    {/* Background Decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{exp.company}</h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="w-6 h-[1px] bg-blue-500/50" />
                                                <p className="text-blue-400/90 font-semibold text-sm tracking-wide">{exp.role}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-black px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 text-slate-400 whitespace-nowrap self-start shadow-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="space-y-8">
                                        {exp.projects.map((project, pIndex) => (
                                            <div key={pIndex} className="relative pl-8 border-l border-slate-800/80">
                                                <h4 className="text-lg font-bold text-slate-200 mb-3 flex items-center gap-2">
                                                    {project.name}
                                                </h4>
                                                <p className="text-sm text-slate-400 mb-5 leading-relaxed font-medium">{project.description}</p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                                                    {project.tasks.map((task, tIndex) => (
                                                        <motion.li
                                                            key={tIndex}
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            transition={{ delay: 0.5 + (tIndex * 0.05) }}
                                                            className="text-xs text-slate-500 flex items-start gap-3 group/item"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600/30 mt-1.5 shrink-0 group-hover/item:bg-blue-500 transition-colors" />
                                                            <span className="group-hover/item:text-slate-300 transition-colors">{task}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
