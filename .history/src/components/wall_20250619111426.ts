import '../styles/wall.css';
import { sections } from '../data/texts.ts'

export function createWall(text: Text) {
  const wall = document.createElement(`div`)
  wall.className = `wall-body`;

  wall.innerHTML = `${sections[text]}
  `;

  return wall;
}