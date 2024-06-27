
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

// Tabla 1
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
