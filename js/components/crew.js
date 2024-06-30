
export const AllinfoCrew = async (crewInfo) => {
    console.log(crewInfo);
    
    document.querySelector("#header__title").innerHTML = crewInfo.name;

    
    document.querySelector(".description__item").innerHTML = /*html*/`
    <div class="Astronaut_info">
        <h4>ASTRONAUT DATA</h4>
        <hr>
        <div class="data__item_crew">
            <img src="./storage/img/spaceship.png">
            <div class="data__item__text_crew">
                <p>Agency</p>
                <span>${crewInfo.agency}</span>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/switch-on.png">
            <div class="data__item__text_crew">
                <p>Status</p>
                <span>${crewInfo.status}</span>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/cohete.png">
            <div class="data__item__text_crew">
                <p>launches</p>
                <span>${crewInfo.launches[0]}</span>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="astronaut_image">
        <img src="${crewInfo.image}" alt="image" referrerpolicy="no-referrer">
    </div>
    `;

    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="astronaut_moreInfo">
        <div class="data__item_crew">
            <img src="./storage/img/id.png">
            <div class="data__item__text_crew">
                <p>ID</p>
                <span>${crewInfo.id}</span>
            </div>
        </div>
        <div class="data__item_crew">
            <img src="./storage/img/wiki.png">
            <div class="data__item__text_crew">
                <p>More info</p>
                <a href="${crewInfo.wikipedia}" >Click on me . . .</a>
            </div>
        </div>
    </div>
    `;

}