import { useEffect, useRef } from 'react';

export const useThemeObserver = (setState, stateNumber) => {
  const isRef = useRef(null);
  const option = { threshold: 0, rootMargin: `-${document.body.scrollHeight / 2 - 1}px 0px` };

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setState(stateNumber);
        console.log('여깁니다');
      }
    }, option);

    if (isRef.current) {
      observer.observe(isRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [isRef];
};
