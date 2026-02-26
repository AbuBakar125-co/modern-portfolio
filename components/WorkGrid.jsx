import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { workData } from "../data/work";

const categories = [
    "All projects",
    "Web Development",
    "Mobile Design",
    "Technology",
    "UI/UX Design",
];

const WorkGrid = () => {
    const [activeCategory, setActiveCategory] = useState("All projects");

    const filteredProjects = activeCategory === "All projects"
        ? workData
        : workData.filter(project => project.category === activeCategory);

    return (
        <div className="w-full">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className={`${activeCategory === category
                            ? "bg-accent text-white shadow-lg shadow-accent/20 border-accent"
                            : "bg-white/5 text-white/60 hover:bg-white/10 border-white/10"
                            } px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap border tracking-wide uppercase`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={`${project.title}-${index}`}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white rounded-[32px] overflow-hidden group shadow-2xl flex flex-col h-full hover:shadow-accent/10 transition-shadow duration-500"
                        >
                            {/* image */}
                            <div className="relative h-[250px] overflow-hidden">
                                <Image
                                    src={project.path}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-110 transition-all duration-700 ease-in-out"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-slate-800 uppercase tracking-[0.1em] shadow-sm">
                                    {project.category}
                                </div>
                            </div>
                            {/* content */}
                            <div className="p-10 flex flex-col flex-grow">
                                <h3 className="text-[24px] font-bold text-slate-900 leading-[1.2] mb-5 group-hover:text-accent transition-colors duration-300 font-sora">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow font-poppins line-clamp-3">
                                    {project.description}
                                </p>
                                <Link href={project.link} target="_blank" rel="noreferrer noopener">
                                    <div className="flex items-center text-accent font-extrabold text-sm cursor-pointer group/link w-fit">
                                        <span className="relative">
                                            View Project
                                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover/link:w-full transition-all duration-300"></span>
                                        </span>
                                        <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300 text-lg">→</span>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default WorkGrid;
