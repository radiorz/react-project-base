import { getRandId } from "./getRandId"

export function injectStylesheet(css:string,id:string){
    if(!id) id = getRandId()
    let style = document.getElementById(id)
    if(!style){
        style = document.createElement("style")
        style.id = id
        document.head.appendChild(style)
    }
    style.innerHTML = css
}