import './style.css';
import { createHeader } from './components/header.ts';
import { createFooter } from './components/footer.ts';
import { createCartObject } from './components/cart.ts';
import { createWall } from './components/wall.ts';
import { addSpringTilt } from './utils/tilt.ts';
import { createPromoObject } from './components/promo.ts';
import { rotate } from './utils/rotate.ts';
import { tiltControl } from './components/globals.ts';
import { startLenis, lenis } from './utils/lenis.ts';

startLenis();

interface LenisScrollEvent {
  scroll: number
  limit: number
  velocity: number
  direction: 1 | -1
  progress: number
}

lenis.on('scroll', (e: LenisScrollEvent) => {
  const progress = (e.scroll / e.limit) * 100;
  const bar = document.querySelector('.scrollbar-progress') as HTMLElement;
  if (bar) {
    bar.style.width = `${progress}%`;
  }
});


const headerElement = createHeader();
document.body.insertBefore(headerElement, document.querySelector('#app'));
const headerLogo = document.querySelector('.logo-container');
if (headerLogo instanceof HTMLElement) {
  addSpringTilt(headerLogo, {}, tiltControl);
}
const headerThemeBtn = document.querySelector<HTMLElement>('.theme-toggle');
if ( headerThemeBtn instanceof HTMLElement ) {
  addSpringTilt(headerThemeBtn, {}, tiltControl);
}

const logoToPreload = document.querySelector('.logo-container svg #svbr');
if (logoToPreload instanceof SVGElement) {
  rotate(logoToPreload, 0, { duration: 0 });
}

const app = document.querySelector('#app');
if (app) {
  app.innerHTML = '';

  app.appendChild(createWall('ethos'));
  app.appendChild(createWall('ethos2'));
  app.appendChild(createWall('ethos3'));
  // app.appendChild(createWall('placeholder'));

  app.appendChild(createCartObject());
  const cartBody = document.querySelector('.cart-body');
  if (cartBody instanceof HTMLElement) {
    addSpringTilt(cartBody, {}, tiltControl);
  }

  app.appendChild(createPromoObject());
}
const promoBody = document.querySelector('.promo-body');
if (promoBody instanceof HTMLElement) {
  addSpringTilt(promoBody, {}, tiltControl);
}
const footer = document.querySelector('#footer');
if (footer) {
  footer.appendChild(createFooter());
}
const everything = document.querySelector('body');
if (everything) {
  everything.querySelectorAll('button').forEach((button) => {
    if (!button.classList.contains('logo-container')) {
      addSpringTilt(button, { scale: 1.02 }, tiltControl);
    }
  });
}