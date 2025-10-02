import Lenis from '@studio-freight/lenis';

export const lenis = new Lenis({
  duration: 1.2,
});

export function startLenis() {
  lenis.start();
}

export function stopLenis() {
  lenis.stop();
}