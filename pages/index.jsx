import { motion } from "framer-motion";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

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
            Turning Vision <br /> Into{" "}
            <span className="text-accent">Clean, Functional Code</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-6"
          >
            I'm a Full Stack Developer with 4+ years of experience, specializing in WordPress and modern frontend development. I create fast, secure, and visually engaging websites that help businesses build a strong digital presence.
            <br /><br />
            I focus on responsive design, clean code, and intuitive user experiences, delivering scalable web solutions that are easy to manage and built to perform.
            <br /><br />
            <strong className="text-accent">Technologies I work with:</strong>
            <br />
            HTML, CSS, JavaScript, React, WordPress, PHP, Bootstrap, REST APIs
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <Link
              href="/work"
              className="btn rounded-[10px] border border-white/50 px-8 py-1 transition-all duration-300 flex items-center justify-center hover:border-accent group bg-transparent hover:bg-accent/40"
            >
              <span className="font-bold">My Project</span>
              <BsArrowRight className="ml-2 text-2xl group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <Link
              href="/work"
              className="btn rounded-[10px] border border-white/50 px-8 py-1 transition-all duration-300 flex items-center justify-center hover:border-accent group bg-transparent hover:bg-accent/40"
            >
              <span className="font-bold">My Project</span>
              <BsArrowRight className="ml-2 text-2xl group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[850px] max-h-[780px] absolute -bottom-32 lg:bottom-0 lg:right-[5%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
