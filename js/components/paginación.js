import { getAllCapsulesId, getAllInfoCapsules } from "../modules/capsulesinfo.js";
import { getCompanyinfo } from "../modules/companyinfo.js";
import { getAllCoresId, getAllInfoCores } from "../modules/coresinfo.js";
import { getAllCrewId, getAllInfoCrew } from "../modules/crewinfo.js";
import { getAllDragonsId, getAllInfoDragons } from "../modules/dragonsinfo.js";
import { getAllHistoryId, getHistoryInfo } from "../modules/historyinfo.js";
import { getAllInfoLandpad, getAllLandpadId } from "../modules/landpadsinfo.js";
import { getAllInfoLaunches, getAllLaunchesId } from "../modules/launchesinfo.js";
import { getAllInfoLaunchpads, getAllLaunchpadsId } from "../modules/launchpadsinfo.js";
import { getAllInfoPayloads, getAllPayloadsId } from "../modules/payloadsinfo.js";
import { getAllInfoRoadster } from "../modules/roadsterinfo.js";
import { getAllRocketsId, getMeasuresRocket, getRocketEngines, getRocketImages, getRocketInfoTable1, getRocketMoreInfoById, getRocketNameById, getRocketsStage, getThrustRocket } from "../modules/rocketsInfo.js";
import { getAllInfoShips, getAllShipId } from "../modules/shipsinfo.js";
import { getAllInformationStarlink, getAllStarlinksId } from "../modules/starlinksinfo.js";
import { AllinfoCapsules } from "./capsules.js";
import { companyInfo } from "./company.js";
import { AllinfoCores } from "./cores.js";
import { AllinfoCrew } from "./crew.js";
import { dragonsInfo } from "./dragons.js";
import { historyAllInfo } from "./history.js";
import { AllInfoLandpads } from "./landpads.js";
import { AllInfoLaunches } from "./launches.js";
import { AllInfoLanchpads } from "./launchpads.js";
import { AllInfoPayloads } from "./payloads.js";
import { AllInfoRoadster } from "./roadster.js";
import { RocketsStages, moreInfoRocket, nameRocket, imagesRockets, thrustRocket, measuresRocket, clearContainer } from "./rockets.js";
import { AllInfoShips } from "./ships.js";
import { AllStarlinkInfo } from "./starlink.js";

let currentPage = 0;
const itemsPerPage = 5;

const renderPagination = (totalItems, type) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationElement = document.querySelector("#paginacion");
    paginationElement.innerHTML = '';

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end && i < totalItems; i++) {
        const page = document.createElement('a');
        page.href = "#";
        page.textContent = i + 1;
        page.dataset.id = i;
        page.dataset.type = type; 
        paginationElement.appendChild(page);
    }

    const prevButton = document.createElement('button');
    const img1 = document.createElement('img');
    img1.setAttribute('class', 'left');
    img1.setAttribute('src', './storage/img/left.png');
    prevButton.appendChild(img1);
    prevButton.disabled = currentPage === 0;
    prevButton.onclick = () => {
        if (currentPage > 0) {
            currentPage--;
            if (type === 'rockets') {
                paginationRockets();
            } else if (type === 'capsules') {
                paginationCapsules();
            }
            else if ( type === 'crew') {
                paginationCrew();
            }
            else if ( type === 'launches') {
                paginationLaunches();
            }
            else if ( type === 'cores') {
                paginationCores();
            }
            else if ( type === 'landpads') {
                paginationLandpads();
            }
            else if ( type === 'ships') {
                paginationShips();
            }
            else if ( type === 'company') {
                paginationCompany();
            }
            else if ( type === 'dragons') {
                paginationDragons();
            }
            else if ( type === 'history') {
                paginationHistory();
            }
            else if ( type === 'lanchpad') {
                paginationLaunchpad();
            }
            else if ( type === 'payloads') {
                paginationPayloads();
            }
            else if ( type === 'roadster') {
                paginationRoadster();
            }
            else if ( type === 'starlink') {
                paginationStarlink();
            }
        }
    };

    const nextButton = document.createElement('button');
    const img2 = document.createElement('img');
    img2.setAttribute('class', 'right');
    img2.setAttribute('src', './storage/img/right.png');
    nextButton.appendChild(img2);
    nextButton.disabled = currentPage >= totalPages - 1;
    nextButton.onclick = () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            if (type === 'rockets') {
                paginationRockets();
            } else if (type === 'capsules') {
                paginationCapsules();
            }
            else if ( type === 'crew') {
                paginationCrew();
            }
            else if ( type === 'launches') {
                paginationLaunches();
            }
            else if ( type === 'cores') {
                paginationCores();
            }
            else if ( type === 'landpads') {
                paginationLandpads();
            }
            else if ( type === 'ships') {
                paginationShips();
            }
            else if ( type === 'company') {
                paginationCompany();
            }
            else if ( type === 'dragons') {
                paginationDragons();
            }
            else if ( type === 'history') {
                paginationHistory();
            }
            else if ( type === 'lanchpad') {
                paginationLaunchpad();
            }
            else if ( type === 'payloads') {
                paginationPayloads();
            }
            else if ( type === 'roadster') {
                paginationRoadster();
            }
            else if ( type === 'starlink') {
                paginationStarlink();
            }
        }
    };

    paginationElement.insertBefore(prevButton, paginationElement.firstChild);
    paginationElement.appendChild(nextButton);
};

// Rockets
export const paginationRockets = async () => {
    currentPage = 0;
    const rockets = await getAllRocketsId();
    renderPagination(rockets.length, 'rockets'); 

    const paginationElement = document.querySelector("#paginacion");
    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'rockets') {
                await loadRocket(rockets[id].id);
            }
        }
    });

    if (rockets.length > 0) {
        await loadRocket(rockets[0].id);
    }
}

const loadRocket = async (id) => {

    clearContainer(".section__information__1");
    clearContainer(".information__table__1");
    clearContainer(".information__table__2");
    clearContainer(".section__image");

    const rocketName = await getRocketNameById(id);
    const rocketMoreInfo = await getRocketMoreInfoById(id);
    const infotable1 = await getRocketInfoTable1(id);
    const enginestable = await getRocketEngines(id);
    const stages = await getRocketsStage(id);
    const images = await getRocketImages(id);
    const thrust = await getThrustRocket(id);
    const measures = await getMeasuresRocket(id);

    await nameRocket(rocketName);
    await moreInfoRocket(rocketMoreInfo);
    await RocketsStages(stages, infotable1, enginestable);
    await imagesRockets(images);
    await thrustRocket(thrust);
    await measuresRocket(measures);
}

// Capsules
export const paginationCapsules = async () => {
    const capsules = await getAllCapsulesId();
    renderPagination(capsules.length, 'capsules'); 

    const paginationElement = document.querySelector("#paginacion");
    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'capsules') {
                await loadCapsule(capsules[id].id);
            }
        }
    });

    if (capsules.length > 0) {
        await loadCapsule(capsules[0].id);
    }
}

const loadCapsule = async (id) => {

    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    const capsuleInfo = await getAllInfoCapsules(id);

    await AllinfoCapsules(capsuleInfo);
}

// Crews
export const paginationCrew = async () => {
    const crew = await getAllCrewId();
    renderPagination(crew.length, 'crew');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'crew') {
                await loadCrew(crew[id].id);
            }
        }
    });

    if (crew.length > 0) {
        await loadCrew(crew[0].id); 
    }
}

const loadCrew = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let crewInfo = await getAllInfoCrew(id);

    await AllinfoCrew(crewInfo);
}

// Launches
export const paginationLaunches = async () => {
    const launches = await getAllLaunchesId();
    renderPagination(launches.length, 'launches');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'launches') {
                await loadLaunch(launches[id].id);
            }
        }
    });

    if (launches.length > 0) {
        await loadLaunch(launches[0].id); 
    }
}

const loadLaunch = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let launchesInfo = await getAllInfoLaunches(id);

    await AllInfoLaunches(launchesInfo);
}

// Cores 
export const paginationCores = async () => {
    const cores = await getAllCoresId();
    renderPagination(cores.length, 'cores');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'cores') {
                await loadCore(cores[id].id);
            }
        }
    });

    if (cores.length > 0) {
        await loadCore(cores[0].id); 
    }
}

const loadCore = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let coreInfo = await getAllInfoCores(id);

    await AllinfoCores(coreInfo);
}

// Landpads
export const paginationLandpads = async () => {
    const landpads = await getAllLandpadId();
    renderPagination(landpads.length, 'landpads');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'landpads') {
                await loadLandpad(landpads[id].id);
            }
        }
    });

    if (landpads.length > 0) {
        await loadLandpad(landpads[0].id); 
    }
}

const loadLandpad = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let landpadInfo = await getAllInfoLandpad(id);

    await AllInfoLandpads(landpadInfo);
}

// Ships
export const paginationShips = async () => {
    const ships = await getAllShipId();
    renderPagination(ships.length, 'ships');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'ships') {
                await loadShip(ships[id].id);
            }
        }
    });

    if (ships.length > 0) {
        await loadShip(ships[0].id); 
    }
}

const loadShip = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let shipInfo = await getAllInfoShips(id);

    await AllInfoShips(shipInfo);
}

// Company
export const paginationCompany = async () => {
    const company = await getCompanyinfo();
    await loadCompany(company); 
}

const loadCompany = async (company) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    await companyInfo(company);
}

// Dragons 
export const paginationDragons = async () => {
    const dragons = await getAllDragonsId();
    renderPagination(dragons.length, 'dragons');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'dragons') {
                await loadDragon(dragons[id].id);
            }
        }
    });

    if (dragons.length > 0) {
        await loadDragon(dragons[0].id); 
    }
}

const loadDragon = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let dragonInfo = await getAllInfoDragons(id);

    await dragonsInfo(dragonInfo);
}

// History
export const paginationHistory = async () => {
    const history = await getAllHistoryId();
    renderPagination(history.length, 'history');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'history') {
                await loadHistory(history[id].id);
            }
        }
    });

    if (history.length > 0) {
        await loadHistory(history[0].id); 
    }
}

const loadHistory = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let historyInfo = await getHistoryInfo(id);

    await historyAllInfo(historyInfo);
}

// Lanchpad
export const paginationLaunchpad = async () => {
    const lanchpad = await getAllLaunchpadsId();
    renderPagination(lanchpad.length, 'lanchpad');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'lanchpad') {
                await loadLanchpad(lanchpad[id].id);
            }
        }
    });

    if (lanchpad.length > 0) {
        await loadLanchpad(lanchpad[0].id); 
    }
}

const loadLanchpad = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let lanchpadInfo = await getAllInfoLaunchpads(id);

    await AllInfoLanchpads(lanchpadInfo);
}

// Payloads
export const paginationPayloads = async () => {
    const payloads = await getAllPayloadsId();
    renderPagination(payloads.length, 'payloads');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type; 
            if (id && type === 'payloads') {
                await loadPayload(payloads[id].id);
            }
        }
    });

    if (payloads.length > 0) {
        await loadPayload(payloads[0].id); 
    }
}

const loadPayload = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let payloadInfo = await getAllInfoPayloads(id);

    await AllInfoPayloads(payloadInfo);
}

// Roadster
export const paginationRoadster = async () => {
    const roadster = await getAllInfoRoadster();
    await loadRoadster(roadster); 
}

const loadRoadster = async (roadsterinfo) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    await AllInfoRoadster(roadsterinfo);
}

// Starlinks 
export const paginationStarlink = async () => {
    const starlinks = await getAllStarlinksId();
    renderPagination(starlinks.length, 'starlinks');

    const paginationElement = document.querySelector("#paginacion");

    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const id = e.target.dataset.id;
            if (id) {
                await loadStarlink(starlinks[id]);
            }
        }
    });

    if (starlinks.length > 0) {
        await loadStarlink(starlinks[0]);
    }
}

const loadStarlink = async (id) => {
    clearContainer("#header__title");
    clearContainer(".section__information__1");
    clearContainer(".section__information__2");
    clearContainer(".section__information__3");
    clearContainer(".section__image");

    let starlinkInfo = await getAllInformationStarlink(id);

    await AllStarlinkInfo(starlinkInfo);
}