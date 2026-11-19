import { useLocation } from "react-router-dom";

export const useHero = () => {
  const location = useLocation();

  const heroData = {

    "/about": {
      title: "About Us",
      subtitle: "Discover who we are and what makes our hotel special",
      buttonText: "View Services",
      image: "/hotelimages/hero_bg.png",
      breadcrumb: "About Us",
      buttonLink: "/services"
    },

    "/services": {
      title: "Our Services",
      subtitle: "We provide premium services to make your stay comfortable",
      buttonText: "About Us",
      image: "/hotelimages/hero_bg.png",
      buttonLink: "/about"
    },

    "/career": {
      title: "Career",
      subtitle: "Join our team and grow your career with us",
      buttonText: "Explore More",
      image: "/hotelimages/hero_bg.png",
      breadcrumb: "Career",
      buttonLink: "/about"
    },

    "/login": {
      title: "Welcome Back",
      subtitle: "Login to manage your bookings and account",
      buttonText: "Explore More",
      image: "/hotelimages/hero_bg.png",
      buttonLink: "/"
    },

    "/contact": {
      title: "Contact Us",
      subtitle: "Let's connect with us",
      buttonText: "Explore More",
      image: "/hotelimages/hero_bg.png",
      buttonLink: "/about"
    },
    
    "/faq": {
      title: "FAQ",
      subtitle: "Let's read frequently ask questions",
      buttonText: "Explore More",
      image: "/hotelimages/hero_bg.png",
      buttonLink: "/about"
    },
  };

  return heroData[location.pathname] || heroData["/"];
};

