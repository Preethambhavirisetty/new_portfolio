import { useEffect, useState } from "react";

const useActiveSection = (sectionRefs) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const index = sectionRefs.findIndex((ref) => ref.current === visible.target);
          if (index !== -1) setActiveIndex(index);
        }
      },
      { threshold: 0.6 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return activeIndex;
};

export default useActiveSection;
