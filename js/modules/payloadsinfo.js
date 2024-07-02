
const apiUrl = "https://api.spacexdata.com/v4/payloads/query";

export const getAllPayloadsId = async () => {
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

export const getAllInfoPayloads = async (id) => {
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
                "select": "name type reused launch mass_kg orbit"
            }
        })
    };
    
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    // console.log(docs[0]);
    return docs[0];
}

export const getAllPayloadsNamesById = async (ids) => {
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
