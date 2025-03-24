import { useEffect, useRef, type ReactNode } from 'react';

interface IntersectionObserverProps {
  children: ReactNode;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  observerHeight?: string;
  disabled?: boolean;
}

const DEFAULT_THRESHOLD = 0.5;
const DEFAULT_ROOT_MARGIN = '200px';
const OBSERVER_REF_HEIGHT = '10px';

export const IntersectionObserver = ({
  children,
  onIntersect,
  threshold = DEFAULT_THRESHOLD,
  rootMargin = DEFAULT_ROOT_MARGIN,
  observerHeight = OBSERVER_REF_HEIGHT,
  disabled = false,
}: IntersectionObserverProps) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onIntersect, threshold, rootMargin, disabled]);

  return (
    <>
      {children}
      <div ref={observerRef} style={{ height: observerHeight }}></div>
    </>
  );
};
