"use client";

import { motion } from "framer-motion";

export default function TechStack() {
    return (
        <section className="py-24 bg-dot-pattern border-t border-slate-900">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl font-bold mb-4 tracking-tight">Stack Tecnológico</h2>
                    <p className="text-slate-400 leading-relaxed">
                        Dominio de herramientas modernas para el desarrollo full-stack y arquitecturas escalables.
                    </p>
                </div>

                <div className="space-y-16">
                    {[
                        {
                            title: "Frontend",
                            skills: ["React", "Next Js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "jQuery"]
                        },
                        {
                            title: "Backend & Cloud",
                            skills: ["C#", ".NET Core", "Node Js", "Python", "Django", "Java", "Spring Boot", "Microservicios", "API Rest", "AWS", "Azure DevOps"]
                        },
                        {
                            title: "Databases & Integration",
                            skills: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "Hana DB", "DynamoDB", "MQ IBM", "SAP B1"]
                        },
                        {
                            title: "Tools & DevOps",
                            skills: ["Jenkins", "Git", "GitHub", "GitLab", "Docker", "Jest", "Swagger", "Postman", "Power BI", "Crystal Report"]
                        }
                    ].map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-blue-500/80 font-bold mb-8 uppercase tracking-[0.2em] text-[10px] flex items-center gap-3">
                                <span className="h-[1px] w-8 bg-blue-500/30" />
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                                {category.skills.map((tech, techIndex) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: (catIndex * 0.1) + (techIndex * 0.03)
                                        }}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="flex items-center justify-center p-5 rounded-2xl glass hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all cursor-default group"
                                    >
                                        <span className="text-sm font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">
                                            {tech}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
