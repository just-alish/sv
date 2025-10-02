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
    // Only store the scroll position if we're *not* already at the top
    if (currentScrollPercent > ceiling) {
      lastScrollPercent = currentScrollPercent;
      console.log(`Saved lastScrollPercent: ${lastScrollPercent}`);
    } else {
      console.log('Not saving scroll position — too close to the top');
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
