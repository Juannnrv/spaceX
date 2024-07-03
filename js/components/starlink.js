import { getLaunchesName } from "../modules/launchesinfo.js";

export const AllStarlinkInfo = async (starlinkInfo) => {

    document.querySelector(".header__title").innerHTML = /*html*/ `${starlinkInfo.spaceTrack.OBJECT_NAME}`;

    document.querySelector(".description__item").innerHTML = /*html*/`
    <div class="spaceTrack">
        <h4>SPACETRAK</h4>
        <hr>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>OBJECT ID</h4>
                <p>${starlinkInfo.spaceTrack.OBJECT_ID}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>OMM MSG</h4>
                <p>${starlinkInfo.spaceTrack.CCSDS_OMM_VERS}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>COMMENT</h4>
                <p>${starlinkInfo.spaceTrack.COMMENT}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>CREATION DATE</h4>
                <p>${starlinkInfo.spaceTrack.CREATION_DATE}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>ORIGINATOR</h4>
                <p>${starlinkInfo.spaceTrack.ORIGINATOR}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>CENTER NAME</h4>
                <p>${starlinkInfo.spaceTrack.CENTER_NAME}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>REF FRAME</h4>
                <p>${starlinkInfo.spaceTrack.REF_FRAME}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>TIME SYSTEM</h4>
                <p>${starlinkInfo.spaceTrack.TIME_SYSTEM}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>MEAN THEORY</h4>
                <p>${starlinkInfo.spaceTrack.MEAN_ELEMENT_THEORY}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>EPHEMERIS TYPE</h4>
                <p>${starlinkInfo.spaceTrack.EPHEMERIS_TYPE}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>CLASSIFICATION TYPE</h4>
                <p>${starlinkInfo.spaceTrack.CLASSIFICATION_TYPE}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>REV EPOCH</h4>
                <p>${starlinkInfo.spaceTrack.REV_AT_EPOCH}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>BSTAR</h4>
                <p>${starlinkInfo.spaceTrack.BSTAR}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>MEAN MOTION</h4>
                <p>${starlinkInfo.spaceTrack.MEAN_MOTION_DOT}  Dot</p>
                <p>${starlinkInfo.spaceTrack.MEAN_MOTION_DDOT} Ddot</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>RCS SIZE</h4>
                <p>${starlinkInfo.spaceTrack.RCS_SIZE}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>BSTAR</h4>
                <p>${starlinkInfo.spaceTrack.BSTAR}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>DECAY DATE</h4>
                <p>${starlinkInfo.spaceTrack.DECAY_DATE}</p>
                <p>${starlinkInfo.spaceTrack.DECAYED} decayed</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>FILE</h4>
                <p>${starlinkInfo.spaceTrack.FILE}</p>
            </div>
        </div>
        <div class="data__item_crew">
            <div class="data__item__text_crew">
                <h4>GP ID</h4>
                <p>${starlinkInfo.spaceTrack.GP_ID}</p>
            </div>
        </div>
    </div>
    `;

    let launch = await getLaunchesName(starlinkInfo.launch);
    console.log(launch);

    let launchName = launch.name ? launch.name : "No launch "

    document.querySelector(".section__image").innerHTML = /*html*/`
    <div class="launch_starlink">
        <h4>LAUNCH DATA</h4>
        <hr>
        <div class="data__item">
            <div class="data__item__text">
                <p>LAUNCH</p>
                <span>${launchName}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>LAUNCH DATE</p>
                <span>${starlinkInfo.spaceTrack.LAUNCH_DATE}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>SITE</p>
                <span>${starlinkInfo.spaceTrack.SITE}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>OBJECT TYPE</p>
                <span>${starlinkInfo.spaceTrack.OBJECT_TYPE}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>COUNTRY CODE</p>
                <span>${starlinkInfo.spaceTrack.COUNTRY_CODE}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>NORAD CAT ID</p>
                <span>${starlinkInfo.spaceTrack.NORAD_CAT_ID}</span>
            </div>
        </div>
        
    </div>
    `;

        
    document.querySelector(".section__information__1").innerHTML = /*html*/`<img class="osha1" src="./storage/img/osha.gif"><img class="osha2" src="./storage/img/osha2.gif">`;

    document.querySelector(".information__item").innerHTML = /*html*/`
    <div class="orbital_elements">
        <h4>ORBITAL ELEMENTS</h4>
        <hr>
        <div class="data__item">
            <div class="data__item__text">
                <p>TLE LINES</p>
                <span>${starlinkInfo.spaceTrack.TLE_LINE0}</span>
                <br>
                <span>${starlinkInfo.spaceTrack.TLE_LINE1}</span>
                <br>
                <span>${starlinkInfo.spaceTrack.TLE_LINE2}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>MEAN MOTION</p>
                <span>${starlinkInfo.spaceTrack.MEAN_MOTION}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>ECCENTRICITY</p>
                <span>${starlinkInfo.spaceTrack.ECCENTRICITY}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>INCLINATION</p>
                <span>${starlinkInfo.spaceTrack.INCLINATION}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>RAAN</p>
                <span>${starlinkInfo.spaceTrack.RA_OF_ASC_NODE}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>AOP</p>
                <span>${starlinkInfo.spaceTrack.ARG_OF_PERICENTER}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>MEAN ANOMALY</p>
                <span>${starlinkInfo.spaceTrack.MEAN_ANOMALY}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>SEMIMAJOR AXIS</p>
                <span>${starlinkInfo.spaceTrack.SEMIMAJOR_AXIS}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>PERIOD</p>
                <span>${starlinkInfo.spaceTrack.PERIOD}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>APOAPSIS</p>
                <span>${starlinkInfo.spaceTrack.APOAPSIS}</span>
            </div>
        </div>
        <div class="data__item">
            <div class="data__item__text">
                <p>PERIAPSIS</p>
                <span>${starlinkInfo.spaceTrack.PERIAPSIS}</span>
            </div>
        </div>
    </div>
    `;
}