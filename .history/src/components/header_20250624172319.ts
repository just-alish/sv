import '../styles/header.css';
import { rotate } from '../utils/rotate';
import { topFunction } from '../utils/scrollTop';
import { throttle } from '../utils/throttle';
import { tiltControl } from './globals';

export function createHeader() {
  function createLogo() {
    const logo = document.createElement('button');
    logo.className = 'logo-container';
    const throttledTopFunction = throttle(topFunction, 1000)
    logo.onclick = () => throttledTopFunction();

    logo.innerHTML = `
      <svg id="svlayer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 106.86">
        <defs>
          <style>
            .cls-sv-1{fill:none;stroke:var(--font-color);stroke-miterlimit:10;stroke-width:5px;}
            .cls-sv-2{fill:var(--font-color);}
            .cls-sv-3{fill:none;stoke:none;}
          </style>
        </defs>
        <g id="svbr">
          <path class="cls-sv-1" d="M966,605a91,91,0,0,0,.28-104" transform="translate(-797.91 -499.57)"/>
          <path class="cls-sv-1" d="M816.6,501a91,91,0,0,0,.27,104" transform="translate(-797.91 -499.57)"/>
        </g>
        <g id="svlt">
          <path class="cls-sv-2" d="M866.78,579a28.25,28.25,0,0,1-13.45-3.1,17.41,17.41,0,0,1-8.25-8.9l4.3-2.9a14.46,14.46,0,0,0,6.45,7.75,22,22,0,0,0,11.35,2.75q6.6,0,10.35-2.6a8,8,0,0,0,3.75-6.9,7.51,7.51,0,0,0-1.85-5.05c-1.24-1.43-3.55-2.52-6.95-3.25l-11.7-2.5q-7.2-1.5-10.25-4.85a12.22,12.22,0,0,1-.65-15.35,16.9,16.9,0,0,1,6.65-5.15,23.65,23.65,0,0,1,10-2q7.5,0,12.4,3a15.94,15.94,0,0,1,6.9,8.85l-4.2,2.7a12.42,12.42,0,0,0-5.55-7.7,18.4,18.4,0,0,0-9.55-2.4,19.92,19.92,0,0,0-7.35,1.25,11.68,11.68,0,0,0-4.9,3.4,7.59,7.59,0,0,0-1.75,5,7.88,7.88,0,0,0,2,5.25q2,2.36,7.1,3.45l12,2.6q7.09,1.5,9.9,4.55a10.77,10.77,0,0,1,2.8,7.55,12.9,12.9,0,0,1-2.4,7.8,15,15,0,0,1-6.8,5A27.74,27.74,0,0,1,866.78,579Z" transform="translate(-797.91 -499.57)"/>
          <path class="cls-sv-2" d="M933.28,528h5.3l-20.9,50h-5l-20.9-50h5.6l17.9,44.8Z" transform="translate(-797.91 -499.57)"/>
        </g>
        <g id="svsmbr">
          <g id="leftsmbr">
            <path class="cls-sv-1" d="M32.85,11a74.13,74.13,0,0,0-13.2,42.4" transform="translate(0 -0.01)"/>
          </g>
          <g id="rightsmbr">
            <path class="cls-sv-3" d="M154.18,95.85a74.13,74.13,0,0,0,13.2-42.4" transform="translate(0 -0.01)"/>
          </g>
        </g>
      </svg>
    `;
    
    const brackets = logo.querySelector('#svbr');
    const smackets = logo.querySelector('#svsmbr');

    logo.addEventListener('mouseenter', async () => {
      if (brackets instanceof SVGElement && smackets instanceof SVGElement) {
        await rotate(brackets, 360, { duration: 800 });
        await rotate(smackets, 360, { duration: 700 });
        logo.addEventListener('mouseleave', () => {
          rotate(brackets, 0, { duration: 400 });
          rotate(smackets, 0, { duration: 350 });
        });
      } else {
        console.error('element not found: #svbr OR #svsmbr')
      }
    });

    return logo;
  }

  function createSchool() {
    const school = document.createElement('section');
    school.className = 'header-buttons';
    school.innerHTML = `
      <button class='header-button first'>search</button>
      <button class='header-button'>agenda</button>
      <button class='header-button last'>contact</button>
    `;

    return school;
  }

  function createThemeBtn() {
    const themeBtn = document.createElement('section');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = `
      <label for='themeCheckbox'>
        <div class='themeInsides'>
          <svg id="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213 213">
            <defs>
              <style>
                .cls-strk{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:5px;}
              </style>
            </defs>
            <path class="cls-strk" d="M150,46a105.2,105.2,0,0,0-12.62.76,71.5,71.5,0,1,1-90.62,90.62A105.2,105.2,0,0,0,46,150,104,104,0,1,0,150,46Z" transform="translate(-43.5 -43.5)"/>
            <path class="cls-strk" d="M150,46a105.2,105.2,0,0,0-12.62.76,71.5,71.5,0,1,1-90.62,90.62A105.2,105.2,0,0,0,46,150,104,104,0,1,0,150,46Z" transform="translate(-43.5 -43.5)"/>
          </svg>
        </div>
        <div class='themeInsides'>
          <svg id="sun" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212">
            <defs>
              <style>
                .cls-sun-strk{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:5px;}
                .cls-sun-fill{fill:#000;}
              </style>
            </defs>
            <circle class="cls-sun-strk" cx="105.5" cy="106" r="53.5"/>
            <rect class="cls-sun-fill" x="103.5" width="5" height="40"/><rect class="cls-sun-fill" x="103.5" y="172" width="5" height="40"/>
            <rect class="cls-sun-fill" x="208.81" y="69.19" width="5" height="40" transform="translate(80.46 -167.3) rotate(45)"/>
            <rect class="cls-sun-fill" x="87.19" y="190.81" width="5" height="40" transform="translate(130.84 -45.67) rotate(45)"/>
            <rect class="cls-sun-fill" x="87.19" y="69.19" width="5" height="40" transform="translate(-81.3 45.54) rotate(-45)"/>
            <rect class="cls-sun-fill" x="208.81" y="190.81" width="5" height="40" transform="translate(-131.67 167.16) rotate(-45)"/>
            <rect class="cls-sun-fill" x="62" y="130" width="5" height="40" transform="translate(-130 170.5) rotate(-90)"/>
            <rect class="cls-sun-fill" x="234" y="130" width="5" height="40" transform="translate(42 342.5) rotate(-90)"/>
          </svg>
        </div>
      </label>
      <input type='checkbox' id='themeCheckbox' name='theme' value='dark' hidden />
    `;

    const label = themeBtn.querySelector('label');
    if (label) {
      label.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }

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
        document.querySelector('.header-buttons')?.classList.toggle('scrolled', !atTop);
        document.querySelectorAll('.header-button')?.forEach(button =>
          button.classList.toggle('scrolled', !atTop)
        );
        ticking = false;
      });
      ticking = true;
    }
  });
  
  let themeBtnAngle = 0;
  const labels = headerThemeBtn.querySelectorAll<HTMLInputElement>('.themeInsides');

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) {
    themeBtnAngle -= 180;
    rotate(headerThemeBtn, themeBtnAngle, {
      duration: 600,
      easing: 'ease-out'
    });
  }

  if (labels) {
    labels.forEach((label) => {
      label.addEventListener('click', async () => {
        tiltControl.holdOn = true;
        themeBtnAngle -= 180;
        await rotate(headerThemeBtn, themeBtnAngle, {
          duration: 600,
          easing: 'ease-out'
        }).finally(() => {
          tiltControl.holdOn = false;
        });
      });
    });
  }

  const checkbox = headerThemeBtn.querySelector<HTMLInputElement>('input[type="checkbox"]');

  if (checkbox) {
    labels.forEach((label) => {
      label.addEventListener('click', () => {
        requestAnimationFrame(() => {
          document.querySelector('.please')?.classList.remove('no-transition');
          
          if (checkbox.checked) {
            document.documentElement.classList.add('light-mode');
            document.documentElement.classList.remove('dark-mode');
          } else {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
          }
        });
      });

      if (prefersLight) {
        label.click();
      }
    });
  }

  return header;
}