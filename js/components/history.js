
export const historyAllInfo = async (historyInfo) => {

    document.querySelector("#header__title").innerHTML = /*html*/`${historyInfo.title}`;

    document.querySelector(".section__information__2").innerHTML = /*html*/`
    <div id="history_left" class="data_capsules">
        <div class="data__item">
            <img src="./storage/img/date.png">
            <div class="data__item__text">
                <p>UTC</p>
                <span>${historyInfo.event_date_utc}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/spaceship.png">
            <div class="data__item__text">
                <p>ARTICLE</p>
                <a href="${historyInfo.links.article}"> Read more here . . .</a>
            </div>
        </div>
    </div>
    <img class="gengar_3" src="./storage/img/gengar3.gif">
    `;

    document.querySelector(".description__item").innerHTML = /*html*/`
    <div id="description_history" class="description_dragon">
        <h4>DESCRIPTION</h4>
        <hr>
        <p>${historyInfo.details}</p>
        <div class="data__item_crew">
            <img src="./storage/img/date.png">
            <div class="data__item__text_crew">
                <h4>UNIX</h4>
                <p>${historyInfo.event_date_unix}</p>
            </div>
        </div>
    </div>
    `;

}