import '../styles/footer.css';
import heartMozaic from '../assets/heart-mozaic.png';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class='ringer-container'>
      <div class='heart-wrapper'>
        <img src='${heartMozaic}' class='heart'>
      </div>
    </div>
  `;

  return footer;
}