export function addSpringTilt(element: HTMLElement, {
  maxRotateW,
  maxRotateH,
  perspective = 800,
  scale = 1,
  transition = 'transform 0.2s ease'
} = {}) {
  let rect: DOMRect;
  let animationFrameId: number | null = null;

  element.style.transformStyle = 'preserve-3d';
  element.style.transition = transition;
  element.style.perspective = `${perspective}px`;
  element.style.willChange = 'transform';

  const updateTransform = (e: MouseEvent) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const effectiveMaxRotateW = maxRotateW ?? (64 * 20 / rect.width);
      const effectiveMaxRotateH = maxRotateHH ?? (64 * 20 / rect.height);

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
  };

  element.addEventListener('mouseenter', onMouseEnter);
  element.addEventListener('mousemove', updateTransform);
  element.addEventListener('mouseleave', reset);
}