const rp = require('request-promise')
const BASE_URL = 'https://swapi.co/api/'

async function getCharacterVehicleNames(){
    console.log('Fetching User Data...')
    const characterData = await rp(`${BASE_URL}people/1`)
    const characterVehicles = JSON.parse(characterData).vehicles
    console.log('Fetching Vehicles data...')
    characterVehicles.map(async (vehicle, index) => {
        const vehicleDetails = await rp(vehicle)
        const vehicleName = JSON.parse(vehicleDetails).name
        console.log(`Vehicle ${index + 1}: ${vehicleName}`)
    })
}

getCharacterVehicleNames()