import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import { siteUrl, topLinkedPages, topLinkingSites } from "../data/site";

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
  const cleanPath = router.asPath === "/" ? "/" : router.asPath.split("?")[0].split("#")[0];
  const canonicalUrl = `${siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AbuBakar.Dev",
    url: siteUrl,
    inLanguage: "en",
  };
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abu Bakar Saddique",
    url: siteUrl,
    jobTitle: "WordPress Developer and Frontend Specialist",
    sameAs: topLinkingSites.map((site) => site.url),
  };
  const linkedPagesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top linked pages",
    itemListElement: topLinkedPages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.text,
      url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    })),
  };

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
        <meta property="og:site_name" content="AbuBakar.Dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Abu Bakar Saddique | WordPress Developer & Frontend Specialist" />
        <meta
          property="og:description"
          content="Portfolio of Abu Bakar Saddique, a WordPress Developer and Frontend Specialist building fast, SEO-friendly business websites."
        />
        <meta property="og:image" content={`${siteUrl}/avatar.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.svg?v=2" />
        <meta name="google-site-verification" content="Xu8tJkv72SE7cfVcSWyFbBL40LUsS8lFvGLf1Uf7awk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedPagesSchema) }}
        />
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
