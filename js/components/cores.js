
import { getLaunchesNameById } from "../modules/launchesinfo.js";

export const AllinfoCores = async (coreInfo) => {
    let launchesIds = coreInfo.launches;
    let launchesNames = await getLaunchesNameById(launchesIds);
    
    let launches = launchesNames.map(launchName => /*html*/`<span>${launchName.name}</span> `).join('');
    
    let launchesNombres = launches ? /*html*/ `${launches}` : /*html*/ `<span>No launches</span>`;

    document.querySelector("#header__title").textContent = `Core ${coreInfo.serial}`;

    document.querySelector(".description__item").innerHTML = /*html*/ `
    <div class="core_left">
        <div class="Astronaut_info">
            <h4>CORE DATA</h4>
            <hr>
            <div class="data__item_crew">
                <img src="./storage/img/switch-off.png">
                <div class="data__item__text_crew">
                    <p>STATUS</p>
                    <span>${coreInfo.status}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/serial.png">
                <div class="data__item__text_crew">
                    <p>SERIAL</p>
                    <span>${coreInfo.serial}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/spaceship.png">
                <div class="data__item__text_crew">
                    <p>LAUNCHES</p>
                    ${launchesNombres}
                </div>
            </div>
        </div>
    </div>    
    `;

    document.querySelector(".section__image").innerHTML = /*html*/ `
    <div class="core_image">
        <img src="./storage/img/gengar.gif">
    </div>
    `;

    let lastUpdate = "";
    if ( coreInfo.last_update === null) {
        lastUpdate = "Confidential Information";
    } else {
        lastUpdate = coreInfo.last_update;
    }

    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="core_lastUpdate">
        <div class="lastUpdate">
            <h4>LAST UPDATE</h4>
            <hr>
            <p>${lastUpdate}</p>
        </div>
    </div>
    `;
}