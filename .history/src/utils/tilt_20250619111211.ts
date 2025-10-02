export function addSpringTilt(element: HTMLElement, {
  perspective = 800,
  scale = 1,
  transition = 'transform 0.2s ease'
} = {}) {
  let rect: DOMRect;

  element.style.transformStyle = 'preserve-3d';
  element.style.transition = transition;
  element.style.perspective = `${perspective}px`;
  element.style.willChange = 'transform';

  const updateTransform = (e: MouseEvent) => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width ) - 0.5) * ( 64 * 20 / rect.width );
    const rotateX = ((y / rect.height) - 0.5) * ( 64 * 20 / rect.height );

    element.style.setProperty('--tilt-transform', `
      perspective(${perspective}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `);
  };

  const reset = () => {
    element.style.setProperty('--tilt-transform', `
      perspective(${perspective}px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `);
  };

  element.addEventListener('mouseenter', () => {
    rect = element.getBoundingClientRect();
  });

  element.addEventListener('mousemove', updateTransform);
  element.addEventListener('mouseleave', reset);
}