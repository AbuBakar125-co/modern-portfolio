import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceGrid from "../../components/ServiceGrid";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-[140px] pb-12 flex flex-col items-center">
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
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[600px] mx-auto text-white/60"
            >
              I offer end-to-end digital solutions to help brands grow online. From design and development to content and optimization, I build experiences that look great, perform fast, and convert visitors into customers.
            </motion.p>
          </div>

          {/* grid */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <ServiceGrid />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
