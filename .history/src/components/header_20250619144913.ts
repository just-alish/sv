import '../styles/header.css';
import { rotate } from '../utils/rotate';
import { topFunction } from '../utils/scrollTop';

export function createHeader() {
  function createLogo() {
    const logo = document.createElement('button');
    logo.className = 'logo-container';
    logo.onclick = () => topFunction();

    logo.innerHTML = `
      <svg id="svlayer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 106.86">
        <defs>
          <style>
            .cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:5px;}.cls-2{fill:#fff;}
          </style>
        </defs>
        <g id="svbr">
          <path class="cls-1" d="M966,605a91,91,0,0,0,.28-104" transform="translate(-797.91 -499.57)"/>
          <path class="cls-1" d="M816.6,501a91,91,0,0,0,.27,104" transform="translate(-797.91 -499.57)"/>
        </g>
        <g id="svlt">
          <path class="cls-2" d="M866.78,579a28.25,28.25,0,0,1-13.45-3.1,17.41,17.41,0,0,1-8.25-8.9l4.3-2.9a14.46,14.46,0,0,0,6.45,7.75,22,22,0,0,0,11.35,2.75q6.6,0,10.35-2.6a8,8,0,0,0,3.75-6.9,7.51,7.51,0,0,0-1.85-5.05c-1.24-1.43-3.55-2.52-6.95-3.25l-11.7-2.5q-7.2-1.5-10.25-4.85a12.22,12.22,0,0,1-.65-15.35,16.9,16.9,0,0,1,6.65-5.15,23.65,23.65,0,0,1,10-2q7.5,0,12.4,3a15.94,15.94,0,0,1,6.9,8.85l-4.2,2.7a12.42,12.42,0,0,0-5.55-7.7,18.4,18.4,0,0,0-9.55-2.4,19.92,19.92,0,0,0-7.35,1.25,11.68,11.68,0,0,0-4.9,3.4,7.59,7.59,0,0,0-1.75,5,7.88,7.88,0,0,0,2,5.25q2,2.36,7.1,3.45l12,2.6q7.09,1.5,9.9,4.55a10.77,10.77,0,0,1,2.8,7.55,12.9,12.9,0,0,1-2.4,7.8,15,15,0,0,1-6.8,5A27.74,27.74,0,0,1,866.78,579Z" transform="translate(-797.91 -499.57)"/>
          <path class="cls-2" d="M933.28,528h5.3l-20.9,50h-5l-20.9-50h5.6l17.9,44.8Z" transform="translate(-797.91 -499.57)"/>
        </g>
      </svg>
    `;
    
    const brackets = logo.querySelector('#svbr');

    logo.addEventListener('mouseover', async () => {
      if (brackets instanceof SVGElement) {
        await rotate(brackets, 360, { duration: 800 });
        logo.addEventListener('mouseout', () => rotate(brackets, 0, { duration: 400 }));
      } else {
        console.error('element not found: #svbr')
      }
      // console.log('rotation complete.');
    });

    return logo;
  }

  function createSchool() {
    const school = document.createElement('section');
    school.className = 'header-buttons';
    school.innerHTML = `
      <button class='header-button'>search</button>
      <button class='header-button'>contact</button>
      <button class='header-button'>info</button>
    `;

    return school;
  }

  function createThemeBtn() {
    const themeBtn = document.createElement('section');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = `
      <label for='themeCheckBox'>
        <input type='checkbox' id='themeCheckBox' name'theme' value='dark' hidden />
        hi
        hi
      </label>
    `;
    return themeBtn;
  }

  const header = document.createElement('header');
  header.className = 'header'

  const headerLogo = createLogo();
  const headerSchool = createSchool();
  const headerThemeBtn = createThemeBtn();
  
  header.appendChild(headerLogo);
  header.appendChild(headerSchool);
  header.appendChild(headerThemeBtn);

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const atTop = window.scrollY <= 0;
        document.querySelector('.logo-container')?.classList.toggle('scrolled', !atTop);
        document.querySelector('.header-buttons')?.classList.toggle('scrolled', !atTop);
        document.querySelectorAll('.header-button')?.forEach(button =>
          button.classList.toggle('scrolled', !atTop)
        );
        ticking = false;
      });
      ticking = true;``
    }
  });
  
  let themeBtnRotation = 0;
  let going = false;

  if (!going) {
    headerThemeBtn.addEventListener('click', () => {
      themeBtnRotation -= 180;
      rotate(headerThemeBtn, themeBtnRotation, { duration: 400, easing: 'ease-out' })
    });
    setTimeout('400')
    going = true;
  }

  /*
  headerThemeBtn.addEventListener('click', () => {
  themeBtnRotation += 360;    rotate(headerThemeBtn, themeBtnRotation, { duration: 400, easing: 'ease-out' }
  }
  */
  return header;
}