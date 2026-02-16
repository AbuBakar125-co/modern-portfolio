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
      "Abu Bakar Dev is a highly skilled professional. He delivered a top-tier WordPress solution that exceeded our expectations in every way.",
  },
  {
    image: "https://i.pravatar.cc/100?u=alex",
    name: "Alexander Reed",
    position: "Founder, ShopSwift",
    message:
      "The e-commerce platform Abu Bakar Dev built for us is fast, secure, and very easy to manage. His technical expertise is truly impressive.",
  },
  {
    image: "https://i.pravatar.cc/100?u=mark",
    name: "Mark Johnson",
    position: "Marketing Manager",
    message:
      "Working with Abu Bakar Dev was an absolute pleasure. He understands business requirements perfectly and translates them into great code.",
  },
  {
    image: "https://i.pravatar.cc/100?u=robert",
    name: "Robert White",
    position: "Real Estate Director",
    message:
      "Abu Bakar Dev helped us revamp our website, making it mobile-responsive and much more user-friendly. Our lead generation has improved significantly.",
  },
  {
    image: "https://i.pravatar.cc/100?u=thomas",
    name: "Thomas Wright",
    position: "Tech Startup Founder",
    message:
      "If you need a reliable developer who knows WordPress inside out, contact Abu Bakar Dev. He solved all our performance issues in no time.",
  },
  {
    image: "https://i.pravatar.cc/100?u=kevin",
    name: "Kevin Scott",
    position: "Project Manager",
    message:
      "Abu Bakar Dev's commitment to quality is remarkable. He's communicative, fast, and builds everything with clean, maintainable code.",
  },
  {
    image: "https://i.pravatar.cc/100?u=sarah",
    name: "Sarah Jenkins",
    position: "Creative Director",
    message:
      "Abu Bakar Dev is the go-to person for high-end web development. He turned our designs into a pixel-perfect reality with amazing attention to detail.",
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
