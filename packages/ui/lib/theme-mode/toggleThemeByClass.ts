import { getThemeFromSystem } from './getThemeFromSystem';
import { ThemeMode } from './theme-mode.interface';

export function toggleThemeByClass(theme: ThemeMode = getThemeFromSystem()) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const isDark = theme === ThemeMode.dark;
  document.documentElement.classList.toggle('dark', isDark);
}
