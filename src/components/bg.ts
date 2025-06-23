import '..styles/bg.css';

export function createBg() {
  const bg = document.createElement('p')
  bg.className = 'bg';
  return bg;
}