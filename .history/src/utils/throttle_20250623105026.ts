export function throttle(func, delay) {
  let throttleTimeout = null;
  return function() {
    if ( !throttleTimeout ) {
      func()
      throttleTimeout = setTimeout(() = > {
        throttleTimeout = null;
      }, delay)
    }
  }
}