import { motion } from "framer-motion";
import Link from "next/link";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkGrid from "../../components/WorkGrid";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="min-h-screen pt-[140px] pb-12 xl:pt-[140px] flex flex-col items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12">
          {/* text */}
          <div className="text-center flex flex-col items-center mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[600px] mx-auto text-white/60"
            >
              Explore some of the projects I’ve built, combining clean design, modern development, and user-focused functionality to create impactful digital experiences.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="sr-only"
            >
              <Link
                href="/services"
                className="btn rounded-[10px] border border-white/30 px-5 py-2 text-sm hover:border-accent hover:text-accent transition-all"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="btn rounded-[10px] bg-accent border border-accent px-5 py-2 text-sm hover:bg-accent/80 transition-all"
              >
                Discuss Your Website
              </Link>
            </motion.div>
          </div>

          {/* grid */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <WorkGrid />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
