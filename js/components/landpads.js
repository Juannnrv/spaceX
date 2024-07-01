
export const AllInfoLandpads = async (landpadInfo) => {

    document.querySelector("#header__title").innerHTML = /*html*/ `${landpadInfo.full_name}`;

    let launches = landpadInfo.launches.map( launchId => /*html*/ `
        <span>${launchId}</span>
        ` ).join("");
        console.log(launches)
        
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
    if (landpadInfo.status === "active") {
        status = "./storage/img/switch-on.png";
    }else {
        status = "./storage/img/switch-off.png";
    }

    document.querySelector(".section__information__2").innerHTML = /*html*/ `
    <div class="landpad_info1">
        <div class="Launches_data">
            <div class="data__item_crew">
                <img src="${status}">
                <div class="data__item__text_crew">
                    <p>STATUS</p>
                    <span>${landpadInfo.status}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/astronave.png">
                <div class="data__item__text_crew">
                    <p>TYPE</p>
                    <span>${landpadInfo.type}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/longitude.png">
                <div class="data__item__text_crew">
                    <p>LONGITUDE</p>
                    <span>${landpadInfo.longitude}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/world.png">
                <div class="data__item__text_crew">
                    <p>REGION</p>
                    <span>${landpadInfo.region}</span>
                </div>
            </div>
        </div>
    `;

    document.querySelector(".section__image").innerHTML = /*html*/ `
    <div class="Landpad_img">
        <img src="${landpadInfo.images.large}" referrerpolicy="no-referrer">
    </div>
    `;

    document.querySelector(".section__information__3").innerHTML = /*html*/ `
    <div class="landpad_info2">
        <div class="Launches_data">
            <div class="data__item_crew">
                <img src="./storage/img/latitude.png">
                <div class="data__item__text_crew">
                    <p>LATITUDE</p>
                    <span>${landpadInfo.latitude}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/locality.png">
                <div class="data__item__text_crew">
                    <p>LOCALITY</p>
                    <span>${landpadInfo.locality}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/cohete.png">
                <div class="data__item__text_crew">
                    <p>LANDING ATTEMPS</p>
                    <span>${landpadInfo.landing_attempts}</span>
                </div>
            </div>
            <div class="data__item_crew">
                <img src="./storage/img/succes.png">
                <div class="data__item__text_crew">
                    <p>LANDING SUCCES</p>
                    <span>${landpadInfo.landing_successes}</span>
                </div>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".information__item").innerHTML = /*html*/ `
    <div id="landpad_detail" class="Launches_detail">
        <h4>DETAILS</h4>
        <p>${landpadInfo.details}</p>
    </div>
    `;
}