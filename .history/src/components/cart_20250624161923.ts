import '../styles/cart.css';
import { tiltControl } from './globals';

export function createCartObject() {
  function createCartBody() {
    const cart = document.createElement('div');
    cart.className = 'cart-body';

    cart.innerHTML = `
      <h1>PLACEHOLDER RECEIPT</h1>
      <p>••••••••••••••••••••••••••••••••••••</p>
      <h3>'Placeholder' $0.00</h3>
      <p>Zero Will Not Sell Well</p>
      <h3>'Amnesiac' $42.99</h3>
      <p>Radiohead</p>
      <h3>'Schoolars' $59.99</h3>
      <p>Car Seat Headrest</p>
      <h3>'The Doors' $34.99</h3>
      <p>The Doors</p>
      <h3>'Deathconsciousness' $50.99</h3>
      <p>Have A Nice Life</p>
      <h3>'The Singles Plus' $42.99</h3>
      <p>The Animals</p>

      <h6>••••••••••••••••••••••••••••••••••••</h6>

      <h3>Date/Time</h3>
      <p>••••••••••••••••••••••••••••••••••••</p>
    `;

    return cart;
  }

  function createCartButton() {
    const cartButton = document.createElement('button');
    cartButton.className = 'cart-button'
    cartButton.innerHTML = `cart`;

    return cartButton;
  }

  const cartContainer = document.createElement('div')
  cartContainer.className = 'cart-container';

  const cartBody = createCartBody();
  const cartButton = createCartButton();

  cartContainer.appendChild(cartButton);
  cartContainer.appendChild(cartBody);

  const toggleCart = () => {
    tiltControl.holdOn = true;

    cartBody.classList.toggle('visible');

    const handleTransitionEnd = () => {
      tiltControl.holdOn = false;
      cartBody.removeEventListener('transitionend', handleTransitionEnd);
    };

    cartBody.addEventListener('transitionend', handleTransitionEnd);
  };

  cartButton.addEventListener('click', toggleCart);
  cartBody.addEventListener('click', toggleCart);

  return cartContainer;
}