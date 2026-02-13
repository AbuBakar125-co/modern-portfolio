import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";

import { articleData } from "../../data/articles";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const ArticleDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Find article by slug
    const article = articleData.find((a) => a.slug === slug);

    if (!article) {
        return (
            <div className="h-full bg-primary/30 py-32 text-center">
                <Circles />
                <div className="container mx-auto h-full flex flex-col justify-center items-center">
                    <h2 className="h2 mb-8">Article not found</h2>
                    <Link
                        href="/articles"
                        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                    >
                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                            Go Back
                        </span>
                        <BiArrowBack className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
            <Circles />
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12 mt-12 xl:mt-0">
                {/* image & back button */}
                <div className="flex-1 flex flex-col justify-center items-center xl:items-start mb-8 xl:mb-0">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mb-8"
                    >
                        <Link
                            href="/articles"
                            className="flex items-center gap-x-2 text-accent hover:text-white transition-all duration-300 group"
                        >
                            <BiArrowBack className="text-2xl group-hover:-translate-x-2 transition-all duration-300" />
                            <span className="text-lg">Back to Articles</span>
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="relative w-full max-w-[600px] h-[300px] xl:h-[400px] rounded-lg overflow-hidden border border-white/10"
                    >
                        <Image
                            src={article.image}
                            alt={article.title}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute top-6 right-6 text-6xl text-accent/80">
                            {article.icon}
                        </div>
                    </motion.div>
                </div>

                {/* text content */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 mb-4"
                    >
                        {article.title} <span className="text-accent">Details.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-lg text-accent font-medium mb-6 uppercase tracking-widest"
                    >
                        {article.description}
                    </motion.p>
                    <motion.div
                        variants={fadeIn("left", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-[600px] mx-auto xl:mx-0 text-white/70 text-lg"
                    >
                        <div className="space-y-6 max-h-[400px] xl:max-h-none overflow-y-auto pr-4 custom-scrollbar">
                            {article.content.split("\n\n").map((paragraph, i) => {
                                if (paragraph.startsWith("###")) {
                                    return (
                                        <h3 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
                                            {paragraph.replace("###", "").trim()}
                                        </h3>
                                    );
                                }
                                return (
                                    <p key={i} className="leading-relaxed text-justify">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
