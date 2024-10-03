import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (hash) {
        const section = document.getElementById(hash.substring(1));
        if (section) {
          const yOffset = -50; // Adjust this value to the height of your fixed header/navbar
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const timer = setTimeout(scrollToHash, 100); // Slight delay to ensure content is loaded before scrolling

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
