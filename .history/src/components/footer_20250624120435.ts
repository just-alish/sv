import '../styles/footer.css';
import heartMozaic from '../assets/heart-mozaic.svg?raw';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class='ringer-container'>
      ${heartMozaic}
    </div>
  `;

  const heart: SVGElement = footer.querySelector('#hrt');
  console.log(heart);
  
  footer.addEventListener('mouseover', async () => {
    if (heart instanceof SVGElement) {
      // await rotate(heart, 360, { duration: 800 });
      // footer.addEventListener('mouseout', () => rotate(heart, 0, { duration: 400 }));
    } else {
      console.error('element not found: #hrt')
    }
  });

  return footer;
}