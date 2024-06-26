
export const nameRocket = async (name) => {
    document.querySelector("#header__title").innerHTML = name;
}

// export const descriptionRocket = async (description) => {
//     document.querySelector("#description__item").innerHTML = /*html*/`
//     <h3>Description</h3>
//     <br>
//     <p>${description}</p>` ;
// }

export const moreInfoRocket = async (moreInfo) => {
    console.log(moreInfo);
    document.querySelector("#description__item").innerHTML = /*html*/`
    <h3>Description</h3>
    <br>
    <p>${moreInfo.description}</p>
    <br>
    <div class="info">
        <img src="/storage/img/world.png">
        <div class="info__item">
            <h4>Country</h4>
            <p>${moreInfo.country}</p>
        </div>
    </div>
    ` ;

}