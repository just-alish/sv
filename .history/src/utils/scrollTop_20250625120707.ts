import type Lenis from '@studio-freight/lenis'

let lastScrollPercent: number | null = null;

export function topFunction() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  console.log(maxScroll);

  const currentScrollPercent = window.scrollY / maxScroll;
  const ceiling = 0.01;

  if ( lastScrollPercent === null ) {
    lastScrollPercent = window.scrollY / maxScroll;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    if ( currentScrollPercent <= ceiling ) {
      const target = lastScrollPercent * maxScroll;
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
    } else {
      lastScrollPercent = window.scrollY / maxScroll;

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    lastScrollPercent = null;
  }
}