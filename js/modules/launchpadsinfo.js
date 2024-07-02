
const apiUrl = "https://api.spacexdata.com/v4/launchpads/query";

export const getAllLaunchpadsId = async() => {
    const options = {
        method: "POST",
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
    return docs;
}

export const getAllInfoLaunchpads = async (id) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
                "_id": id
            }
        })
    };

    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    return docs[0];
}

export const getLaunchpadsNameById = async (id) => {
    const options = {
        method: "POST",
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