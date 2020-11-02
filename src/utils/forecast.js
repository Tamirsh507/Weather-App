const request = require('request')

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
            console.log(data)
            const temp = data.temperature
            const perc = data.precip
            const feelsLike = data.feelslike
            const localTime = data.observation_time

            const description = data.weather_descriptions[0]
            callback(
                undefined,
                `Local Time is ${localTime}, and the Weather is ${description}
                . The temprature is ${temp}, feels like ${feelsLike}, and the chance for rain is ${perc}%`)
        }
    })
}   

module.exports = forecast



