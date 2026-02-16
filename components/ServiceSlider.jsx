import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import {
  SiWordpress,
  SiElementor,
  SiWoocommerce,
  SiHtml5,
  SiFigma,
} from "react-icons/si";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Branding",
    description: "I create strong and consistent digital identities that make your brand look professional, modern, and memorable.",
  },
  {
    Icon: RxPencil2,
    title: "Design",
    description: "I design clean, user-friendly interfaces that combine beautiful visuals with smooth user experience.",
  },
  {
    Icon: RxDesktop,
    title: "Development",
    description: "I build fast, secure, and scalable websites using WordPress and modern frontend technologies.",
  },
  {
    Icon: RxReader,
    title: "Copywriting",
    description: "I write clear, engaging content that connects with your audience and increases conversions.",
  },
  {
    Icon: RxRocket,
    title: "SEO Optimization",
    description: "I optimize websites to improve search rankings, boost visibility, and drive organic traffic.",
  },
  {
    Icon: SiWordpress,
    title: "WordPress Development",
    description: "Custom WordPress websites built with clean code, SEO optimization, and fast loading speed.",
  },
  {
    Icon: SiElementor,
    title: "Elementor Website Design",
    description: "Professional Elementor websites with pixel-perfect layouts and modern UI/UX.",
  },
  {
    Icon: SiWoocommerce,
    title: "WooCommerce",
    description: "Complete eCommerce solutions including product setup, checkout optimization, and payment integration.",
  },
  {
    Icon: RxRocket, // Using Rocket as representative of performance/customization
    title: "WordPress Customization",
    description: "Theme and plugin customization, bug fixing, and performance improvements.",
  },
  {
    Icon: SiHtml5,
    title: "Frontend Development",
    description: "Responsive frontend development using HTML, CSS, JavaScript, Bootstrap, and jQuery.",
  },
  {
    Icon: SiFigma,
    title: "Figma to HTML",
    description: "Convert Figma or PSD designs into SEO-friendly, responsive, and optimized HTML code.",
  },
];

const ServiceSlider = () => {
  return (
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
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[300px] sm:h-[400px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-[85%] sm:h-[340px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
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
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
