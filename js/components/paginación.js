import { 
    getAllCapsulesId, getAllInfoCapsules } from "../modules/capsulesinfo.js";

import { getAllRocketsId,  
    getMeasuresRocket,  
    getRocketEngines,
    getRocketImages,
    getRocketInfoTable1, 
    getRocketMoreInfoById,
     getRocketNameById, 
     getRocketsStage,
     getThrustRocket} from "../modules/rocketsInfo.js";
import { AllinfoCapsules } from "./capsules.js";

import { enginesRockets, 
    RocketsStages, 
    moreInfoRocket, 
    nameRocket, 
    payloadsRockets, 
    imagesRockets,
    thrustRocket,
    measuresRocket} from "./rockets.js";

    // Rockets
export const paginationRockets = async () => {
    const rockets = await getAllRocketsId();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const setupPaginationRockets = () => {
    const paginationElement = document.querySelector("#paginacion");
    paginationElement.addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        await loadRocket(id);
    });

    const firstRocketId = paginationElement.querySelector('a').dataset.id;
    loadRocket(firstRocketId);
}

const loadRocket = async(id) => {
    const rocketName = await getRocketNameById(id)
    const rocketMoreInfo = await getRocketMoreInfoById(id);
    const infotable1 = await getRocketInfoTable1(id);
    const enginestable = await getRocketEngines(id);
    const Stages = await getRocketsStage(id);
    const images = await getRocketImages(id);
    const thrust = await getThrustRocket(id);
    const measures = await getMeasuresRocket(id);

    await nameRocket(rocketName);
    await moreInfoRocket(rocketMoreInfo);
    await payloadsRockets(infotable1);
    await enginesRockets(enginestable);
    await RocketsStages(Stages);
    await imagesRockets(images);
    await thrustRocket(thrust);
    await measuresRocket(measures);
}

    // Capsules
export const paginationCapsules = async () => {
    const capsules = await getAllCapsulesId();
    const html = capsules.map((capsules, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${capsules.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const setUpPaginationCapsules = async() => {
    document.querySelector("#paginacion").addEventListener("click", async e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        await loadCapsule(id);
    });

    const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
    loadCapsule(firstCapsuleId);
}

const loadCapsule = async(id) => {

    const capsuleInfo = await getAllInfoCapsules(id);

    await AllinfoCapsules(capsuleInfo);

}