
const apiUrl = "https://api.spacexdata.com/v4/roadster";

export const getAllInfoRoadster = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await fetch(apiUrl, options);
    const data = await res.json();
    return data;
}