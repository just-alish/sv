let lastScrollPercent: number | null = null;

export function topFunction() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const currentScrollPercent = window.scrollY / maxScroll;
  const ceiling = 0.01;

  // If we're near the top and have a stored position, scroll back down
  if (currentScrollPercent <= ceiling && lastScrollPercent !== null) {
    const target = lastScrollPercent * maxScroll;
    console.log(`Returning to: ${target}`);

    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });

    lastScrollPercent = null;
  } else {
    if (currentScrollPercent > ceiling) {
      lastScrollPercent = currentScrollPercent;
      console.log(`Saved lastScrollPercent: ${lastScrollPercent}`);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
