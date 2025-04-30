/**
 * 
 * 向上查找所有祖先元素，直到找到符合条件的元素
 * 
 * @example
 * 
 * ```tsx
 * findUpElement(ele,(ele)=>ele.classList.contains('voerka-layout'))
 * ```
 * 
 * 
 * 
 * @param ele 
 * @param predicate 
 * @returns 
 */
export function findUpElement(
    ele: HTMLElement,
    predicate: (element: HTMLElement) => boolean
  ): HTMLElement | null {
    let current = ele.parentElement;
  
    while (current !== null) {
      if (predicate(current)) {
        return current;
      }
  
      current = current.parentElement;
    }
  
    return null;
  }