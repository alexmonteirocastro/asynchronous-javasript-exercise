const rp = require('request-promise')
const BASE_URL = 'https://swapi.co/api/'
const options = {
    uri: `${BASE_URL}people/1`,
    json: true 
}

function fetchCharacterVehicleNames(endPoint){
    console.log('Fetching character data...')
    rp(options).then(response => fetchVehicles(response))
} 

function fetchVehicles(character){
    console.log('Fetching vehicle data...')
    character.vehicles.map((vehicle, index) => {
        rp({ uri: vehicle, json: true }).then(vehicleData => {
            console.log(`Vehicle ${index + 1}: ${vehicleData.name}`)
        })
    })
}

fetchCharacterVehicleNames()