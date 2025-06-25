let lastScrollPercent: number | null = null;

export function topFunction() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const currentScrollPercent = window.scrollY / maxScroll;
  const ceiling = 0.01;

  if (currentScrollPercent <= ceiling && lastScrollPercent !== null) {
    const target = lastScrollPercent * maxScroll;

    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });

    lastScrollPercent = null;
  } else {
    if (currentScrollPercent > ceiling) {
      lastScrollPercent = currentScrollPercent;
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
