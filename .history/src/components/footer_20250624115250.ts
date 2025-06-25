import '../styles/footer.css';
import heartMozaic from '../assets/heart-mozaic.svg';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class='ringer-container'>
      <img src='${heartMozaic}' class='heart' id='hrt'>
    </div>
  `;

  const heart = footer.querySelector('#hrt');
  console.log(heart);
  
      heart.addEventListener('mouseover', async () => {
        if (brackets instanceof SVGElement) {
          await rotate(brackets, 360, { duration: 800 });
          logo.addEventListener('mouseout', () => rotate(brackets, 0, { duration: 400 }));
        } else {
          console.error('element not found: #svbr')
        }
      });

  return footer;
}