import { throttle } from "./throttle.ts";

interface SpringTiltOptions {
  maxRotateW?: number;
  maxRotateH?: number;
  perspective?: number;
  scale?: number;
  transition?: string;
}

export function addSpringTilt(
  element: HTMLElement, {
    maxRotateW,
    maxRotateH,
    perspective = 800,
    scale = 1,
    transition = 'transform 0.2s ease'
  }: SpringTiltOptions = {},
  control?: { holdOn?: boolean }
) {
  let rect: DOMRect;
  let animationFrameId: number | null = null;

  element.style.transformStyle = 'preserve-3d';
  element.style.transition = transition;
  element.style.perspective = `${perspective}px`;
  element.style.willChange = 'transform';

  const updateTransform = (e: MouseEvent) => {
    if (control?.holdOn) return;
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const effectiveMaxRotateW = maxRotateW ?? (64 * 10 / rect.width);
      const effectiveMaxRotateH = maxRotateH ?? (64 * 10 / rect.height);

      const rotateY = ((x / rect.width) - 0.5) * effectiveMaxRotateW;
      const rotateX = ((y / rect.height) - 0.5) * -effectiveMaxRotateH;

      element.style.setProperty('--tilt-transform', `
        perspective(${perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
      `);
    });
  };

  const reset = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    };
    
    element.style.setProperty('--tilt-transform', `
      perspective(${perspective}px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `);
  };

  const onMouseEnter = (e: MouseEvent) => {
    rect = element.getBoundingClientRect();
    updateTransform(e);
  };

  const throttledUpdateTransform = throttle(updateTransform, 166)

  element.addEventListener('mouseenter', onMouseEnter);
  element.addEventListener('mousemove', throttledUpdateTransform);
  element.addEventListener('mouseleave', reset);

  return {
    destroy() {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mousemove', throttledUpdateTransform);
      element.removeEventListener('mouseleave', reset);
    }
  };
}