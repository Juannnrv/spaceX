import { getRocketNameById } from "../modules/rocketsInfo.js";


export const AllInfoLaunches = async (launchesInfo) => {
    console.log(launchesInfo);
    
    document.querySelector("#header__title").innerHTML = /*html*/ `${launchesInfo.name}`;
    

    await getRocketNameById(launchesInfo.rocket) // Traer el nombre del rocket

    let launch = "";
    if (launchesInfo.success === true) {
        launch = "Deployed";
    }
    else {
        launch = "Failed";
    }

    document.querySelector(".description__item").innerHTML = /*html*/ `
    <div class="launch_left">
        <div class="Launches_data">
            <h4>LAUNCH DATA</h4>
            <hr>
            <div class="data__item_crew">
                <img src="./storage/img/id.png">
                <div class="data__item__text_crew">
                    <p>ID</p>
                    <span>${launchesInfo.id}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/date.png">
                <div class="data__item__text_crew">
                    <p>Date</p>
                    <span>${launchesInfo.date_utc}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/cohete.png">
                <div class="data__item__text_crew">
                    <p>Rocket</p>
                    <span>${await getRocketNameById(launchesInfo.rocket)}</span>
                </div>
            </div>
        </div>
        <div class="launches_info">
            <div class="launches_info_item">
                <p>Flight number</p>
                <span>${launchesInfo.flight_number}</span>
            </div>
            <div class="launches_info_item">
                <p>Sucess</p>
                <span>${launch}</span>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".section__image").innerHTML = /*html*/ `
        <div class="Launches_data">
            <h4>MORE INFORMATION</h4>
            <hr>
            <div class="data__item_crew">
                <div class="data__item__text_crew">
                    <a href="${launchesInfo.links.wikipedia}" ><p>Search here</p> Wikipedia</a>
                </div>
            </div>
            <div class="data__item_crew">
                <div class="data__item__text_crew">
                    <a href="${launchesInfo.links.article}" ><p>Read here</p> Article</a>
                </div>
            </div>
            <div class="data__item_crew">
                <div class="data__item__text_crew">
                    <p>Youtube</p>
                    <span>${launchesInfo.links.youtube_id}</span>
                </div>
            </div>
        </div>
    `;

    let payloadNames = launchesInfo.payloads.map(payloadId => /*html*/`<span>${payloadId}</span>`).join("");

    let details = "";
    if (launchesInfo.details == null) {
        details = "Confidential Information";
    }
    else {
        details = launchesInfo.details;
    }

    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="launch_right">
        <div class="Launches_data">
            <div class="data__item_crew">
                <img src="./storage/img/crew.png">
                <div class="data__item__text_crew">
                    <p>Crew</p>
                    <span>there was no crew on this launch</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/launchpad.png">
                <div class="data__item__text_crew">
                    <p>Launchpad</p>
                    <span>${launchesInfo.launchpad}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/payload.png">
                <div class="data__item__text_crew">
                    <p>Payloads</p>
                    <div class="launch_payloads">
                        ${payloadNames}
                    </div>
                </div>
            </div>
        </div>
        <div class="Launches_detail">
            <h4>DETAILS</h4>
            <p>${details}</p>
        </div>
    </div>
    `;
}