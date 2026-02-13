import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import { articleData } from "../data/articles";

const ArticleSlider = () => {
    return (
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
            modules={[FreeMode, Pagination]}
            className="h-[340px] sm:h-[400px]"
        >
            {articleData.map((item, index) => {
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
    );
};

export default ArticleSlider;
