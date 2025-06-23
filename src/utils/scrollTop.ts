let lastScrollPercent: number | null = null;

export function topFunction() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  if ( lastScrollPercent === null ) {
    lastScrollPercent = window.scrollY / maxScroll;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    const target = lastScrollPercent * maxScroll;
    const currentScrollPercent = window.scrollY / maxScroll;
    const ceiling = 0.01;

    if ( currentScrollPercent <= ceiling ) {
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