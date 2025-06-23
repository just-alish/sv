import '../styles/promo.css';
import { tiltControl } from './globals';

export function createPromoObject() {
  function createPromoBody() {
    const promoBody = document.createElement('input');
    promoBody.className = 'promo-body';
    promoBody.placeholder = 'enter a promo code.'

    return promoBody;
  };

  function createPromoButton() {
    const promoButton = document.createElement('button');
    promoButton.className = 'promo-button';
    promoButton.innerHTML = 'promo';

    return promoButton;
  }

  const promoContainer = document.createElement('div');
  promoContainer.className = 'promo-container';

  const body = createPromoBody();
  const button = createPromoButton();

  promoContainer.appendChild(button);
  promoContainer.appendChild(body);

  const togglePromo = () => {
    tiltControl.holdOn = true;

    body.classList.toggle('visible');

    const handleTransitionEnd = () => {
      tiltControl.holdOn = false;
      body.removeEventListener('transitionend', handleTransitionEnd);
    };

    createPromoBody.addEventListener('transitionend', handleTransitionEnd);
  }

  button.addEventListener('click', togglePromo)

  // button.addEventListener('click', () => {
  //   body.classList.toggle(`visible`);
  // });

  return promoContainer;
}