import { paginationCapsules, paginationCompany, paginationCores, paginationCrew, paginationDragons, paginationHistory, paginationLandpads, paginationLaunches, paginationLaunchpad, paginationPayloads, paginationRockets, paginationShips } from "./components/paginación.js";
import { clearInformation } from "./components/clear.js";

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rocket");
    const capsulesElement = document.querySelector("#capsules");
    const crewElement = document.querySelector("#crew");
    const launchesElement = document.querySelector("#launches");
    const coresElement = document.querySelector("#cores");
    const landpadsElement = document.querySelector("#landspads");
    const shipsElement = document.querySelector("#ships");
    const companyElement = document.querySelector("#company");
    const dragonElement = document.querySelector("#dragos");
    const historyElement = document.querySelector("#history");
    const launchpadsElement = document.querySelector("#launchpads");
    const payloadElement = document.querySelector("#payloads");

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);
    crewElement.addEventListener("click", handleCrewClick);
    launchesElement.addEventListener("click", handleLaunchesClick);
    coresElement.addEventListener("click", handleCoresClick);
    landpadsElement.addEventListener("click", handleLandpadsClick);
    shipsElement.addEventListener("click", handleShipsClick);
    companyElement.addEventListener("click", handleCompanyClick);
    dragonElement.addEventListener("click", handleDragonClick);
    historyElement.addEventListener("click", handleHistoryClick);
    launchpadsElement.addEventListener("click", handleLaunchpadsClick);
    payloadElement.addEventListener("click", handlePayloadsClick);

    document.querySelectorAll('#buttons li a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('#buttons li a').forEach(el => {
                el.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });

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

const handleShipsClick = async () => {
    clearInformation();
    await paginationShips();
}

const handleCompanyClick = async () => {
    clearInformation();
    await paginationCompany();
}

const handleDragonClick = async () => {
    clearInformation();
    await paginationDragons();
}

const handleHistoryClick = async () => {
    clearInformation();
    await paginationHistory();
}

const handleLaunchpadsClick = async () => {
    clearInformation();
    await paginationLaunchpad();
}

const handlePayloadsClick = async () => {
    clearInformation();
    await paginationPayloads();
}