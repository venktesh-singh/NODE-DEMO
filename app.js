const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const express = require('express');
require('dotenv').config();
const app = express();
// const cors= require("cors")

const connectDB =require('./db/conn');
const PORT = process.env.PORT ;
connectDB();
// app.use(cors());
app.use(express.json());
app.use(cookieParser());

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// we link the router files to make our route easy 
app.use(require('./router/assignTask'))


app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})


