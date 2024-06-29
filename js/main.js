import { paginationCapsules, paginationRockets, setUpPaginationCapsules, setupPaginationRockets } from "./components/paginación.js";

export const clearInformation = () => {
    document.querySelector("#header__title").innerHTML = "";
    document.querySelector(".description__item").innerHTML = "";
    document.querySelector(".section__information__1").innerHTML = "";
    document.querySelector(".information__table__1").innerHTML = "";
    document.querySelector("#first_stage").innerHTML = "";
    document.querySelector("#second-stage").innerHTML = "";
    document.querySelector(".information__table__2").innerHTML = "";
    document.querySelector(".section__image").innerHTML = "";
    document.querySelector(".information__item").innerHTML = "";
    document.querySelector(".information__buttom").innerHTML = "";
    document.querySelector("#paginacion").innerHTML = "";
}

const handleRocketClick = async e => {
    clearInformation(); 
    document.querySelector("#paginacion").innerHTML = await paginationRockets();
    setupPaginationRockets();
}

const handleCapsulesClick = async e => {
    clearInformation(); 
    document.querySelector("#paginacion").innerHTML = await paginationCapsules();
    setUpPaginationCapsules();
}

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    const capsulesElement = document.querySelector("#capsules");

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);

    clearInformation(); 
    document.querySelector("#paginacion").innerHTML = await paginationRockets();
    setupPaginationRockets();
});

// Cuando cambies de rockets a capsules o viceversa, elimina el controlador de eventos anterior
document.querySelector("#rocket").addEventListener("click", () => {
    document.querySelector("#capsules").removeEventListener("click", handleCapsulesClick);
});

document.querySelector("#capsules").addEventListener("click", () => {
    document.querySelector("#rocket").removeEventListener("click", handleRocketClick);
});