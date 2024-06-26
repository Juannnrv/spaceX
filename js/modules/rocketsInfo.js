
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
    return docs.length > 0 ? docs[0].name : null;
}
