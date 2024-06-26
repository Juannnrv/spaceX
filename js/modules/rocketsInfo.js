
export const getAllRocketsId = async () => {
    let url = "https://api.spacexdata.com/v4/rockets/query";
    let options = {
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "query": {},
            "options": {
                "select": "id"
            }
        })
    };
    
    let res = await fetch(url, options);
    let {docs} = await res.json();
    return docs;
}