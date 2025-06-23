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
    window.scrollTo({
      top: lastScrollPercent,
      behavior: 'smooth'
    });

    lastScrollPercent = null;
  }
}