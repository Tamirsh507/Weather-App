const request = require('request')
const os = require('os')

const forecast = (lat, long, callback) => {
    latLogString = lat + ',' + long
    const url = 'http://api.weatherstack.com/current?access_key=42c418990855a0f4bc09504a0cf4be23&query=' + latLogString
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Please try another search.', undefined)
        } else {
            const data = body.current
            const temp = data.temperature
            const perc = data.precip
            const feelsLike = data.feelslike
            const description = data.weather_descriptions[0]
            const stringToShow = 'The Weather is ' + description +
            '. The temprature is ' + temp + ', feels like ' + feelsLike + ', and the chance for rain is ' + perc + '%'
            console.log(stringToShow)
            callback(undefined, stringToShow)

        }
    })
}   

module.exports = forecast



