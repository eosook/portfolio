import { useEffect, useState } from "react";

export default function visibleOnScreen(refs, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            setIntersecting(prev => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          });
        },
        {
          rootMargin,
          threshold: 0.6,
        }
      );
  
      refs.forEach(ref => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
  
      return () => {
        refs.forEach(ref => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      };
    }, [refs, rootMargin]);
  
    return isIntersecting;
}
