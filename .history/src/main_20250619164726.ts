import './style.css';
import { createHeader } from './components/header.ts';
import { createFooter } from './components/footer.ts';
import { createCartObject } from './components/cart.ts';
import { createWall } from './components/wall.ts';
import { addSpringTilt } from './utils/tilt.ts';
import { createPromoObject } from './components/promo.ts';
import { rotate } from './utils/rotate.ts';

const headerElement = createHeader();
document.body.insertBefore(headerElement, document.querySelector('#app'));
const headerLogo = document.querySelector('.logo-container');
if (headerLogo instanceof HTMLElement) {
  addSpringTilt(headerLogo);
}
const logoToPreload = document.querySelector('.logo-container svg #svbr');
console.log(logoToPreload)
if (logoToPreload instanceof SVGElement) {
  rotate(logoToPreload, 0, { duration: 0 });
}

const app = document.querySelector('#app');
if (app) {
  app.innerHTML = '<div class="bg"></div>';

  app.appendChild(createWall('ethos'));
  app.appendChild(createWall('placeholder'))

  app.appendChild(createCartObject());
  const cartBody = document.querySelector('.cart-body')
  if (cartBody instanceof HTMLElement) {
    addSpringTilt(cartBody);
  }

  app.appendChild(createPromoObject());;
}
const promoBody = document.querySelector('.promo-body');
if (promoBody instanceof HTMLElement) {
  addSpringTilt(promoBody);
}
const footer = document.querySelector('#footer');
if (footer) {
  footer.appendChild(createFooter());
}
const everything = document.querySelector('body');
if (everything) {
  everything.querySelectorAll('button').forEach((button) => {
    if (!button.classList.contains('logo-container')) {
      addSpringTilt(button, {
        scale: 1.02
      });
    }
  });
}
// everything.style='background-image: url(blob:https://web.telegram.org/fdc012fc-a226-4078-84b5-1835c6e9e7cb);';