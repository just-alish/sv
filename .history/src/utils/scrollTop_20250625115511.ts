import type Lenis from '@studio-freight/lenis'

let lastScrollPercent: number | null = null;

export function topFunction(lenis: Lenis) {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  lastScrollPercent = window.scrollY / maxScroll;

  const currentScroll = lenis.scroll;
  const currentScrollPercent = currentScroll / maxScroll;
  const ceiling = 0.01;

  if ( lastScrollPercent === null ) {
    lastScrollPercent = currentScrollPercent;
    lenis.scrollTo(0);
  } else {
    if ( currentScrollPercent <= ceiling ) {
     const target = lastScrollPercent * maxScroll;
      lenis.scrollTo(target);
    } else {
      lastScrollPercent = currentScrollPercent;
      lenis.scrollTo(0);
    }
  }
  lastScrollPercent = null;
}