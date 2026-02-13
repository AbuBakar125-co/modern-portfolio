import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import ArticleSlider from "../../components/ArticleSlider";
import { fadeIn } from "../../variants";

const Articles = () => {
    return (
        <div className="h-full bg-primary/30 py-36 flex items-center">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    {/* text */}
                    <div className="text-center xl:text-left flex flex-col lg:text-left mb-4 xl:mb-0 xl:w-[30vw]">
                        <motion.h2
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2 xl:mt-12"
                        >
                            My <span className="text-accent">Articles.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                        >
                            Explore my thoughts and insights on modern web development, UI/UX design, and staying ahead in the ever-evolving tech landscape.
                        </motion.p>
                    </div>

                    {/* slider */}
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%]"
                    >
                        <ArticleSlider />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
