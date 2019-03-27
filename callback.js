const request = require('request');

const BASE_URL = 'https://swapi.co/api/'

function getCharacterDetails(route){
    console.log('Fetching character data...')
    request(route, function (error, response) {
        fetchVehicles(JSON.parse(response.body))
    });
}

function fetchVehicles(character){
    console.log('Fetching vehicle data...')
    printVehicleNames(character.vehicles)   
}

function printVehicleNames(vehiclesArray){
    vehiclesArray.map((vehicle, index) => {
        request(vehicle, function (error, response) {
            const vehicleData = JSON.parse(response.body)
            console.log(`Vehicle ${index + 1}: ${vehicleData.name}`)
        });
    })    
}

getCharacterDetails(`${BASE_URL}people/1`)