
const apiUrl = "https://api.spacexdata.com/v4/history/query";

export const getAllHistoryId = async () => {
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
    return docs;
}

export const getHistoryInfo = async (id) => {
    const options = {
        method: 'POST',
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