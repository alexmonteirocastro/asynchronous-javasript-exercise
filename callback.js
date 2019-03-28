const request = require('request');

const BASE_URL = 'https://swapi.co/api/'

function getCharacterDetails(route){
    console.log('Fetching character data...')
    request({ uri: route, json: true }, function (error, response) {
        fetchVehicles(response.body)
    });
}

function fetchVehicles(character){
    console.log('Fetching vehicle data...')
    printVehicleNames(character.vehicles)   
}

function printVehicleNames(vehiclesArray){
    vehiclesArray.map((vehicle, index) => {
        request({ uri: vehicle, json: true }, function (error, response) {
            console.log(`Vehicle ${index + 1}: ${response.body.name}`)
        });
    })    
}

getCharacterDetails(`${BASE_URL}people/1`)