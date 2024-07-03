
const apiUrl = "https://api.spacexdata.com/v4/starlink/query";

export const getAllStarlinksId = async () => {
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
    console.log(docs);
    return docs;
}

export const getAllInformationStarlink = async (id) => {
    console.log(id);
    
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {
                "_id": id.id
            },
            "options": {
            }
        })
    };

    const res = await fetch(apiUrl, options);
    const { docs } = await res.json();
    console.log(docs);
    return docs[0];
}