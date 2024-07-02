import { getLaunchesNameById } from "../modules/launchesinfo.js";

export const AllInfoShips = async (shipInfo) => {

    document.querySelector("#header__title").innerHTML = /*html*/ `${shipInfo.name}`;

    let launchesIds = shipInfo.launches;
    let launchesNames = await getLaunchesNameById(launchesIds);
    console.log(launchesNames.map(launch => launch.name)); 

    let launches = launchesNames.map(launchName => /*html*/`<span>${launchName.name}</span> `).join('');
        
    document.querySelector(".description__item").innerHTML = /*html*/ `
    <div class="landpad_left">
        <div class="Launches_data">
            <h4>LAUNCHES</h4>
            <hr>
            <div class="data__item_crew">
                <div id="landpad_launches" class="data__item__text_crew">
                    ${launches}
                </div>
            </div>
        </div>
    </div>
    `;

    let status = "";
    let statusSrc = "";
    if (shipInfo.status === true) {
        status = "active";
        statusSrc = "./storage/img/switch-on.png";
    }else {
        status = "retired";
        statusSrc = "./storage/img/switch-off.png";
    }
    
    let massTotal = shipInfo.mass_kg + shipInfo.mass_lbs;

    let roles = shipInfo.roles.map( role => /*html*/ `<span>${role}</span>`).join("");

    document.querySelector(".section__information__2").innerHTML = /*html*/ `
    <div id="ship_numbers" class="data_capsules">
        <div class="data__item">
            <div class="data__item__text">
                <p>IMMO</p>
                <span>${shipInfo.imo}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>MMSI</p>
                <span>${shipInfo.mmsi}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>ABS</p>
                <span>${shipInfo.abs}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>CLASS</p>
                <span>${shipInfo.class}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>YEAR BUILT</p>
                <span>${shipInfo.year_built}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>Serial</p>
                <span>${massTotal}</span>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".section__image").innerHTML = /*html*/ `
    <div class="Landpad_img">
        <img src="${shipInfo.image}" referrerpolicy="no-referrer">
    </div>
    `;


    document.querySelector(".section__information__3").innerHTML = /*html*/`
    <div id="ship_info" class="landpad_info1">
        <div class="Launches_data">
            <div class="data__item_crew">
                <img src="${statusSrc}">
                <div class="data__item__text_crew">
                    <p>STATUS</p>
                    <span>${status}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <div class="data__item__text_crew">
                    <p>LEGACY ID</p>
                    <span>${shipInfo.legacy_id}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/ship.png">
                <div class="data__item__text_crew">
                    <p>ROLES</p>
                    ${roles}
                </div>
            </div>
            <div class="data__item_crew">
                <div class="data__item__text_crew">
                    <p>TYPE</p>
                    <span>${shipInfo.type}</span>
                </div>
            </div>
            <div class="data__item_crew">
            <img src="./storage/img/port.png">
                <div class="data__item__text_crew">
                    <p>HOME PORT</p>
                    <span>${shipInfo.home_port}</span>
                </div>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".information__item").innerHTML = /*html*/ `
    <div id="ship_link" class="data_capsules">
        <div class="data__item">
            <div class="data__item__text">
                <p>MORE INFORMATION</p>
                <a href="${shipInfo.link}">Go to Ship</a>
            </div>
        </div>
    </div>
        <img id="gengar2" src="./storage/img/gengar2.gif">
    `;
    

}