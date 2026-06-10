import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const achievements = [
  "Built 50+ websites for clients worldwide",
  "Page speed scores optimized to 95+",
  "Served international clients across 10+ countries",
  "4+ years of WordPress & frontend expertise",
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "20+", label: "Clients" },
  { value: "4+", label: "Years Exp." },
  { value: "95+", label: "PageSpeed" },
];

const Home = () => {
  return (
    <div className="bg-primary/60 h-screen flex items-center overflow-hidden">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex items-center">
        <div className="text-center flex flex-col justify-center pt-[110px] xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Turning Vision Into <br />{" "}
            <span className="text-accent">Clean, Functional Code</span>
          </motion.h1>

          {/* subtitle — results focused */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-6"
          >
            <p className="text-white/70 mb-3 text-sm xl:text-base">
              WordPress Developer &amp; Frontend Specialist helping businesses build
              fast, beautiful, and conversion-ready websites.
            </p>
            <ul className="flex flex-col gap-y-1.5 text-sm xl:text-[15px] text-left">
              {achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-x-2 text-white/80">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap gap-3 justify-center xl:justify-start mb-5 xl:mb-6"
          >
            <Link
              href="/contact"
              className="btn rounded-[10px] bg-accent border border-accent px-6 py-2 transition-all duration-300 flex items-center justify-center hover:bg-accent/80"
            >
              <HiMail className="mr-2 text-lg" />
              <span className="font-bold">Hire Me</span>
            </Link>
            <Link
              href="/work"
              className="btn rounded-[10px] border border-white/50 px-6 py-2 transition-all duration-300 flex items-center justify-center hover:border-accent group bg-transparent hover:bg-accent/20"
            >
              <span className="font-bold">View Projects</span>
              <BsArrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-all duration-300" />
            </Link>
            <a
              href="/Abubakar_CV.pdf"
              download="Abubakar_CV.pdf"
              className="btn rounded-[10px] border border-white/30 px-6 py-2 transition-all duration-300 flex items-center justify-center hover:border-white/60 group bg-transparent hover:bg-white/10"
            >
              <BsDownload className="mr-2 text-lg" />
              <span className="font-bold">Download CV</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap gap-x-6 gap-y-3 justify-center xl:justify-start"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative text-center xl:text-left pr-6 last:pr-0 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-8 after:w-px after:bg-white/15 last:after:hidden"
              >
                <div className="text-xl xl:text-2xl font-extrabold text-accent leading-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[1px] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <div className="pointer-events-auto">
          <ParticlesContainer />
        </div>

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute bottom-0 right-[0px] xl:right-[10%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
