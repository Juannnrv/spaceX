
import { getAllRocketsId } from "./modules/rocketsInfo.js";

let rocketsId = await getAllRocketsId();

console.log(rocketsId)

let id = rocketsId.map(rocket => rocket.id);
console.log(id);

let html = '';
for(let i = 0; i < id.length; i++) {
    let pag = i + 1;
    html += `<a href="#" data-id="${id[i]}" >${pag}</a>`;
}
document.querySelector("#paginacion").innerHTML = html;