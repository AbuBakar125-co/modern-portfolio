export const siteUrl = "https://abubakar.dev";

export const getCanonicalUrl = (path = "/") => {
  if (!path || path === "/") {
    return `${siteUrl}/`;
  }

  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/$/, "");
  return `${siteUrl}${cleanPath}/`;
};

export const topLinkedPages = [
  {
    title: "Home",
    path: "/",
    text: "WordPress Developer and Frontend Specialist",
  },
  {
    title: "About",
    path: "/about",
    text: "About Abu Bakar Saddique",
  },
  {
    title: "Services",
    path: "/services",
    text: "WordPress, WooCommerce, SEO, and frontend services",
  },
  {
    title: "Work",
    path: "/work",
    text: "Portfolio projects and case studies",
  },
  {
    title: "Contact",
    path: "/contact",
    text: "Hire Abu Bakar for a website project",
  },
];

export const topLinkingSites = [
  {
    name: "GitHub",
    url: "https://github.com/AbuBakar125-co",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abu-bakar-saddique-059486252",
  },
];
