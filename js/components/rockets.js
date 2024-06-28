

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
        <img src="./storage/img/bolsa-de-dinero.png">
    </div>

    <div class="info">
    <img src="./storage/img/cohete.png">
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
    <img src="./storage/img/wiki.png">
    <div class="info__item">
    <a href="${moreInfo.wikipedia}" target="_blank">Read more  here . . .</a>
    </div>
    </div>
    ` ;
}

// circulos progressbar
export const thrustRocket = async (thrust) => {
    // console.log(thrust);

    let sea = thrust.thrust_sea_level;
    let vac = thrust.thrust_vacuum;

    let fullSea = (sea.kN / 128000) * 100;
    let fullVac = (vac.kN / 138000) * 100;


    document.querySelector(".section__information__1").innerHTML = /*html*/`
    <div class="circle_sea">
        <div class="circle__info">
            <p>Atmospheric acceleration</p>
            <span>${fullSea.toFixed(2)}  %</span>
            <span>${sea.kN}   kN</span>
            <span>${sea.lbf}  lbf</span>
        </div>
        <svg class="circleSvg">
            <circle class="circle" stroke-dasharray="${fullSea} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
        </svg>
    </div>

    <div class="circle_vac">
        <div id="vac" class="circle__info">
            <p>Speed in sea</p>
            <span>${fullVac.toFixed(2)}  %</span>
            <span>${vac.kN}   kN</span>
            <span>${vac.lbf}  lbf</span>
        </div>
        <svg class="circleSvg">
            <circle class="circle" stroke-dasharray="${fullVac} 100" r="80" cx="50%" cy="50%" pathlength="100"></circle>
        </svg>
    </div>
    `;
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
    <h3> PAYLOADS </h3>
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

// Stages
export const RocketsStages = async (Stages) => {
    // console.log(Stages);

    let first = Stages.first_stage;
    let second = Stages.second_stage;

    document.querySelector("#first_stage").innerHTML = /*html*/`
    <h3> FIRST STAGE </h3>
    <hr>
    <div class="stage">
        <div class="stage__info">
            <p>Reusable</p>
            <span>${first.reusable === true ? "Yes" : "No" }</span>
        </div>
        <div class="stage__info">
            <p>Engines</p>
            <span>${first.engines}</span>
        </div>
        <div class="stage__info">
            <p>Fuel amount</p>
            <span>${first.fuel_amount_tons} tons</span>
        </div>
        ${first.burn_time_sec ? /*html*/`
            <div class="stage__info">
            <p>Burn time</p>
            <span>${first.burn_time_sec} sec</span>
        </div>` : ''}
    `;

    document.querySelector("#second-stage").innerHTML = /*html*/`
    <h3> SECOND STAGE </h3>
    <hr>
    <div class="stage">
        <div class="stage__info">
            <p>Reusable</p>
            <span>${second.reusable === true ? "Yes" : "No" }</span>
        </div>
        <div class="stage__info">
            <p>Engines</p>
            <span>${second.engines}</span>
        </div>
        <div class="stage__info">
            <p>Fuel amount</p>
            <span>${second.fuel_amount_tons} tons</span>
        </div>
        ${second.burn_time_sec ? /*html*/`
            <div class="stage__info">
            <p>Burn time</p>
            <span>${second.burn_time_sec} sec</span>
        </div>` : ''}
    `;
}

// Tabla 2 engines
export const enginesRockets = async (infotable2) => {
    // console.log(infotable2);

    document.querySelector(".information__table__2").innerHTML = /*html*/`
    <h3> ENGINES </h3>
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
        ${infotable2.version ? /*html*/`
            <div class="engineInfo">
            <p>Version</p>
            <span>${infotable2.version}</span>
        </div>` : ''}
        ${infotable2.layout ? /*html*/`
        <div class="engineInfo">
            <p>Layout</p>
            <span>${infotable2.layout}</span>
        </div>` : ''}
        ${ infotable2.engine_loss_max ? /*html*/`
            <div class="engineInfo">
            <p>Max. motor loss</p>
            <span>${infotable2.engine_loss_max}</span>
        </div>`: ""}
        <div class="engineInfo">
            <p>Propellant 1</p>
            <span>${infotable2.propellant_1}</span>
        </div>
        <div class="engineInfo">
            <p>Propellant 2</p>
            <span>${infotable2.propellant_2}</span>
        </div>
        <div class="engineInfo">
            <p>thrust to weight</p>
            <span>${infotable2.thrust_to_weight}</span>
        </div>
    </div>
    `;
}

// Imagenes
export const imagesRockets = async (images) => {
    // console.log(images);

    let imagesHTML = images.map((img, index) => /*html*/
        `<img class="carousel__item" style="display: ${index === 0 ? 'block' : 'none'}" src="${img}" alt="rocket" referrerpolicy = "no-referrer">`).join('');

    document.querySelector(".section__image").innerHTML = imagesHTML;

    let carouselItems = Array.from(document.querySelectorAll('.carousel__item'));
    let currentIndex = 0;

    setInterval(() => {
        carouselItems[currentIndex].style.display = 'none';

        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0; 
        }

        carouselItems[currentIndex].style.display = 'block';
    }, 3000);
}

// barras progressbar
export const measuresRocket = async (measures) => {
    console.log(measures);

    let totalKg = 0;
    let totalLb = 0;
    let totalMeters = 0;
    let totalFeet = 0;
    let payloadsKg = 0;
    let payloadsLb = 0;

    totalKg += measures.mass.kg;
    totalLb += measures.mass.lb;

    measures.payload_weights.forEach(payload => {
        totalKg += payload.kg;
        totalLb += payload.lb;

        payloadsKg += payload.kg;
        payloadsLb += payload.lb;
    });

    totalMeters += measures.height.meters;
    totalFeet += measures.height.feet;

    document.querySelector(".information__item").innerHTML = /*html*/ `
    <div class="progressBar">
        <div class="bar">
            <strong>Rocket weight</strong> 
            <progress value = "${totalKg}" max = "${totalKg}" ></progress>
        </div>
        <div class="num">
            <p>${totalKg}  kg</p>
            <p>${totalLb}  lb</p>
        </div>
    </div>
    <div class="progressBar">
        <div class="bar">
            <strong>Rocket mass</strong> 
            <progress value = "${measures.mass.kg}" max = "${totalKg}"></progress>
        </div>
        <div class="num">
            <p>${measures.mass.kg}  kg</p>
            <p>${measures.mass.lb}  lb</p>
        </div>
    </div>
    <div class="progressBar">
        <div class="bar">
            <strong> Payloads </strong> 
            <progress value = "${payloadsKg}" max = "${totalKg}"></progress>
        </div>
        <div class="num">
            <p>${payloadsKg}  kg</p>
            <p>${payloadsLb}  lb</p>
        </div>
    </div>
    <div class="progressBar">
        <div class="bar">
            <strong>Rocket height</strong> 
            <progress value = "${totalMeters}" max = "${totalMeters}" ></progress>
        </div>
        <div class="num">
            <p>${totalMeters}  M</p>
            <p>${totalFeet}  F</p>  
        </div>
    </div>
    <div class="progressBar">
        <div class="bar">
            <strong>Rocket diameter</strong> 
            <progress value = "${measures.diameter.meters}" max = "${totalMeters}" ></progress>
        </div>
        <div class="num">
            <p>${measures.diameter.meters}  M</p>
            <p>${measures.diameter.feet}  F</p>  
        </div>
    </div>
    <div class="progressBar">
        <div class="bar">
            <strong>Succes rate</strong> 
            <progress value = "${measures.success_rate_pct}" max = "100" ></progress>
        </div>
        <div class="num">
            <p>${measures.success_rate_pct}  %</p>
        </div>
    </div>

    <img src="./storage/img/buzz.gif">
    
    `; 
}