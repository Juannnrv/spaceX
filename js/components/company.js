
export const companyInfo = async (companyInfo) => {

    document.querySelector("#header__title").innerHTML = /*html*/`${companyInfo.name}`;

    document.querySelector("#description__item").innerHTML = /*html*/`
    <div id="company_data" class="data_capsules">
        <h4>COMPANY DATA</h4>
        <hr>
        <div class="data__item">
            <img src="./storage/img/founder.png">
            <div class="data__item__text">
                <p>Founder</p>
                <span>${companyInfo.founder}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/date.png">
            <div class="data__item__text">
                <p>Founded</p>
                <span>${companyInfo.founded}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/employes.png">
            <div class="data__item__text">
                <p>Employees</p>
                <span>${companyInfo.employees}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/astronave.png">
            <div class="data__item__text">
                <p>Vehicles</p>
                <span>${companyInfo.vehicles}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/cohete.png">
            <div class="data__item__text">
                <p>Launches sites</p>
                <span>${companyInfo.launch_sites}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/world.png">
            <div class="data__item__text">
                <p>Test sites</p>
                <span>${companyInfo.test_sites}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/crew.png">
            <div class="data__item__text">
                <p>Ceo</p>
                <span>${companyInfo.ceo}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/crew.png">
            <div class="data__item__text">
                <p>Cto</p>
                <span>${companyInfo.cto}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/crew.png">
            <div class="data__item__text">
                <p>Coo</p>
                <span>${companyInfo.coo}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/crew.png">
            <div class="data__item__text">
                <p>Cto propulsion</p>
                <span>${companyInfo.cto_propulsion}</span>
            </div>
        </div>
        <div class="data__item">
            <img src="./storage/img/bolsa-de-dinero.png">
            <div class="data__item__text">
                <p>Valuation</p>
                <span>${companyInfo.valuation}</span>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".section__image").innerHTML = /*html*/ `
    <div class="company_img">
        <img src="./storage/img/spacex.gif">
    </div>
    `;

    document.querySelector(".section__information__3").innerHTML = /*html*/`
    <div id="company_network" class="Launches_data">
        <h4>NETWORK</h4>
        <hr>
        <div id="company_item" class="data__item_crew">
            <div id="company_info" class="data__item__text_crew">
                <a href="${companyInfo.links.elon_twitter}" ><p>Read here</p> Elon twitter</a>
            </div>
            <div id="company_info" class="data__item__text_crew">
                <a href="${companyInfo.links.website}" ><p>Click on here</p> SpaceX website</a>
            </div>
            <div id="company_info" class="data__item__text_crew">
                <a href="${companyInfo.links.flickr}" ><p>Watch here</p> SpaceX flickr</a>
            </div>
            <div id="company_info" class="data__item__text_crew">
                <a href="${companyInfo.links.twitter}" ><p>Read here</p> SpaceX twitter</a>
            </div>
        </div>
    </div>
    `;

    document.querySelector(".information__item").innerHTML = /*html*/`
    <div id="company_address" class="landpad_left">
        <div class="Launches_data">
            <h4>ADDRESS</h4>
            <hr>
            <div class="data__item_crew">
                <div id="company_info" class="data__item__text_crew">
                    <span>${companyInfo.headquarters.address}  ,  ${companyInfo.headquarters.city}  ,  ${companyInfo.headquarters.state}</span>
                </div>
            </div>
            <h4>SUMMARY</h4>
            <hr>
            <div class="data__item_crew">
                <div id="company_info" class="data__item__text_crew">
                    <span>${companyInfo.summary}</span>
                </div>
            </div>
        </div>
    </div>
    `;
}