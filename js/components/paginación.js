import { getAllRocketsId,  
    getRocketEngines,
    getRocketInfoTable1, 
    getRocketMoreInfoById,
     getRocketNameById, 
     getRocketsStage} from "../modules/rocketsInfo.js";

import { enginesRockets, 
    RocketsStages, 
    moreInfoRocket, 
    nameRocket, 
    payloadsRockets } from "./rockets.js";

export const paginationRockets = async () => {
    const rockets = await getAllRocketsId();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}

export const setupPagination = () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        // Rockets
        const rocketName = await getRocketNameById(id)
        const rocketMoreInfo = await getRocketMoreInfoById(id);
        const infotable1 = await getRocketInfoTable1(id);
        const enginestable = await getRocketEngines(id);
        const Stages = await getRocketsStage(id);

        await nameRocket(rocketName);
        await moreInfoRocket(rocketMoreInfo);
        await payloadsRockets(infotable1);
        await enginesRockets(enginestable);
        await RocketsStages(Stages);
    });
}
