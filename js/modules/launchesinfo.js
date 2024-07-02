
const apiUrl = "https://api.spacexdata.com/v4/launches/query";

export const getAllLaunchesId = async () => {
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

export const getAllInfoLaunches = async (id) => {
    // console.log(id);
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
                "select": "links.wikipedia links.article links.youtube_id name date_utc rocket success flight_number crew launchpad payloads details"
            }
        })
    };
    
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs[0]);
    return docs[0];
}

export const getLaunchesName = async (id) => {
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
    return docs[0];

}

export const getLaunchesNameById = async (ids) => {
    const promises = ids.map(async (id) => {
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
        return docs[0]; 
    });

    return Promise.all(promises);
}