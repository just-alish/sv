export function throttle(func: Function, delay: number) {
  let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

  return function(this: unknown, ...args: unknown[]) {
    if ( throttleTimeout === null ) {
      func.apply(this, args);

      throttleTimeout = setTimeout(() = > {
        throttleTimeout = null;
      }, delay);
    }
  }
}