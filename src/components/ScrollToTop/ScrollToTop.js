import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Adjust the delay as needed (in milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [pathname]);

  return null;
};

export default ScrollToTop;
