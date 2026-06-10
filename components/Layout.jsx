import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

import { useRouter } from "next/router";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const router = useRouter();
  const isFixedPage = router.pathname === "/";

  return (
    <main
      className={`page text-white ${sora.variable} font-sora relative ${isFixedPage ? "h-screen overflow-hidden" : ""
        }`}
    >
      {/* fixed background */}
      <div className="bg-site bg-cover bg-no-repeat bg-fixed fixed inset-0 z-[-1]" aria-hidden="true" />

      {/* metadata */}
      <Head>
        <title>Abu Bakar Saddique | WordPress Developer &amp; Frontend Specialist</title>
        <meta
          name="description"
          content="Abu Bakar Saddique is a WordPress Developer & Frontend Specialist from Pakistan with 4+ years experience. Custom WordPress themes, Elementor, WooCommerce, speed optimization, and React development."
        />
        <meta
          name="keywords"
          content="WordPress Developer Pakistan, Elementor Expert, Frontend Developer Pakistan, WooCommerce Developer, Website Speed Optimization, React Developer, Custom WordPress Theme, Figma to HTML, Abu Bakar Developer, WordPress Freelancer, WordPress Customization"
        />
        <meta name="author" content="Abu Bakar Saddique" />
        <meta name="theme-color" content="#f13024" />
        <link rel="icon" href="/favicon.svg?v=2" />
        <meta name="google-site-verification" content="Xu8tJkv72SE7cfVcSWyFbBL40LUsS8lFvGLf1Uf7awk" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
