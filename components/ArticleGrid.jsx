import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { articleData } from "../data/articles";
import { fadeIn } from "../variants";

const categories = [
    "All Posts",
    "Inside Poultry Operations",
    "Operational Losses & Hidden Costs",
    "Compliance, Audits & Biosecurity",
    "Technology & Digital Transformation",
    "Buyer Guides & Software Comparisons",
];

const ArticleGrid = () => {
    const [activeCategory, setActiveCategory] = useState("All Posts");

    const filteredArticles = activeCategory === "All Posts"
        ? articleData
        : articleData.filter(article => article.category === activeCategory);

    return (
        <div className="w-full">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
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

            {/* Article Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredArticles.map((article) => (
                        <motion.div
                            key={article.slug}
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
                                    src={article.image}
                                    alt={article.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-110 transition-all duration-700 ease-in-out"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-slate-800 uppercase tracking-[0.1em] shadow-sm">
                                    {article.category}
                                </div>
                            </div>
                            {/* content */}
                            <div className="p-10 flex flex-col flex-grow">
                                <h3 className="text-[24px] font-bold text-slate-900 leading-[1.2] mb-5 group-hover:text-accent transition-colors duration-300 font-sora">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow font-poppins">
                                    {article.description}
                                </p>
                                <Link href={`/articles/${article.slug}`}>
                                    <div className="flex items-center text-accent font-extrabold text-sm cursor-pointer group/link w-fit">
                                        <span className="relative">
                                            Read Article
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


export default ArticleGrid;
