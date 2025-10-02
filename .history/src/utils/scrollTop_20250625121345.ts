import type Lenis from '@studio-freight/lenis'

let lastScrollPercent: number | null = null;

export function topFunction() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  console.log(maxScroll);

  const currentScrollPercent = window.scrollY / maxScroll;
  const ceiling = 0.01;

  if ( lastScrollPercent === null ) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    if ( currentScrollPercent <= ceiling ) {
      lastScrollPercent = window.scrollY / maxScroll;
      console.log(`lastScrollPercent: ${lastScrollPercent}`);

      const target = lastScrollPercent * maxScroll;
      console.log(`target: ${target}`);

      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
    } else {
      lastScrollPercent = window.scrollY / maxScroll;
      console.log(`lastScrollPercent: ${lastScrollPercent}`);

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    lastScrollPercent = null;
  }
}