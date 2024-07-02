import { getLaunchesName } from "../modules/launchesinfo.js";

export const AllInfoPayloads = async (payloadinfo) => {
    
    document.querySelector(".header__title").innerHTML = /*html*/` ${payloadinfo.name} `;
    
    let launchesId = payloadinfo.launch;
    let launches =  await getLaunchesName(launchesId);

    let launchesName = launches.name ? launches.name : "No Launch";

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div id="payload_left" class="description_dragon">
        <h4>PAYLOAD DATA</h4>
        <hr>
        <br>
        <div class="data__item_crew">
            <img src="./storage/img/spaceship.png">
            <div class="data__item__text_crew">
                <h4>SATELITE</h4>
                <p>${payloadinfo.type}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/switch-off.png">
            <div class="data__item__text_crew">
                <h4>REUSED</h4>
                <p>${payloadinfo.reused}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/cohete.png">
            <div class="data__item__text_crew">
                <h4>LAUNCH</h4>
                <p>${launchesName}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/employes.png">
            <div class="data__item__text_crew">
                <h4>CUSTOMERS</h4>
                <p>${payloadinfo.customers}</p>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/world.png">
            <div class="data__item__text">
                <h4>REGIME</h4>
                <span>${payloadinfo.regime}</span>
            </div>
        </div>
    </div>
    `;

    let mass = payloadinfo.mass_kg ? payloadinfo.mass_kg : 0;
    let lbs = payloadinfo.mass_lbs ? payloadinfo.mass_lbs : 0;

    document.querySelector(".section__information__3").innerHTML = /*html*/`
    <div id="payload_right" class="data_capsules">
        <h4>PAYLOAD MEASURES</h4>
        <hr>
        <div class="data__item">
            <img src="./storage/img/employes.png">
            <div class="data__item__text">
                <p>NATIONALITIES</p>
                <span>${payloadinfo.nationalities}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/bolsa-de-dinero.png">
            <div class="data__item__text">
                <p>MANUFACTURES</p>
                <span>${payloadinfo.manufacturers}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/payload.png">
            <div class="data__item__text">
                <p>MASS</p>
                <span>${mass} kg</span>
                <span>${lbs} lbs</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/latitude.png">
            <div class="data__item__text">
                <p>ORBIT</p>
                <span>${payloadinfo.orbit}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/longitude.png">
            <div class="data__item__text">
                <p>REFERENCE SYSTEM</p>
                <span>${payloadinfo.reference_system}</span>
            </div>
        </div>
    </div>
    `;
}