require('dotenv/config');
var express = require('express')
let app = express()
const port = process.env.PORT || 3000;
let cors = require("cors");
app.use(cors());
app.use('/', require('./src/routes/routes'))
app.listen(port,() =>{
    console.log(`listening on port http://localhost:${process.env.PORT || 3000}`)
})