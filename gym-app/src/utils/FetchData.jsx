export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'bda467c5ffmshaa2257804d5fcc2p14bc81jsn2509a54ca4ed',
    },
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}
