"use client";

import { useEffect, useRef, useMemo, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  start?: string;
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  start = 'top bottom'
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: start,
            end: rotationEnd,
            scrub: true
          }
        }
      );

      const wordElements = el.querySelectorAll('.word');

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, filter: enableBlur ? `blur(${blurStrength}px)` : 'none', willChange: 'opacity, filter' },
        {
          ease: 'none',
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: start,
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, start]);

  return (
    <div ref={containerRef} className={`${containerClassName}`}>
      <div className={`${textClassName}`}>{splitText}</div>
    </div>
  );
};

export default ScrollReveal;
