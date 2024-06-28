
const apiUrl = "https://api.spacexdata.com/v4/rockets/query";

export const getAllRocketsId = async () => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {},
            "options": {
                "select": "id"
            }
        })
    };
    
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs);
    return docs;
}

export const getRocketNameById = async (id) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": { 
                "_id": id 
            },
            "options": {
                "select": "name"
            }
        })
    };
    
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    return docs.length > 0 ? docs[0].name : "Not found";
}

export const getRocketMoreInfoById = async (id) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
              "_id": id
            },
            "options": {
            "select": " cost_per_launch country wikipedia description first_flight active"
            }
        })
    };

    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs);
    return docs[0];
}

export const getRocketInfoTable1 = async (id) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
                "_id": id,
            },
            "options": {
                "select": "payload_weights.name payload_weights.kg payload_weights.lb"
            }
        })
    };
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs[0].payload_weights)
    return docs[0].payload_weights;
}

export const getRocketEngines = async (id) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
                "_id": id
            },
            "options": {
                "select": "engines.number engines.type engines.version engines.layout engines.engine_loss_max engines.propellant_1 engines.propellant_2 engines.thrust_to_weight"
            }
        })
    };
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    return docs[0].engines;
}

export const getRocketsStage = async (id) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
              "_id": id
            },
            "options": {
              "select": "first_stage.reusable first_stage.engines first_stage.fuel_amount_tons first_stage.burn_time_sec second_stage.reusable second_stage.engines second_stage.fuel_amount_tons second_stage.burn_time_sec"
            }
          })
    };
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs[0]);
    return docs[0];
}

export const getRocketImages = async (id) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
              "_id": id
            },
            "options": {
              "select": "flickr_images"
            }
          })
    };
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs[0].flickr_images);
    return docs[0].flickr_images;
}

export const getThrustRocket= async (id) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
              "_id": id
            },
            "options": {
                "select": "first_stage.thrust_sea_level first_stage.thrust_vacuum"
            }
          })
    };
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs[0].first_stage);
    return docs[0].first_stage;
}