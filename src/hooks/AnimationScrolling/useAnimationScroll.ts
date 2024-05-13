import { useState, useRef, useCallback, useEffect } from "react";

export const useAnimations = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const blockRef = useCallback((node: HTMLDivElement) => {
    if (observer) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        const { isIntersecting } = entries[0];
        setIsShow(isIntersecting);
        console.log('isShow:', isIntersecting);
      });
      if (node) observer.current?.observe(node);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return {
    isShow,
    blockRef,
  };
};