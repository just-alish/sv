interface RotateOptions {
  duration?: number;
  easing?: string;
  reset?: boolean;
}

export function rotate(
  element: HTMLElement | SVGElement,
  angle: number,
  options: RotateOptions = {}
): Promise<void> {
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
    element.style.setProperty(`--rotation-transform`, `rotate(${finalAngle}deg)`);

    if ( duration<= 0 ) {
      return resolve();
    }

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === 'transform') {
        element.removeEventListener('transitioned', onTransitionEnd);
        resolve();
      }
    };
  })

  element.addEventListener('transitioned', onTransitionEnd)
}