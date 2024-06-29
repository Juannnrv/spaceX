import { paginationCapsules, paginationRockets, setUpPaginationCapsules, setupPaginationRockets } from "./components/paginación.js";
import { clearInformation } from "./components/clear.js"; 

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    const capsulesElement = document.querySelector("#capsules");

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);

    await handleRocketClick();
});

const handleRocketClick = async () => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await paginationRockets();
    setupPaginationRockets();
}

const handleCapsulesClick = async () => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await paginationCapsules();
    setUpPaginationCapsules();
}
