
const apiUrl = 'https://api.spacexdata.com/v4/ships/query';

export const getAllShipId = async ( ) => {
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
    console.log(docs)
    return docs;
}

export const getAllInfoShips = async (id) => {
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
            }
        })
    };
    
    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    console.log(docs[0])
    return docs[0];
}