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
      <svg id="svlayer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.05 106.86"><defs><style>.cls-1,.cls-2{fill:none;}.cls-1{stroke:#000;stroke-miterlimit:10;stroke-width:5px;}</style></defs><g id="svbr"><path id="rightbr" class="cls-1" d="M168.09,105.43a91,91,0,0,0,.28-104" transform="translate(0 -0.01)"/><path id="leftbr" class="cls-1" d="M18.69,1.43a91,91,0,0,0,.27,104" transform="translate(0 -0.01)"/></g><g id="svlt"><path d="M68.87,79.43a28.31,28.31,0,0,1-13.45-3.1,17.38,17.38,0,0,1-8.25-8.9l4.3-2.9a14.49,14.49,0,0,0,6.45,7.75A22.06,22.06,0,0,0,69.27,75q6.6,0,10.35-2.6a8,8,0,0,0,3.75-6.9,7.51,7.51,0,0,0-1.85-5.05c-1.24-1.43-3.55-2.52-7-3.25l-11.7-2.5q-7.2-1.5-10.25-4.85A12.22,12.22,0,0,1,52,34.53a16.89,16.89,0,0,1,6.65-5.15,23.57,23.57,0,0,1,10-2q7.5,0,12.4,3a15.93,15.93,0,0,1,6.9,8.85l-4.2,2.7a12.41,12.41,0,0,0-5.55-7.7,18.47,18.47,0,0,0-9.55-2.4,19.81,19.81,0,0,0-7.35,1.25,11.65,11.65,0,0,0-4.9,3.4,7.6,7.6,0,0,0-1.75,5,7.86,7.86,0,0,0,2,5.25q2,2.35,7.1,3.45l12,2.6q7.09,1.5,9.9,4.55a10.79,10.79,0,0,1,2.8,7.55,12.89,12.89,0,0,1-2.4,7.8,15,15,0,0,1-6.8,5A27.7,27.7,0,0,1,68.87,79.43Z" transform="translate(0 -0.01)"/><path d="M135.37,28.43h5.3l-20.9,50h-5l-20.9-50h5.6l17.9,44.8Z" transform="translate(0 -0.01)"/></g><g id="svsmbr"><g id="leftsmbr"><path class="cls-1" d="M32.85,11a74.13,74.13,0,0,0-13.2,42.4" transform="translate(0 -0.01)"/></g><g id="rightsmbr"><path class="cls-2" d="M154.18,95.85a74.13,74.13,0,0,0,13.2-42.4" transform="translate(0 -0.01)"/></g></g></svg>
    `;
    
    const brackets = logo.querySelector('#svbr');
    const smackets = logo.querySelectorAll('#svsmbr');

    logo.addEventListener('mouseover', async () => {
      if (brackets instanceof SVGElement) {
        await rotate(brackets, 360, { duration: 800 });
        logo.addEventListener('mouseout', () => rotate(brackets, 0, { duration: 400 }));
      } else {
        console.error('element not found: #svbr')
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

  if (labels) {
    labels.forEach((label) => {
      label.addEventListener('click', async () => {
        tiltControl.holdOn = true;
        console.log(tiltControl);
        themeBtnAngle -= 180;
        await rotate(headerThemeBtn, themeBtnAngle, {
          duration: 600,
          easing: 'ease-out'
        }).finally(() => {
          tiltControl.holdOn = false;
          console.log(tiltControl);
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
    });
  }

  return header;
}