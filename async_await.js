const rp = require('request-promise')
const BASE_URL = 'https://swapi.co/api/'
const options = {
  uri: `${BASE_URL}people/1`,
  json: true
}

async function getCharacterVehicleNames() {
  console.log('Fetching User Data...')
  const characterData = await rp(options)
  const vehicles = characterData.vehicles
  console.log('Fetching Vehicles data...')
  await Promise.all(
    vehicles.map(async vehicleUrl => rp({
      uri: vehicleUrl,
      json: true
    }))
  ).then(vehicleData => {
    vehicleData.map((vehicle, index) => console.log(`Vehicle ${index + 1}: ${vehicle.name}`))
  })
}

getCharacterVehicleNames()