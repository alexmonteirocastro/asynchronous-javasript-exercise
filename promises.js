const rp = require('request-promise')
const BASE_URL = 'https://swapi.co/api/'

function fetchCharacterVehicleNames(endPoint){
    console.log('Fetching character data...')
    rp(`${BASE_URL}people/1`).then(response => fetchVehicles(JSON.parse(response)))
} 

function fetchVehicles(character){
    console.log('Fetching vehicle data...')
    character.vehicles.map((vehicle, index) => {
        rp(vehicle).then(response => {
            const vehicleData = JSON.parse(response)
            console.log(`Vehicle ${index + 1}: ${vehicleData.name}`)
        })
    })
}

fetchCharacterVehicleNames()