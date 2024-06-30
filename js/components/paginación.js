import { getAllCapsulesId, getAllInfoCapsules } from "../modules/capsulesinfo.js";
import { getAllRocketsId, getMeasuresRocket, getRocketEngines, getRocketImages, getRocketInfoTable1, getRocketMoreInfoById, getRocketNameById, getRocketsStage, getThrustRocket } from "../modules/rocketsInfo.js";
import { RocketsStages, moreInfoRocket, nameRocket, imagesRockets, thrustRocket, measuresRocket, clearContainer } from "./rockets.js";

let currentPage = 0;
const itemsPerPage = 4;

const renderPagination = (totalItems) => {
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
            renderPagination(totalItems);
        }
    };

    const nextButton = document.createElement('button');
    const img2 = document.createElement('img');
    img2.setAttribute('class', 'right'); // 
    img2.setAttribute('src', './storage/img/right.png');
    nextButton.appendChild(img2); 
    nextButton.disabled = currentPage >= totalPages - 1;
    nextButton.onclick = () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderPagination(totalItems);
        }
    };

    paginationElement.insertBefore(prevButton, paginationElement.firstChild);
    paginationElement.appendChild(nextButton);
};

// Rockets
export const paginationRockets = async () => {
    try {
        const rockets = await getAllRocketsId();
        renderPagination(rockets.length);

        const paginationElement = document.querySelector("#paginacion");
        paginationElement.addEventListener("click", async (e) => {
            e.preventDefault();
            if (e.target.tagName === 'A') {
                const id = e.target.dataset.id;
                if (id) {
                    await loadRocket(rockets[id].id);
                }
            }
        });

        if (rockets.length > 0) {
            await loadRocket(rockets[0].id);
        }
    } catch (error) {
        console.error("Error fetching rockets:", error);
        return "<p>Error loading rockets</p>";
    }
}

const loadRocket = async (id) => {
    try {
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
    } catch (error) {
        console.error("Error loading rocket data:", error);
    }
}

// Capsules
export const paginationCapsules = async () => {
    try {
        const capsules = await getAllCapsulesId();
        renderPagination(capsules.length);

        const paginationElement = document.querySelector("#paginacion");
        paginationElement.addEventListener("click", async (e) => {
            e.preventDefault();
            if (e.target.tagName === 'A') {
                const id = e.target.dataset.id;
                if (id) {
                    await loadCapsule(capsules[id].id);
                }
            }
        });

        if (capsules.length > 0) {
            await loadCapsule(capsules[0].id);
        }
    } catch (error) {
        console.error("Error fetching capsules:", error);
        return "<p>Error loading capsules</p>";
    }
}

const loadCapsule = async (id) => {
    try {
        const capsuleInfo = await getAllInfoCapsules(id);
        clearContainer(".section__information__1");  
        await AllinfoCapsules(capsuleInfo);
    } catch (error) {
        console.error("Error loading capsule data:", error);
    }
}
