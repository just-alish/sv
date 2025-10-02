import '../styles/footer.css';
import heartMozaic from '../assets/heart-mozaic.svg?raw';
import bellSound from '../assets/elevator-bell.opus';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class='ringer-container'>
      ${heartMozaic}
    </div>
  `;

  const heart = footer.querySelector('#heart') as SVGElement | null;
  
  if ( !heart ) {
    console.error('element not found: #heart')
    return footer;
  }

  const bell = new Audio(bellSound);
  let intervalId: number | undefined;

  const onMouseEnter = (e: MouseEvent) => {
    console.log('hello!');
    heart.style.setProperty('--dim-or-not', '1');
    // bell.currentTime = 0;
    // bell.play().catch(console.error);

    let visible = true;
    intervalId = window.setInterval(() => {
      heart.style.setProperty('--dim-or-not', visible ? '1' : '0.2');
      visible = !visible;
    }, 5000);
  };

  const onMouseLeave = () => {
    console.log('bye-bye!');
    heart.style.setProperty('--dim-or-not', '0.1');
  };

  footer.addEventListener('mouseenter', onMouseEnter);
  footer.addEventListener('mouseleave', onMouseLeave);

  return footer;
}