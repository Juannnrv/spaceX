
export const nameRocket = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

// Columna izquierda
export const moreInfoRocket = async (moreInfo) => {
    // console.log(moreInfo);
    let flagSrc;
        if (moreInfo.country === "United States") {
            flagSrc = "https://cdn3d.iconscout.com/3d/premium/thumb/united-states-flag-pole-5082845-4234133.png";
        } else {
            flagSrc = "https://cdn3d.iconscout.com/3d/premium/thumb/marshall-islands-flag-pole-5082826-4234114.png?f=webp";
        }
    let statusSrc;
    let status;
        if (moreInfo.active === true) {
            statusSrc = "/storage/img/switch-on.png";
              status = "Active"
        } else {
            statusSrc = "/storage/img/switch-off.png";
             status = "Retired"
        }
    document.querySelector("#description__item").innerHTML = /*html*/`
    <h3>Description</h3>
    <p>${moreInfo.description}</p>

    <div class="info">
        <img id="flag" src="${flagSrc}">
        <div class="info__item">
            <h4>Country</h4>
            <p>${moreInfo.country}</p>
        </div>
    </div>

    <div class="info">
        <div class="info__item">
            <h4>Cost per launch</h4>
            <p>$  ${moreInfo.cost_per_launch}</p>
        </div>
        <img src="/storage/img/bolsa-de-dinero.png">
    </div>

    <div class="info">
        <img src="/storage/img/cohete.png">
        <div class="info__item">
            <h4>First flight</h4>
            <p>${moreInfo.first_flight}</p>
        </div>
    </div>

    <div class="info">
        <div class="info__item">
            <h4>Current status</h4>
            <p>${status}</p>
        </div>
        <img src=${statusSrc}>
    </div>

    <div class="info">
        <img src="/storage/img/wiki.png">
        <div class="info__item">
            <a href="${moreInfo.wikipedia}" target="_blank">Read more  here . . .</a>
        </div>
    </div>
    ` ;
}

// Tabla 1 payloads
export const payloadsRockets = async (infotable1) => {
    // console.log(infotable1);
    let info = infotable1.map(payload => ({
        name: payload.name,
        kg: payload.kg,
        lb: payload.lb
    }));
    
    // console.log(info);

    const informationTable1 = document.querySelector(".information__table__1");

    informationTable1.innerHTML = /*html*/`
    <h3> Payloads </h3>
    <hr>
    <div class="table1">
        <div class="title">
            <span>Name</span>
            <span>KG y LB</span>
        </div>
        ${
            info.map(payload => /*html*/`
                <div class="payload_info">
                    <span>${payload.name}</span>
                    <div class="payload__weight">
                        <p>${payload.kg}   kg</p>
                        <p>${payload.lb}   lb</p>
                    </div>
                </div>
            `).join('')
        }
    </div>
    `;
};

// Tabla 2 engines
export const enginesRockets = async (infotable2) => {
    console.log(infotable2);

    document.querySelector(".information__table__2").innerHTML = /*html*/`
    <h3> Engines </h3>
    <hr>
    <div class="table2">
        <div class="engineInfo">
            <p>Number</p>
            <span>${infotable2.number}</span>
        </div>
        <div class="engineInfo">
            <p>Type</p>
            <span>${infotable2.type}</span>
        </div>
        <div class="engineInfo">
            <p>Version</p>
            <span>${infotable2.version}</span>
        </div>
        <div class="engineInfo">
            <p>Layout</p>
            <span>${infotable2.layout}</span>
        </div>
        <div class="engineInfo">
            <p>Max. motor loss</p>
            <span>${infotable2.engine_loss_max}</span>
        </div>
        <div class="engineInfo">
            <p>Propellant 1</p>
            <span>${infotable2.propellant_1}</span>
        </div>
        <div class="engineInfo">
            <p>Propellant 1</p>
            <span>${infotable2.propellant_2}</span>
        </div>
        <div class="engineInfo">
            <p>thrust to weight</p>
            <span>${infotable2.thrust_to_weight}</span>
        </div>
    </div>
    `;
}