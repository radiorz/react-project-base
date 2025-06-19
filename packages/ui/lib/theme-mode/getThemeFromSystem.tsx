import { ThemeMode } from './theme-mode.interface';

export function getThemeFromSystem() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeMode.dark
    : ThemeMode.light;
}
