import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination as SwiperPagination } from "swiper";

import { articleData } from "../data/articles";
import Pagination from "./Pagination";

const ArticleSlider = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(articleData.length / itemsPerPage);
    const currentItems = articleData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            {/* Mobile/Tablet Vertical List */}
            <div className="xl:hidden flex flex-col gap-y-6 w-full pb-0">
                {currentItems.map((item, index) => (
                    <Link key={index} href={`/articles/${item.slug}`}>
                        <div className="bg-[rgba(65,47,123,0.15)] rounded-lg overflow-hidden group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                            {/* image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-110 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4 text-3xl text-accent opacity-80">{item.icon}</div>
                            </div>
                            {/* content */}
                            <div className="px-6 py-5">
                                <div className="mb-2 text-xl font-bold">{item.title}</div>
                                <p className="text-sm sm:text-base leading-normal text-white/70">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Desktop Slider (Visible on XL screen) */}
            <div className="hidden xl:block h-[400px]">
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        }
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, SwiperPagination]}
                    className="h-full"
                >
                    {currentItems.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Link href={`/articles/${item.slug}`}>
                                    <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg overflow-hidden group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                                        {/* image */}
                                        <div className="relative h-40 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="group-hover:scale-110 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                            <div className="absolute top-4 right-4 text-3xl text-accent opacity-80">{item.icon}</div>
                                        </div>
                                        {/* content */}
                                        <div className="px-6 py-4">
                                            <div className="mb-2 text-lg font-semibold">{item.title}</div>
                                            <p className="text-sm leading-normal text-white/70">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    );
};

export default ArticleSlider;
