
export const dragonsInfo = async (dragonsInfo) => {

    document.querySelector("#header__title").innerHTML = /*html*/ `${dragonsInfo.name}`;

    document.querySelector(".description__item").innerHTML = /*html*/ `
    <div class="description_dragon">
        <h4>DESCRIPTION</h4>
        <hr>
        <p>${dragonsInfo.description}</p>
        <h4>FIRST FLIGHT DATE</h4>
        <p>${dragonsInfo.first_flight}</p>
        <h4>HEIGHT WITH TRUNK</h4>
        <div class="measures">
            <p>${dragonsInfo.height_w_trunk.meters} meters</p>
            <p>${dragonsInfo.height_w_trunk.feet} feet</p>
        </div>
        <h4>DRY MASS</h4>
        <div class="measures">
            <p>${dragonsInfo.dry_mass_kg} Kg</p>
            <p>${dragonsInfo.dry_mass_lb} Lb</p>
        </div>
        <h4>DIAMETERS</h4>
        <div class="measures">
            <p>${dragonsInfo.diameter.meters} meters</p>
            <p>${dragonsInfo.diameter.feet} feet</p>
        </div>
        <h4>WIKIPEDIA</h4>
        <a href="${dragonsInfo.wikipedia}">Click on me . . .</a>
    </div>
    `;

    let status = "";
    let statusSrc = "";
    if (dragonsInfo.active === true) {
        status = "active";
        statusSrc = "./storage/img/switch-on.png";
    }else {
        status = "retired";
        statusSrc = "./storage/img/switch-off.png";
    }

    document.querySelector(".section__information__2").innerHTML = /*html*/ `
    <div id="shield" class="data_dragon">
        <h4>HEAT SHIELD</h4>
        <hr>
        <div class="dragon_data">
            <img src="./storage/img/serial.png">
            <div class="dragon_data__item">
                <h4>MATERIAL</h4>
                <p>${dragonsInfo.heat_shield.material}</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/barcode.png">
            <div class="dragon_data__item">
                <h4>SIZE</h4>
                <p>${dragonsInfo.heat_shield.size_meters} meters</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/temp.png">
            <div class="dragon_data__item">
                <h4>TEMPERATURE</h4>
                <p>${dragonsInfo.heat_shield.temp_degrees} deg</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/founder.png">
            <div class="dragon_data__item">
                <h4>DEV PARTNER</h4>
                <p>${dragonsInfo.heat_shield.dev_partner}</p>
            </div>
        </div>
    </div>
    <div class="data_dragon">
        <h4>DRAGON DATA</h4>
        <hr>
        <div class="dragon_data">
            <img src="./storage/img/spaceship.png">
            <div class="dragon_data__item">
                <h4>TYPE</h4>
                <p>${dragonsInfo.type}</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="${statusSrc}">
            <div class="dragon_data__item">
                <h4>DRAGON SERVICE</h4>
                <p>${status}</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/crew.png">
            <div class="dragon_data__item">
                <h4>CREW CAPACITY</h4>
                <p>${dragonsInfo.crew_capacity}</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/cohete.png">
            <div class="dragon_data__item">
                <h4>SIDEWALL ANGLE</h4>
                <p>${dragonsInfo.sidewall_angle_deg} deg</p>
            </div>
        </div>
    </div>
    `;

    let imagesHTML = dragonsInfo.flickr_images.map((img, index) => `
        <img class="carousel__item" style="display: ${index === 0 ? 'block' : 'none'}" src="${img}" alt="dragon" referrerpolicy="no-referrer">
    `).join('');

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

    document.querySelector(".section__information__3").innerHTML = /*html*/ `
    <div class="payload_dragon">
        <h4>LAUNCH PAYLOADS MEASURES</h4>
        <hr>
        <div class="dragon_data">
            <img src="./storage/img/right.png">
            <div class="dragon_data__item">
                <h4>DEPLOYED MASS</h4>
                <p>${dragonsInfo.launch_payload_mass.kg} kg</p>
                <p>${dragonsInfo.launch_payload_mass.lb} lb</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/left.png">
            <div class="dragon_data__item">
                <h4>RETURN MASS</h4>
                <p>${dragonsInfo.return_payload_mass.kg} kg</p>
                <p>${dragonsInfo.return_payload_mass.lb} lb</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/longitude.png">
            <div class="dragon_data__item">
                <h4>TRUNK VOLUME</h4>
                <p>${dragonsInfo.trunk.trunk_volume.cubic_meters} m²</p>
                <p>${dragonsInfo.trunk.trunk_volume.cubic_feet} feet</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/latitude.png">
            <div class="dragon_data__item">
                <h4>CAPSULE PRESSURE</h4>
                <p>${dragonsInfo.pressurized_capsule.payload_volume.cubic_meters} m²</p>
                <p>${dragonsInfo.pressurized_capsule.payload_volume.cubic_feet} feet</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/right.png">
            <div class="dragon_data__item">
                <h4>DEPLOYED VOLUME</h4>
                <p>${dragonsInfo.launch_payload_vol.cubic_meters} m²</p>
                <p>${dragonsInfo.launch_payload_vol.cubic_feet} feet</p>
            </div>
        </div>
        <div class="dragon_data">
            <img src="./storage/img/left.png">
            <div class="dragon_data__item">
                <h4>RETURN VOLUME</h4>
                <p>${dragonsInfo.return_payload_vol.cubic_meters} m²</p>
                <p>${dragonsInfo.return_payload_vol.cubic_feet} feet</p>
            </div>
        </div>
    </div>
    `;
    
    const generateThrustersHTML = (thrusters) => {
        if (thrusters.length === 1) {
            return /*html*/`
            <div id="thrusters" class="payload_dragon">
                <h4>THRUSTER</h4>
                <hr>
                <div class="dragon_data">
                    <img src="./storage/img/dragon.png">
                    <div class="dragon_data__thruster">
                        <h4>TYPE</h4>
                        <p>${thrusters[0].type}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>AMOUNT</h4>
                        <p>${thrusters[0].amount}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>PODS</h4>
                        <p>${thrusters[0].pods}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>FUELS</h4>
                        <div class="fuels_dragon">
                            <p>${thrusters[0].fuel_1}</p>
                            <p>${thrusters[0].fuel_2}</p>
                        </div>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>ISP</h4>
                        <p>${thrusters[0].isp}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>MEASURES</h4>
                        <div class="fuels_dragon">
                            <p>${thrusters[0].thrust.kN} Kn</p>
                            <p>${thrusters[0].thrust.lbf} Lbf</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        } else {
            return thrusters.map(thruster => /*html*/`
            <div id="thrusters" class="payload_dragon">
                <h4>THRUSTER</h4>
                <hr>
                <div class="dragon_data">
                    <img src="./storage/img/dragon.png">
                    <div class="dragon_data__thruster">
                        <h4>TYPE</h4>
                        <p>${thruster.type}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>AMOUNT</h4>
                        <p>${thruster.amount}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>PODS</h4>
                        <p>${thruster.pods}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>FUELS</h4>
                        <div class="fuels_dragon">
                            <p>${thruster.fuel_1}</p>
                            <p>${thruster.fuel_2}</p>
                        </div>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>ISP</h4>
                        <p>${thrusters[0].isp}</p>
                    </div>
                </div>
                <div class="dragon_data">
                    <div class="dragon_data__thruster">
                        <h4>MEASURES</h4>
                        <div class="fuels_dragon">
                            <p>${thruster.thrust.kN} Kn</p>
                            <p>${thruster.thrust.lbf} Lbf</p>
                        </div>
                    </div>
            </div>
            </
            `).join('');
        }
    };

    document.querySelector(".information__item").innerHTML = /*html*/`
        ${generateThrustersHTML(dragonsInfo.thrusters)}
    `;
}



