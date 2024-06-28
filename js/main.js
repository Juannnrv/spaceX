import { paginationCapsules, paginationRockets, setUpPaginationCapsules, setupPaginationRockets } from "./components/paginación.js";

document.addEventListener("DOMContentLoaded", async () => {

    document.querySelector("#paginacion").innerHTML = await paginationRockets();

    document.querySelector("#rocket").addEventListener("click", async e => {
        document.querySelector("#paginacion").innerHTML = await paginationRockets();    
    })

    document.querySelector("#capsules").addEventListener("click", async e => {
        document.querySelector("#header__title").innerHTML = "";
        document.querySelector("#description__item").innerHTML = "";
        document.querySelector(".section__information__1").innerHTML = "";
        document.querySelector(".information__table__1").innerHTML = "";
        document.querySelector("#first_stage").innerHTML = "";
        document.querySelector("#second-stage").innerHTML = "";
        document.querySelector(".information__table__2").innerHTML = "";
        document.querySelector(".section__image").innerHTML = "";
        document.querySelector(".information__item").innerHTML = "";


        document.querySelector("#paginacion").innerHTML = await paginationCapsules();    
    })
    
    setupPaginationRockets();
    setUpPaginationCapsules();
});