import { lenis } from './utils/lenis';

let lastScrollPercent: number | null = null;

export function topFunction() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const currentScrollPercent = window.scrollY / maxScroll;
  const ceiling = 0.01;

  lenis.stop();

  if (currentScrollPercent <= ceiling && lastScrollPercent !== null) {
    const target = lastScrollPercent * maxScroll;

    lenis.scrollTo(target, { immediate: false });

    lastScrollPercent = null;
  } else {
    if (currentScrollPercent > ceiling) {
      lastScrollPercent = currentScrollPercent;
    }
    lenis.scrollTo(0, { immediate: false });
  }
}
