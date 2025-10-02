import '../styles/footer.css';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class='ringer-container'>
      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2Fp4dpTESUjR5aP6FSbRSeQF.jpg&f=1&nofb=1&ipt=4d9f18aa86b657396fe3beb4c528fc9c9a0a17938be49ad9ab1ebc25f4833455'>
    </div>
  `;

  return footer;
}