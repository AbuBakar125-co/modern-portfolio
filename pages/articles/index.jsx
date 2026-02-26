import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import ArticleGrid from "../../components/ArticleGrid";
import { fadeIn } from "../../variants";

const Articles = () => {
    return (
        <div className="min-h-screen bg-primary/30 pt-[120px] pb-32 flex flex-col items-center">
            <Circles />
            <div className="container mx-auto px-4">
                <div className="flex flex-col mb-12 items-center text-center">
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 mb-4"
                    >
                        My <span className="text-accent">Articles.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-[600px]"
                    >
                        Explore my thoughts and insights on modern web development, UI/UX design, and staying ahead in the ever-evolving tech landscape.
                    </motion.p>
                </div>

                {/* grid */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full"
                >
                    <ArticleGrid />
                </motion.div>
            </div>
        </div>
    );
};


export default Articles;
