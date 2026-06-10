import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { workData } from "../../data/work";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

const ProjectDetail = ({ project }) => {
    if (!project) return null;

    const overviewParagraphs = project.overview
        ? project.overview.split("\n\n")
        : [project.description];

    return (
        <>
            <Head>
                <title>{project.seoTitle || `${project.title} | Portfolio`}</title>
                <meta
                    name="description"
                    content={project.seoDescription || project.description}
                />
                <meta
                    property="og:title"
                    content={project.seoTitle || project.title}
                />
                <meta
                    property="og:description"
                    content={project.seoDescription || project.description}
                />
                <meta property="og:image" content={project.path} />
                <meta property="og:type" content="article" />
                {project.tags && (
                    <meta name="keywords" content={project.tags.join(", ")} />
                )}
                <link
                    rel="canonical"
                    href={`https://yourportfolio.com/work/${project.slug}`}
                />
            </Head>

            <div className="min-h-screen pt-[140px] pb-24">
                <Circles />

                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Back Link */}
                    <motion.div
                        variants={fadeIn("right", 0.1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mb-10"
                    >
                        <Link href="/work">
                            <span className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors duration-300 cursor-pointer text-[13px] font-black uppercase tracking-widest">
                                <FaArrowLeft size={11} />
                                Back to All Projects
                            </span>
                        </Link>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="relative w-full h-[300px] xl:h-[460px] rounded-[32px] overflow-hidden mb-12 shadow-2xl"
                    >
                        <Image
                            src={project.path}
                            alt={`${project.title} – project screenshot`}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <span className="inline-block bg-accent text-white text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-3">
                                {project.category}
                            </span>
                            <h1 className="text-3xl xl:text-5xl font-bold text-white leading-tight">
                                {project.title}
                            </h1>
                        </div>
                    </motion.div>

                    {/* Meta Grid */}
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
                    >
                        {[
                            { label: "Client", value: project.client },
                            { label: "Industry", value: project.industry },
                            { label: "Year", value: project.year },
                            { label: "Type", value: project.category },
                        ].map(
                            (item, i) =>
                                item.value && (
                                    <div
                                        key={i}
                                        className="bg-white/5 border border-white/10 rounded-2xl p-5"
                                    >
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1.5">
                                            {item.label}
                                        </p>
                                        <p className="text-white font-semibold text-sm leading-snug">
                                            {item.value}
                                        </p>
                                    </div>
                                )
                        )}
                    </motion.div>

                    {/* Overview */}
                    <motion.section
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mb-14"
                        aria-labelledby="overview-heading"
                    >
                        <h2
                            id="overview-heading"
                            className="text-2xl xl:text-3xl font-bold text-white mb-5"
                        >
                            Project Overview
                        </h2>
                        <div className="space-y-4">
                            {overviewParagraphs.map((para, i) => (
                                <p
                                    key={i}
                                    className="text-white/60 leading-relaxed text-[15px]"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* Challenge / Solution / Result */}
                    <motion.section
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
                        aria-label="Case Study"
                    >
                        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-7">
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-red-400 mb-4">
                                The Challenge
                            </h3>
                            <p className="text-white/65 text-[14px] leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-7">
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-4">
                                The Solution
                            </h3>
                            <p className="text-white/65 text-[14px] leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-7">
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-green-400 mb-4">
                                The Result
                            </h3>
                            <p className="text-white/65 text-[14px] font-semibold leading-relaxed">
                                {project.result}
                            </p>
                        </div>
                    </motion.section>

                    {/* Tech Stack */}
                    {project.tech && (
                        <motion.section
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-14"
                            aria-labelledby="tech-heading"
                        >
                            <h2
                                id="tech-heading"
                                className="text-2xl xl:text-3xl font-bold text-white mb-5"
                            >
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-accent/10 text-accent border border-accent/30 px-5 py-2 rounded-full text-sm font-bold"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* Key Features */}
                    {project.features && (
                        <motion.section
                            variants={fadeIn("up", 0.7)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-14"
                            aria-labelledby="features-heading"
                        >
                            <h2
                                id="features-heading"
                                className="text-2xl xl:text-3xl font-bold text-white mb-5"
                            >
                                Key Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-white/60 text-[14px] leading-relaxed"
                                    >
                                        <FaCheckCircle
                                            className="text-accent mt-0.5 shrink-0"
                                            size={14}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    )}

                    {/* Tags */}
                    {project.tags && (
                        <motion.section
                            variants={fadeIn("up", 0.8)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-14"
                            aria-labelledby="tags-heading"
                        >
                            <h2
                                id="tags-heading"
                                className="text-2xl xl:text-3xl font-bold text-white mb-5"
                            >
                                Categories &amp; Tags
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-white/5 text-white/50 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold hover:border-accent/40 hover:text-white/70 transition-colors duration-300"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* CTA */}
                    <motion.div
                        variants={fadeIn("up", 0.9)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex flex-col sm:flex-row items-center gap-4 pt-10 border-t border-white/10"
                    >
                        {project.link && project.link !== "#" && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-accent/85 transition-all duration-300 shadow-lg shadow-accent/20"
                            >
                                Visit Live Site
                                <FaExternalLinkAlt size={11} />
                            </a>
                        )}
                        <Link href="/contact">
                            <span className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3.5 rounded-full font-bold text-sm hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer">
                                Start a Similar Project
                            </span>
                        </Link>
                        <Link href="/work">
                            <span className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer text-sm font-semibold ml-auto">
                                <FaArrowLeft size={11} />
                                All Projects
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const paths = workData
        .filter((project) => project.slug)
        .map((project) => ({ params: { slug: project.slug } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const project =
        workData.find((p) => p.slug === params.slug) || null;

    return { props: { project } };
}

export default ProjectDetail;
