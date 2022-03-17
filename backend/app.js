const express = require('express');
const app = express();
const config = require("config");//It lets you define a set of default parameters, and extend them for different deployment environments-secret
const morgan = require('morgan'); //Prints at the terminal when there are customer requests
const cors = require('cors');//Because a server side and a client do not sit on the same port


// import from project
const weather_get= require("./routes/weather")


//Middleware
app.use(morgan('dev'));//HTTP request logger
app.use(cors());//If a server side and a client side are not on the same port


// routes-endpoint
app.use(`${config.get("route")}`, weather_get) //route for get weather
app.get('/',(req,res)=>{res.send(new Date().toLocaleTimeString());}); //Home page screen display-Watch
app.get("*", (req,res) => { //404 page
    res
    .status(404)
    .json({mes:"Page not found"})
})



const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening to port ${port}, click http://localhost:${port}`)
})