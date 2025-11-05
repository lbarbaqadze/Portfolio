import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import './LogoLoop.css';

export interface LogoItem {
  node: React.ReactNode;
  href?: string;
  title?: string;
  ariaLabel?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; 
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  className,
  style,
  ariaLabel = 'Partner logos',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null); 

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(2);
  const [isHovered, setIsHovered] = useState(false);


  const updateDimensions = useCallback(() => {
    if (!containerRef.current || !seqRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const sequenceWidth = seqRef.current.scrollWidth;

    if (sequenceWidth > 0) {
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + 2; 
      setCopyCount(Math.max(2, copiesNeeded));
      setSeqWidth(sequenceWidth);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const velocity = useMemo(() => (direction === 'left' ? speed : -speed), [direction, speed]);


  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let rafId: number;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000; 
      lastTimeRef.current = time;

      const actualVelocity = pauseOnHover && isHovered ? 0 : velocity;
      offsetRef.current += actualVelocity * delta;

      if (seqWidth > 0 && trackRef.current) {
        const loopOffset = offsetRef.current % seqWidth;
        trackRef.current.style.transform = `translate3d(${-loopOffset}px,0,0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [velocity, seqWidth, pauseOnHover, isHovered]);

  const handleMouseEnter = () => pauseOnHover && setIsHovered(true);
  const handleMouseLeave = () => pauseOnHover && setIsHovered(false);

  const renderLogo = (logo: LogoItem, key: React.Key) => {
    const content = (
      <span className="logoloop__node" aria-hidden={!!logo.href && !logo.ariaLabel}>
        {logo.node}
      </span>
    );

    return (
      <li className="logoloop__item" key={key}>
        {logo.href ? (
          <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.ariaLabel || logo.title}>
            {content}
          </a>
        ) : (
          content
        )}
      </li>
    );
  };

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }).map((_, copyIndex) => (
        <ul
          className="logoloop__list"
          key={copyIndex}
          ref={copyIndex === 0 ? seqRef : undefined}
          aria-hidden={copyIndex > 0}
        >
          {logos.map((logo, idx) => renderLogo(logo, `${copyIndex}-${idx}`))}
        </ul>
      )),
    [logos, copyCount]
  );

  const cssVars: React.CSSProperties = {
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={['logoloop', fadeOut && 'logoloop--fade', scaleOnHover && 'logoloop--scale-hover', className]
        .filter(Boolean)
        .join(' ')}
      style={{ ...cssVars, ...style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef}>
        {logoLists}
      </div>
    </div>
  );
};

export default LogoLoop;
