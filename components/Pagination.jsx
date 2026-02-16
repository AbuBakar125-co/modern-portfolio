import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-x-4 mt-8 pb-10 xl:pb-0">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-x-2 px-4 py-2 bg-white/5 rounded-full hover:bg-accent transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white/5"
            >
                <BsArrowLeft aria-hidden /> Prev
            </button>

            <div className="flex items-center gap-x-2">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i + 1)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${currentPage === i + 1
                                ? "bg-accent text-white"
                                : "bg-white/5 hover:bg-white/10"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-x-2 px-4 py-2 bg-white/5 rounded-full hover:bg-accent transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white/5"
            >
                Next <BsArrowRight aria-hidden />
            </button>
        </div>
    );
};

export default Pagination;
