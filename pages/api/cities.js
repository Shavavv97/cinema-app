export async function getCities(req,res){
    const data = await fetch('https://cinepolis.com/manejadores/CiudadesComplejos.ashx?EsVIP=false', {
        method: 'POST',
        headers: {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'es-ES,es;q=0.9',
            'content-type': 'application/json;charset=UTF-8',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin'
        }
    })
 
    const json = await data.json()
    return json
}

export default async (req, res) => {
    const cities = await getCities()
    res.statusCode = 200
    res.json(cities)
}