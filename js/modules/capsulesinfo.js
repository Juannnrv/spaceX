const apiUrl = "https://api.spacexdata.com/v4/capsules/query";

export const getAllCapsulesId = async () => {
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