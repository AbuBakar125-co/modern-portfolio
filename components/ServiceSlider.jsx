import { useState } from "react";
import { FreeMode, Pagination as SwiperPagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxArrowTopRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { serviceData } from "../data/services";
import Pagination from "./Pagination";

const ServiceSlider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(serviceData.length / itemsPerPage);
  const currentItems = serviceData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Mobile/Tablet Vertical List */}
      <div className="xl:hidden flex flex-col gap-y-4 w-full">
        {currentItems.map((item, i) => (
          <div
            key={i}
            className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex items-center gap-x-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            {/* icon */}
            <div className="text-4xl text-accent">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="flex-1">
              <div className="mb-2 text-lg font-bold">{item.title}</div>
              <p className="max-w-[350px] leading-normal text-sm sm:text-base">
                {item.description}
              </p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
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
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, SwiperPagination]}
          freeMode
          className="h-full"
        >
          {currentItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[rgba(65,47,123,0.15)] h-[340px] rounded-lg px-6 py-8 flex flex-col group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">
                  <item.Icon aria-hidden />
                </div>

                {/* title & description */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>

                {/* arrow */}
                <div className="mt-auto text-3xl">
                  <RxArrowTopRight
                    className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                    aria-hidden
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
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

export default ServiceSlider;
