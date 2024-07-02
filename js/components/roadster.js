
export const AllInfoRoadster = async (roadsterinfo) => {

    document.querySelector(".header__title").innerHTML = /*html*/` ${roadsterinfo.name} `;

    document.querySelector(".description__item").innerHTML = /*html*/`
    <div class="roadster_left">
        <h3>Details</h3>
        <p>${roadsterinfo.details}</p>

        <div class="info">
            <img src="./storage/img/latitude.png">
            <div class="info__item">
                <h4>ORBIT TYPE</h4>
                <p>${roadsterinfo.orbit_type}</p>
            </div>
        </div>

        <div class="info">
            <div class="info__item">
                <h4>UTC</h4>
                <p>$ ${roadsterinfo.launch_date_utc}</p>
            </div>
            <img src="./storage/img/date.png">
        </div>

        <div class="info">
            <img src="./storage/img/spaceship.png">
            <div class="info__item">
                <a href="${roadsterinfo.video}" >Watch here . . .</a>
            </div>
        </div>

        <div class="info">
            <div class="info__item">
                <a href="${roadsterinfo.wikipedia}" >Read here . . .</a>
            </div>
            <img src="./storage/img/wiki.png">
        </div>

    </div>
    `;
    
    document.querySelector(".section__image").innerHTML = roadsterinfo.flickr_images.map(image => `<img src="${image}" class="roadster_img" referrerpolicy="no-referrer" style="display: none;">`).join("");

    let carouselItems = Array.from(document.querySelectorAll('.roadster_img'));
    if (carouselItems.length > 0) {
        carouselItems[0].style.display = 'block'; 
    }

    let currentIndex = 0;
    let intervalId = setInterval(() => {
        carouselItems[currentIndex].style.display = 'none';

        currentIndex = (currentIndex + 1) % carouselItems.length; 

        carouselItems[currentIndex].style.display = 'block';
    }, 3000);

    document.querySelector(".section__information__3").innerHTML = /*html*/`
    <div id="num_roadster" class="description_dragon">
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>UNIX</h4>
                <p>${roadsterinfo.launch_date_unix}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>ROADSTER WEIGHT</h4>
                <p>${roadsterinfo.launch_mass_kg} kg</p>
                <p>${roadsterinfo.launch_mass_lbs} lbs</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>NORAD ID</h4>
                <p>${roadsterinfo.norad_id}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>JUALIAN DATE</h4>
                <p>${roadsterinfo.epoch_jd}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>APOAPSIS</h4>
                <p>${roadsterinfo.apoapsis_au} au</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>PERIAPSIS</h4>
                <p>${roadsterinfo.periapsis_au} au</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>ECCENTRICITY</h4>
                <p>${roadsterinfo.eccentricity}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>INCLINATION</h4>
                <p>${roadsterinfo.inclination}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>LONGITUDE</h4>
                <p>${roadsterinfo.longitude}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>PERIAPSIS ARG</h4>
                <p>${roadsterinfo.periapsis_arg}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>ORBITAL DAYS</h4>
                <p>${roadsterinfo.period_days}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>SPEED</h4>
                <p>${roadsterinfo.speed_kph} k/h</p>
                <p>${roadsterinfo.speed_mph} m/h</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>EARTH DISTANCE</h4>
                <p>${roadsterinfo.earth_distance_km} km</p>
                <p>${roadsterinfo.earth_distance_mi} mi</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>MARS DISTANCE</h4>
                <p>${roadsterinfo.mars_distance_km} km</p>
                <p>${roadsterinfo.mars_distance_mi} mi</p>
            </div>
        </div>
    </div>
    <img class="gengar_4" src="./storage/img/gengar4.gif">

    `;


}