import '../styles/footer.css';
import heartMozaic from '../assets/heart-mozaic.png';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class='ringer-container'>
      <img src='${heartMozaic}' class='heart'>
    </div>
  `;

  return footer;
}