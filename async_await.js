const rp = require('request-promise')
const BASE_URL = 'https://swapi.co/api/'
const options = {
    uri: `${BASE_URL}people/1`,
    json: true 
}

async function getCharacterVehicleNames(){
    console.log('Fetching User Data...')
    const characterData = await rp(options)
    console.log('Fetching Vehicles data...')
   characterData.vehicles.map(async (vehicle, index) => {
        const vehicleDetails = await rp({ uri: vehicle, json: true })
        console.log(`Vehicle ${index + 1}: ${vehicleDetails.name}`)
    })
}

getCharacterVehicleNames()