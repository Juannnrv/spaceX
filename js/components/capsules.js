
export const AllinfoCapsules = async (info) => {
    console.log(info);

    let statusSrc;
    let status;
    if (info.status === "active") {
        statusSrc = "./storage/img/switch-on.png";
        status = "active"
    } else if (info.status === "retired"){
        statusSrc = "./storage/img/switch-off.png";
        status = "retired"
    }else {
        statusSrc = "./storage/img/switch-off.png";
        status = "unknown"
    }

    document.querySelector("#header__title").innerHTML = info.serial;

    let launches = info.launches;
    let time = 0;

    launches.forEach(() => {
        time += 1;
    })

    console.log(time);

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div class="data_capsules">
        <h4>CAPSULE DATA</h4>
        <hr>
        <div class="data__item">
            <img src="./storage/img/barcode.png">
            <div class="data__item__text">
                <p>Serial</p>
                <span>${info.serial}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/dragon.png">
            <div class="data__item__text">
                <p>Type</p>
                <span>${info.type}</span>
            </div>
        </div>
    </div>
    <div class="capsule_id">
        <h4>CAPSULE ID</h4>
        <p>${info.id}</p>
    </div>
    `;

    document.querySelector(".section__information__3").innerHTML = /*html*/`
    <div class="reuse">
        <h4>REUSE</h4>
        <hr>
        <div class="data__item">
            <img src="./storage/img/recycle.png">
            <div class="data__item__text">
                <p>Reuse count</p>
                <span>${info.reuse_count}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/cohete.png">
            <div class="data__item__text">
                <p>Times Launched</p>
                <span>${time} launches</span>
            </div>
        </div>
    </div>
        <div class="status">
            <img src="${statusSrc}">
            <p>${status}</p>
        </div>
    `;

    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="lastUpdate">
        <h4>LAST UPDATE</h4>
        <hr>
        <p>${info.last_update}</p>
    </div>
    `;
}