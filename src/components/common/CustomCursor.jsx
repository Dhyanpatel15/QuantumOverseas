import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  
  // Real mouse coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Trailing ring coordinates for smooth lerp animation
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Check if hovering over clickable / interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer, label, summary, [data-cursor-pointer]'
      );
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    // Smooth animation loop for outer ring (LERP interpolation)
    let animationFrameId;
    const render = () => {
      // Lerp smoothing factor
      const speed = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * speed;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * speed;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Circle (Trailing Ring in default, Large Pink/Red Circle on Hover) */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,background-color,border-color,opacity,transform] duration-200 ease-out will-change-transform ${
          isHovered
            ? 'w-16 h-16 bg-[#e20935]/35 border-transparent backdrop-blur-[0.5px] scale-100'
            : isClicked
            ? 'w-8 h-8 border-2 border-theme-primary/70 bg-transparent scale-90'
            : 'w-10 h-10 border-2 border-[#e20935]/50 bg-transparent scale-100'
        }`}
        style={{
          boxShadow: isHovered ? '0 0 20px rgba(226, 9, 53, 0.25)' : 'none',
        }}
      />

      {/* Inner Red Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none bg-theme-primary transition-all duration-150 ease-out will-change-transform ${
          isHovered
            ? 'w-1.5 h-1.5 opacity-0 scale-0'
            : isClicked
            ? 'w-2 h-2 opacity-90 scale-125'
            : 'w-2 h-2 opacity-100 scale-100'
        }`}
      />
    </div>
  );
}
