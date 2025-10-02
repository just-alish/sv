import '../styles/footer.css';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
      <div class='footer-container'>
        <div class='row-of-columns'>
          <section class='column'>
            <h3 class='st'>(sv)</h3>
            <div><a href="#">about us</a></div>
            <div><a href="#">contact use</a></div>
            <div><a href="#">terms of use</a></div>
            <div><a href="#">our partners</a></div>
          </section>
          <section class='column'>
            <h3>socials</h3>
            <div><a href="#">instagram</a></div>
            <div><a href="#">twitter</a></div>
            <div><a href="#">tiktok</a></div>
            <div><a href="#">youtube</a></div>
          </section>
          <section class='column'>
            <h3>service</h3>
            <div><a href="#">I have</a></div>
            <div><a href="#">no clue</a></div>
            <div><a href="#">what belongs</a></div>
            <div><a href="#">in 'service'</a></div>
          </section>
        </div>
        <div class='row-of-columns'> 
          <section class='column'>
            <h3>newsletter</h3>
            <form>
              <input type='email' placeholder='your e-mail' />
              <button type='submit'>sub</button>
            </form>
          </section>
        </div>
      </div>
  `;

  return footer;
}