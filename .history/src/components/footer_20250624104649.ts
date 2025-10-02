import '../styles/footer.css';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class='ringer-container'>
      <img src='..\assets\heart-mozaic.png' />
    </div>
  `;

  return footer;
}