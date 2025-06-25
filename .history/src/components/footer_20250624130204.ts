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

  // const bell = new Audio(bellSound);
  // let intervalId: number | undefined;

  const onMouseEnter = (e: MouseEvent) => {
    console.log('hello!');
    bell.currentTime = 0;
    bell.play().catch(console.error);
  };

  const onMouseLeave = () => {
    console.log('bye-bye!');
    heart.style.setProperty('--dim-or-not', `
    opacity(0.1)
  `);
  };

  footer.addEventListener('mouseenter', onMouseEnter);
  footer.addEventListener('mouseleave', onMouseLeave);

  footer.addEventListener('mouseenter', async () => {
  if (heart instanceof SVGElement) {
      // await rotate(heart, 360, { duration: 800 });
      // footer.addEventListener('mouseout', () => rotate(heart, 0, { duration: 400 }));
    } else {
      
    }
  });

  return footer;
}