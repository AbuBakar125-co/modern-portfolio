import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaLink
} from "react-icons/fa";

import { articleData } from "../../data/articles";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";

const ArticleDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    const article = articleData.find((a) => a.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-primary/30 flex items-center justify-center text-center">
                <Circles />
                <div className="container mx-auto">
                    <h2 className="h2 mb-8">Article not found</h2>
                    <Link
                        href="/articles"
                        className="btn rounded-full border border-white/50 px-8 py-3 mx-auto transition-all duration-300 hover:border-accent"
                    >
                        Go Back
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-site">
            {/* Header Section (Dark with Background Image) */}
            <div className="relative pt-[140px] pb-48 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={article.image}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="opacity-40"
                    />
                    <div className="absolute inset-0 bg-primary/80"></div>
                </div>

                <Circles />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        className="max-w-[1000px] mx-auto text-center xl:text-left"
                    >
                        {/* Back Link */}
                        <Link
                            href="/articles"
                            className="flex items-center gap-x-2 text-white/50 hover:text-accent transition-all duration-300 mb-8 uppercase text-xs font-bold tracking-[0.2em] w-fit mx-auto xl:mx-0"
                        >
                            <BiArrowBack />
                            Back to Blog
                        </Link>

                        {/* Category Pill */}
                        <div className="bg-accent px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.15em] w-fit mb-6 mx-auto xl:mx-0">
                            {article.category}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 font-sora">
                            {article.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Content Section (Dark Background with Rounded Top) */}
            <div className="relative -mt-24 z-20 bg-primary/40 backdrop-blur-3xl rounded-t-[60px] md:rounded-t-[100px] pb-32 border-t border-white/5">
                <div className="container mx-auto px-4">
                    {/* Featured Image removed and moved to hero background */}

                    {/* Article Content */}
                    <article className="max-w-[800px] mx-auto -mt-10 overflow-visible">
                        <motion.div
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            animate="show"
                            className="text-white/60 font-poppins text-[15px] leading-[1.8] pt-[100px]"
                        >
                            {/* Improved Content Parser to handle list grouping and spacing */}
                            {(() => {
                                const elements = [];
                                let currentList = [];

                                const renderList = (list, key) => (
                                    <ul key={key} className="space-y-1.5 mb-8 pl-2">
                                        {list.map((item, index) => (
                                            <li key={index} className="flex gap-x-4">
                                                <span className="text-accent text-xl font-bold mt-0.5">•</span>
                                                <span className="text-white/70 font-normal text-[15px]">
                                                    {item.replace(/^- |\* |\d+\. /, "").trim()}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                );

                                article.content.split("\n").forEach((line, i) => {
                                    const trimmedLine = line.trim();

                                    // Handle empty lines (visual separation)
                                    if (!trimmedLine) {
                                        if (currentList.length > 0) {
                                            elements.push(renderList(currentList, `list-${i}`));
                                            currentList = [];
                                        }
                                        return;
                                    }

                                    // Check if line is a list item
                                    const isListItem = trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ") || /^\d+\./.test(trimmedLine);

                                    if (isListItem) {
                                        currentList.push(trimmedLine);
                                    } else {
                                        // If we were building a list, render it first
                                        if (currentList.length > 0) {
                                            elements.push(renderList(currentList, `list-${i}`));
                                            currentList = [];
                                        }

                                        // Render Headings
                                        if (trimmedLine.startsWith("###")) {
                                            elements.push(
                                                <h2 key={i} className="text-[20px] font-bold text-white mt-12 mb-6 font-sora leading-tight">
                                                    {trimmedLine.replace("###", "").trim()}
                                                </h2>
                                            );
                                        }
                                        // Render Paragraphs
                                        else {
                                            elements.push(
                                                <p key={i} className="text-white/60 font-normal text-[15px] leading-[1.8] mb-6 last:mb-0">
                                                    {trimmedLine}
                                                </p>
                                            );
                                        }
                                    }
                                });

                                // Render any remaining list items
                                if (currentList.length > 0) {
                                    elements.push(renderList(currentList, "list-final"));
                                }

                                return elements;
                            })()}

                            {/* Social Share */}
                            <div className="pt-16 mt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-y-6">
                                <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Share this article</span>
                                <div className="flex gap-x-4">
                                    {[FaFacebookF, FaTwitter, FaLinkedinIn, FaLink].map((Icon, idx) => (
                                        <div
                                            key={idx}
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 cursor-pointer text-sm"
                                        >
                                            <Icon />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </article>
                </div>


            </div>

            <Bulb />
        </div>
    );
};

export default ArticleDetail;
