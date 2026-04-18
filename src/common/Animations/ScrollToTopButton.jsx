import { useEffect, useState, useRef } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const currentScrollY = window.scrollY;

      // detect scroll direction
      setIsScrollingDown(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setVisible(currentScrollY > heroBottom - 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const yOffset = -64;
    const y =
      hero.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToHero}
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-white text-[#00AEEF] cart-shadow rounded-full flex justify-center items-center shadow-lg transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
    >
      <MdKeyboardDoubleArrowUp
        className={`text-[22px] transition-transform duration-300 ${
          isScrollingDown ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
};

export default ScrollToTopButton;
