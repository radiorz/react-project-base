export function getMaxHeight(el: HTMLElement, footerHeight = 0): number {
  const rect = el?.getBoundingClientRect?.();
  return window.innerHeight - (rect?.top || 0) - (footerHeight || 0);
}
