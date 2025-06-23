export function rotate(element, angle, options = {}) {
  return new Promise((resolve) => {
    const {
      duration = 0,
      easing = 'ease-in-out',
      reset = false
    } = options;
    const finalAngle = reset ? 0 : angle;

    if (!(element instanceof Element)) {
      throw new Error('rotate(): first argument must be a DOM element, dummy.');
    }

    element.style.transition = duration > 0 ? `transform ${duration}ms ${easing}` : ``;
    element.style.transformOrigin = 'center';

    // if (duration > 0) {
    //   element.addEventListener('transitionend', onTransitionEnd);
    // }

    element.style.transform = `rotate(${finalAngle}deg)`;

    resolve();
  })
}