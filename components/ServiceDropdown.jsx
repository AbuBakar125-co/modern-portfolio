import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";

const ServiceDropdown = ({ services, selectedService, onSelect, isLoading }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            {/* Hidden input for form submission */}
            <input type="hidden" name="service" value={selectedService} required />

            {/* Dropdown Button */}
            <button
                type="button"
                onClick={() => !isLoading && setIsOpen(!isOpen)}
                className={`input flex items-center justify-between transition-all duration-300 ${isOpen ? "border-accent ring-1 ring-accent" : "border-white/20"
                    } ${isLoading ? "cursor-not-allowed opacity-50" : "flex"}`}
                disabled={isLoading}
            >
                <span className={selectedService ? "text-white" : "text-white/30"}>
                    {selectedService || "Select Service"}
                </span>
                <RxChevronDown
                    className={`text-xl transition-all duration-300 ${isOpen ? "rotate-180 text-accent" : "text-white/30"}`}
                />
            </button>

            {/* Options List */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-[#131424] border border-white/20 rounded-lg shadow-2xl overflow-hidden"
                    >
                        <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/5">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        onSelect(service.title);
                                        setIsOpen(false);
                                    }}
                                    className={`px-6 py-4 cursor-pointer transition-all duration-300 hover:bg-accent/20 hover:text-accent ${selectedService === service.title ? "bg-accent/10 text-accent" : "text-white/70"
                                        }`}
                                >
                                    {service.title}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiceDropdown;
