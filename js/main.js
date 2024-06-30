import { paginationCapsules, paginationRockets } from "./components/paginación.js";
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
    await paginationRockets(); 
}

const handleCapsulesClick = async () => {
    clearInformation();
    await paginationCapsules(); 
}
