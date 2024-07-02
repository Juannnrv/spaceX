import { getRocketNameById } from "../modules/rocketsInfo.js";

export const AllInfoLanchpads = async (launchpadInfo) => {

    document.querySelector("#header__title").innerHTML = /*html*/ `${launchpadInfo.full_name}`;

    document.querySelector(".description__item").innerHTML = /*html*/`
    <div id="description_launchpad" class="description_dragon">
        <h4>DETAILS</h4>
        <p>${launchpadInfo.details}</p>
        <div class="data__item_crew">
            <img src="./storage/img/astronave.png">
            <div class="data__item__text_crew">
                <h4>SHORT NAME</h4>
                <p>${launchpadInfo.name}</p>
            </div>
        </div>
    </div>
    `;

    let statusSrc;
    let status;
    if (launchpadInfo.status === "active") {
        statusSrc = "./storage/img/switch-on.png";
    } else if (launchpadInfo.status === "retired"){
        statusSrc = "./storage/img/switch-off.png";
    } else if (launchpadInfo.status === "under construction") {
        statusSrc = "./storage/img/serial.png";
    }

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div id="num_launchpad" class="description_dragon">
        <div class="data__item_crew">
            <img src=${statusSrc}>
            <div class="data__item__text_crew">
                <h4>STATUS</h4>
                <p>${launchpadInfo.status}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/cohete.png">
            <div class="data__item__text_crew">
                <h4>LAUNCH ATTEMPS</h4>
                <p>${launchpadInfo.launch_attempts}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/date.png">
            <div class="data__item__text_crew">
                <h4>TIME ZONE</h4>
                <p>${launchpadInfo.timezone}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/succes.png">
            <div class="data__item__text_crew">
                <h4>LAUNCH SUCCESSES</h4>
                <p>${launchpadInfo.launch_successes}</p>
            </div>
        </div>
    </div>
    `;

    let launches = launchpadInfo.launches.map(launchId => `<span>${launchId}</span>`).join("");
    launches = launches ? launches : "<span>No launches</span>";

    // console.log(await getRocketNameById(launchpadInfo.rockets));

    // let rockets = launchpadInfo.rockets.map( rocketId => /*html*/ `<span>${rocketId}</span>` ).join("");
    // rockets = rockets ? rockets : "No rockets";

    document.querySelector(".information__item").innerHTML = /*html*/`
    <div id="launchpad_rockets" class="data_capsules">
        <h4>ROCKETS</h4>
        <br>
        <div class="data__item">
            <div class="data__item__text">
                <span>${await getRocketNameById(launchpadInfo.rockets)}</span>
            </div>
        </div>
        <h4>LAUNCHES</h4>
        <br>
        <div class="data__item">
            <div class="data__item__text">
                ${launches}
            </div>
        </div>
        <br>

    </div>
    `;

    document.querySelector(".section__image").innerHTML = /*html*/`<div class="launchpad_img"><img src=${launchpadInfo.images.large} referrerpolicy="no-referrer"></div>`;

    document.querySelector(".section__information__3").innerHTML = /*html*/`
    <div id="launchpad_right" class="data_capsules">
        <div class="data__item">
            <img src="./storage/img/locality.png">
            <div class="data__item__text">
                <p>LOCALITY</p>
                <span>${launchpadInfo.locality}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/world.png">
            <div class="data__item__text">
                <p>REGION</p>
                <span>${launchpadInfo.region}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/latitude.png">
            <div class="data__item__text">
                <p>LATITUDE</p>
                <span>${launchpadInfo.latitude}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/longitude.png">
            <div class="data__item__text">
                <p>LONGITUDE</p>
                <span>${launchpadInfo.longitude}</span>
            </div>
        </div>
    </div>`;
}