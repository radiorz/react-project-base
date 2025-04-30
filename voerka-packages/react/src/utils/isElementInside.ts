/**
 * 判断一个元素是否位于另一个元素内部。
 *
 * @param child - 要检查的子元素。
 * @param container - 要检查的容器元素。
 * @returns 如果子元素在父元素内部，则返回 `true`；否则返回 `false`。
 */
export function isElementInside(element: Element,container: Element): boolean {
  let ele:Element  = element
  while(ele){
      ele = ele.parentElement  as Element
      if(!ele) break
      if(ele == container){
          return true
      }
  }   
  return false
 } 
