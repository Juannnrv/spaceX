import { getAllCapsulesId, getAllInfoCapsules } from "../modules/capsulesinfo.js";
import { getAllRocketsId, getMeasuresRocket, getRocketEngines, getRocketImages, getRocketInfoTable1, getRocketMoreInfoById, getRocketNameById, getRocketsStage, getThrustRocket } from "../modules/rocketsInfo.js";
import { RocketsStages, moreInfoRocket, nameRocket, imagesRockets, thrustRocket, measuresRocket, clearContainer } from "./rockets.js";

// Rockets
export const paginationRockets = async () => {
    try {
        const rockets = await getAllRocketsId();
        const html = rockets.map((rocket, index) => {
            const pag = index + 1;
            return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
        });
        return html.join("");
    } catch (error) {
        console.error("Error fetching rockets:", error);
        return "<p>Error loading rockets</p>";
    }
}

export const setupPaginationRockets = async () => {
    try {
        const paginationElement = document.querySelector("#paginacion");
        paginationElement.addEventListener("click", async (e) => {
            e.preventDefault();
            const id = e.target.dataset.id;
            if (id) {
                await loadRocket(id);
            }
        });

        const firstRocketId = paginationElement.querySelector('a').dataset.id;
        if (firstRocketId) {
            await loadRocket(firstRocketId);
        }
    } catch (error) {
        console.error("Error setting up pagination for rockets:", error);
    }
}

const loadRocket = async (id) => {
    try {
        clearContainer(".section__information__1"); 
        clearContainer(".information__table__1");
        // clearContainer("#first_stage");
        // clearContainer("#second_stage");
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
    } catch (error) {
        console.error("Error loading rocket data:", error);
    }
}

// Capsules
export const paginationCapsules = async () => {
    try {
        const capsules = await getAllCapsulesId();
        const html = capsules.map((capsule, index) => {
            const pag = index + 1;
            return `<a href="#" data-id="${capsule.id}">${pag}</a>`;
        });
        return html.join("");
    } catch (error) {
        console.error("Error fetching capsules:", error);
        return "<p>Error loading capsules</p>";
    }
}

export const setUpPaginationCapsules = async () => {
    try {
        const paginationElement = document.querySelector("#paginacion");
        paginationElement.addEventListener("click", async (e) => {
            e.preventDefault();
            const id = e.target.dataset.id;
            if (id) {
                await loadCapsule(id);
            }
        });

        const firstCapsuleId = paginationElement.querySelector("a").dataset.id;
        if (firstCapsuleId) {
            await loadCapsule(firstCapsuleId);
        }
    } catch (error) {
        console.error("Error setting up pagination for capsules:", error);
    }
}

const loadCapsule = async (id) => {
    try {
        const capsuleInfo = await getAllInfoCapsules(id);
        clearContainer(".section__information__1");  // Limpiar contenedor antes de cargar datos nuevos
        await AllinfoCapsules(capsuleInfo);
    } catch (error) {
        console.error("Error loading capsule data:", error);
    }
}
