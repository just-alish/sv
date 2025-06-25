import Lenis from '@studio-freight/lenis';

export const lenis = new Lenis({
  duration: 1.2,
});

let isRunning = false;

function raf(time: number) {
  lenis.raf(time);
  if (isRunning) requestAnimationFrame(raf);
}

export function startLenis() {
    isRunning = true;
    requestAnimationFrame(raf);
}

export function stopLenis() {
  isRunning = false;
  lenis.stop();
}