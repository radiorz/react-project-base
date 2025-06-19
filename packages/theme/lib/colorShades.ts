import { hexToHsl } from './hexToHsl';
import { hslToHex } from './hslToHex';

export function colorShades(
  color: string,
  amount: number,
  pug?: number
): Array<string> {
  pug = pug || 60;
  const hsl = hexToHsl(color);
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];
  const shades: any = [];
  for (
    let i = amount - Math.floor(amount / 2) - (amount % 2 !== 0 ? 1 : 0);
    i > 0;
    i--
  ) {
    const newS = s + -1 * i * (pug / amount);
    const newL = l + -1 * i * (pug / 1.3 / amount);
    const newHsl = [h, newS, newL];
    shades.push(hslToHex(...newHsl));
  }
  shades.push(color);
  for (let i = 0; i < amount / 2 - 1; i++) {
    const newS = s + i * (pug / amount);
    const newL = l + (i + 1) * ((pug * 1.3) / amount);
    const newHsl = [h, newS > 100 ? 100 : newS, newL];
    shades.push(hslToHex(...newHsl));
  }
  return reverse(shades);
}

function reverse(arr: any[]) {
  return arr.slice().reverse();
}