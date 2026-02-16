import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiElementor,
  SiWoocommerce,
  SiJquery,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          SiJquery,
          FaBootstrap,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
          SiElementor,
          SiWoocommerce,
          FaPhp,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          FaFigma,
          SiAdobexd,
          SiAdobephotoshop,
          SiAdobeillustrator,
          SiCanva,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2021 - 2025",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer - Freelance",
        stage: "2021 - Present",
      },
      {
        title: "Web Developer - Logic Hive",
        stage: "2021 - 2025",
      },
    ],
  }
];

const About = () => {
  return (
    <div className="min-h-full bg-primary/30 pt-[140px] pb-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] max-w-[550px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-8">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center z-10 xl:basis-[60%]">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Full Stack Developer <span className="text-accent">& </span>
            WordPress Specialist.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] xl:max-w-none mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’m a passionate Full Stack Developer with over 4 years of hands-on experience in building custom websites and web applications. My primary expertise lies in WordPress development and frontend technologies, where I combine creativity with functionality to deliver meaningful digital experiences.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] xl:max-w-none mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’ve worked on a wide range of projects – from custom WordPress themes and plugins to dynamic, interactive frontend interfaces – always focusing on performance, security, and usability. I believe clean, maintainable code and thoughtful UI/UX design are the foundation of successful digital products.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] xl:max-w-none mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I enjoy solving complex problems, optimizing website performance, and helping clients turn their ideas into reliable, scalable solutions. My goal is to build websites that not only look great but also drive real results.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 flex-wrap gap-y-4">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 pr-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={200} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={300} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[35%]"
        >
          <div className="flex flex-col gap-y-10 pb-10">
            {aboutData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="flex flex-col gap-y-4">
                {/* Category Title */}
                <h3 className="text-accent uppercase tracking-[2px] font-bold text-xl xl:text-2xl border-b border-white/10 pb-2">
                  {category.title}
                </h3>

                {/* Category Info Items */}
                <div className="flex flex-col gap-y-4">
                  {category.info.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col gap-y-2 text-white/60"
                    >
                      {/* Item Content */}
                      <div className="flex flex-col md:flex-row md:items-center gap-x-2">
                        {category.title !== "skills" && (
                          <div className="font-semibold text-white/90">{item.title}</div>
                        )}
                        {item.stage && (
                          <>
                            <div className="hidden md:flex text-white/20">|</div>
                            <div className="text-sm font-light italic">{item.stage}</div>
                          </>
                        )}
                      </div>

                      {/* Icons (if any) */}
                      {item.icons && (
                        <div className="flex flex-col gap-y-2">
                          {category.title === "skills" && (
                            <div className="text-white/40 text-sm uppercase tracking-[1px] mb-1">
                              {item.title}
                            </div>
                          )}
                          <div className="flex gap-x-4 flex-wrap gap-y-4">
                            {item.icons.map((Icon, iconIndex) => (
                              <div key={iconIndex} className="text-2xl xl:text-3xl text-white/80 hover:text-accent transition-all duration-300">
                                <Icon />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
