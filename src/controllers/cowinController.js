let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let value = req.body

        console.log(`body is : ${value} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: value
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// problem1
let getBydistrict = async function (req, res) {
    try {
        let district = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// problem2

let getWeather = async function (req, res) {
    try {
        let weather = req.query.q
        let Appid = req.query.appid
        console.log(`query params are: ${weather},${Appid} `)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${Appid}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//    problem 2 part 3
let sortCities = async function (req, res) {
    try {
        let Appid = req.query.appid
        let cities = ["Bengaluru", "Mumbai", "Kolkata", "Delhi", "Chennai", "London", "Muscow"]
        let arrayofcity = []
        for (let i = 0; i < cities.length; i++) {
            let object = { city: cities[i] }
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${Appid}`
            }
            let result = await axios(options)
            object.temp = result.data.main.temp
            arrayofcity.push(object)
        }
        let sorted = arrayofcity.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, data: sorted })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//    problem 3

let getmeme = async function (req, res) {
    try {
        let value = req.query.template_id
        let text = req.query.text0
        let txt = req.query.text1
        let user = req.query.username
        let pass = req.query.password

        
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${value}$text0=${text}$text1=${txt}$username=${user}$password=${pass}`,
            data: value
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getBydistrict = getBydistrict
module.exports.getWeather = getWeather
module.exports.sortCities = sortCities
module.exports.getmeme = getmeme