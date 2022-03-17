const express= require('express');
const router= express.Router();
const request = require('request'); //possible to make http calls
const config = require("config");


router.get("/:city", async(req,res) =>{
    const city= req.params.city;
    const URL= `http://api.weatherapi.com/v1/forecast.json?key=${config.get("key")}&q=${city}&hour`

    if(!city){ //User does not write anything in the field of the input
        return res.status(400).json({mes: "You must enter city in search box"})
    }

    try{
        request(URL, function (error, response, body) {
            if(!response.statusCode === 200) return res.status(404).json({mes:"not found"})// Print the response status code if a response was received
            let data= JSON.parse(body) //body = data,literal object
            res.status(200).json({mes:data})
        });
    }catch(err) {
        res.status(400).send(err).json({mes:err})
    }

})








module.exports = router;