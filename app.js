const express = require("express");;
const app = express();
const cors = require('cors');
//const dotenv = require('dotenv');
const { urlencoded } = require("express");

//dotenv.config();

const dbService = require('./db');
const DbService = require("./db");


app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended : false}));

//create
app.post('/insert', (req,res) => {

});

//read

app.get('/getAll', (req,res) => {
    const db = DbService.getdbInstance();
    const result = db.getAllData();
    /*res.json({
        success: true
    })*/
});


app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}`))