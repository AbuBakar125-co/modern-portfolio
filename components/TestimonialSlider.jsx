import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "https://i.pravatar.cc/100?u=david",
    name: "David Thompson",
    position: "CEO, Frontier Solutions",
    message:
      "Abu Bakar revamped our entire WordPress site — load time dropped from 7s to under 2s and our Google ranking improved noticeably within weeks. Exceptional work and great communication throughout.",
  },
  {
    image: "https://i.pravatar.cc/100?u=alex",
    name: "Alexander Reed",
    position: "Founder, ShopSwift",
    message:
      "The WooCommerce store Abu Bakar built for us boosted our conversion rate by 35%. Clean code, fast checkout flow, and absolutely zero issues after launch. Highly recommended.",
  },
  {
    image: "https://i.pravatar.cc/100?u=mark",
    name: "Mark Johnson",
    position: "Marketing Manager, BrightScale",
    message:
      "We hired Abu Bakar to build a landing page for our campaign — he delivered it 3 days ahead of schedule. The page speed scored 98 on Google PageSpeed and our bounce rate dropped significantly.",
  },
  {
    image: "https://i.pravatar.cc/100?u=robert",
    name: "Robert White",
    position: "Real Estate Director, PropLink",
    message:
      "Abu Bakar redesigned our property listing website with Elementor Pro. Mobile traffic increased by 60% and leads from the contact form doubled within the first month.",
  },
  {
    image: "https://i.pravatar.cc/100?u=thomas",
    name: "Thomas Wright",
    position: "Tech Startup Founder",
    message:
      "Abu Bakar fixed our WordPress performance issues in under 24 hours — our site was scoring a 28 on PageSpeed and he took it to 94. That's the kind of fast, reliable work every startup needs.",
  },
  {
    image: "https://i.pravatar.cc/100?u=kevin",
    name: "Kevin Scott",
    position: "Project Manager, DevNest",
    message:
      "I've worked with many freelancers and Abu Bakar stands out. Responsive, detail-oriented, and he always delivers clean, maintainable code. We now have him on retainer for all our WordPress projects.",
  },
  {
    image: "https://i.pravatar.cc/100?u=sarah",
    name: "Sarah Jenkins",
    position: "Creative Director, Lumino Studio",
    message:
      "Abu Bakar converted our Figma design to a pixel-perfect, fully responsive HTML/CSS site. He matched every detail and even suggested improvements that made the final result better than the original design.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="rounded-full"
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
