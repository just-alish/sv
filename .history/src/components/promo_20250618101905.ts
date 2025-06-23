import '../styles/promo.css';

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

  button.addEventListener('click', () => {
    body.classList.toggle(`visible`);
  });

  return promoContainer;
}