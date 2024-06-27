import { paginationRockets, setupPagination } from "./components/paginación.js";

document.addEventListener("DOMContentLoaded", async () => {
    // document.querySelector("#rocket").addEventListener("click", async e => {
        
        document.querySelector("#paginacion").innerHTML = await paginationRockets();    
    // })
    
    setupPagination();
});
