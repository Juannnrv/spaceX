import { paginationCapsules, paginationCrew, paginationRockets } from "./components/paginación.js";
import { clearInformation } from "./components/clear.js";

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    const capsulesElement = document.querySelector("#capsules");
    const crewElement = document.querySelector("#crew");

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);
    crewElement.addEventListener("click", handleCrewClick);

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

const handleCrewClick = async () => {
    clearInformation();
    await paginationCrew();
}