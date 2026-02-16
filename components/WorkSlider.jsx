import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination as SwiperPagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { workData } from "../data/work";
import Pagination from "./Pagination";

const WorkSlider = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(workData.length / itemsPerPage);
  const currentItems = workData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Group currentItems into slides of 4 for desktop grid view
  const groupedItems = [];
  for (let i = 0; i < currentItems.length; i += 4) {
    groupedItems.push(currentItems.slice(i, i + 4));
  }

  return (
    <>
      {/* Mobile/Tablet Vertical List */}
      <div className="xl:hidden flex flex-col gap-y-6 w-full">
        {currentItems.map((image, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden flex items-center justify-center group"
          >
            <div className="flex items-center justify-center relative overflow-hidden group w-full">
              {/* image */}
              <Image
                src={image.path}
                alt={image.title}
                width={500}
                height={300}
                className="w-full object-cover"
              />

              {/* overlay gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                aria-hidden
              />

              {/* title */}
              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                <Link
                  href={image.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                >
                  <div className="delay-100 font-bold">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 font-bold">
                    PROJECT
                  </div>
                  <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    <BsArrowRight aria-hidden />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid Slider (Visible on XL screen) */}
      <div className="hidden xl:block">
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[SwiperPagination]}
          className="h-[480px]"
        >
          {groupedItems.map((slideItems, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {slideItems.map((image, imageI) => (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={imageI}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        alt={image.title}
                        width={500}
                        height={300}
                      />

                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                        aria-hidden
                      />

                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                        <Link
                          href={image.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                        >
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <BsArrowRight aria-hidden />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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

export default WorkSlider;
