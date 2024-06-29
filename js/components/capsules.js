


export const AllinfoCapsules = async (info) => {
    console.log(info);

    document.querySelector("#header__title").innerHTML = info.serial;

    let launches = info.launches;
    let time = 0;

    launches.forEach(() => {
        time += 1;
    })

    console.log(time);

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="data">
        <h4>CAPSULE DATA</h4>
        <hr>
        <div class="data__item">
            <img src="./storage/img/barras.svg">
            <div class="data__item__text">
                <p>Serial</p>
                <p>${info.serial}</p>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/cohete.png">
            <div class="data__item__text">
                <p>Type</p>
                <p>${info.type}</p>
            </div>
        </div>
    </div>
    <div class="reuse">
        <h4>REUSE</h4>
        <hr>
        <div class="data__item">
            <img src="./storage/img/barras.svg">
            <div class="data__item__text">
                <p>Reuse count</p>
                <p>${info.reuse_count}</p>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/cohete.png">
            <div class="data__item__text">
                <p>Times Launched</p>
                <p>${time} launches</p>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".information__table__1").innerHTML = /*html*/`
    `;
}