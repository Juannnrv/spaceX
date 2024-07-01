
const apiUrl = "https://api.spacexdata.com/v4/company";

export const getCompanyinfo = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = await fetch(apiUrl, options);
    const data = await res.json();
    console.log('Company info:', data);
    return data;
}