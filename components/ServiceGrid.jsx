import { motion } from "framer-motion";
import { serviceData } from "../data/services";

const ServiceGrid = () => {
    return (
        <div className="w-full">
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4"
            >
                {serviceData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                        className="bg-white rounded-[32px] overflow-hidden group shadow-2xl flex flex-col h-full hover:shadow-accent/10 transition-shadow duration-500"
                    >
                        {/* icon container */}
                        <div className="relative h-[150px] flex items-center justify-center bg-accent/5 overflow-hidden">
                            <div className="text-6xl text-accent group-hover:scale-110 transition-all duration-700 ease-in-out">
                                <item.Icon aria-hidden />
                            </div>
                        </div>

                        {/* content */}
                        <div className="p-10 flex flex-col flex-grow">
                            <h3 className="text-[24px] font-bold text-slate-900 leading-[1.2] mb-5 group-hover:text-accent transition-colors duration-300 font-sora">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-grow font-poppins line-clamp-4">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceGrid;
