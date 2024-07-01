import { paginationCapsules, paginationCores, paginationCrew, paginationLandpads, paginationLaunches, paginationRockets } from "./components/paginación.js";
import { clearInformation } from "./components/clear.js";

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    const capsulesElement = document.querySelector("#capsules");
    const crewElement = document.querySelector("#crew");
    const launchesElement = document.querySelector("#launches");
    const coresElement = document.querySelector("#cores");
    const landpadsElement = document.querySelector("#landspads");

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);
    crewElement.addEventListener("click", handleCrewClick);
    launchesElement.addEventListener("click", handleLaunchesClick);
    coresElement.addEventListener("click", handleCoresClick);
    landpadsElement.addEventListener("click", handleLandpadsClick);

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

const handleLaunchesClick = async () => {
    clearInformation();
    await paginationLaunches();
}

const handleCoresClick = async () => {
    clearInformation();
    await paginationCores();
}

const handleLandpadsClick = async () => {
    clearInformation();
    await paginationLandpads();
}