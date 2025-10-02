export function addSpringTilt(element, {
  maxRotateW = ( 64 * 20 / element.getBoundingClientRect().width ),
  maxRotateH = ( 64 * 20 / element.getBoundingClientRect().height ),
  perspective = 800,
  scale = 1,
  transition = 'transform 0.2s ease'
} = {}) {
  let wait = false;
  if (!wait) {
    element.style.transformStyle = 'preserve-3d';
    element.style.transition = transition;
    element.style.perspective = `${perspective}px`;

    const handleMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width ) - 0.5) * maxRotateW;
      const rotateX = ((y / rect.height) - 0.5) * -maxRotateH;

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

    element.addEventListener('mousemove', handleMove);
    element.addEventListener('mouseleave', reset);
  }
}