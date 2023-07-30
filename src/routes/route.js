const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")





router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getBydistrict", CowinController.getBydistrict)
router.get("/cowin/getWeather", CowinController.getWeather)
router.get("/cowin/sortCities", CowinController.sortCities)
router.post("/cowin/getmeme", CowinController.getmeme)



module.exports = router;