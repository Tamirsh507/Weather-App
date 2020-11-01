const request = require('request')

const forecast = (lat, long, callback) => {
    latLogString = lat + ',' + long
    const url = 'http://api.weatherstack.com/current?access_key=42c418990855a0f4bc09504a0cf4be23&query=' + latLogString
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = body.current
            const temp = data.temperature
            const perc = data.precip
            const description = data.weather_descriptions[0]
            callback(undefined, description + '. The temprature is ' + temp + ' and the chance for rain is ' + perc + '%')
        }
    })
}

module.exports = forecast



