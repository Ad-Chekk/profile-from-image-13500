
import { useEffect, useRef } from "react";

/**
 * Hook that animates elements when they enter the viewport
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // Once the animation has been triggered, no need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      // Find all elements with the fade-up class
      const animatableElements = currentElement.querySelectorAll(".fade-up");
      animatableElements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (currentElement) {
        const animatableElements = currentElement.querySelectorAll(".fade-up");
        animatableElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return ref;
}
