const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const localStragegy = require('passport-local').Strategy

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require('jsonwebtoken')


mongoose.connect(
    "mongodb+srv://omotoshoayomikun:Timileyin_1@cluster0.6quvy5c.mongodb.net/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(
    console.log('Connected to database')
).catch((err) => {
    console.log('Error connected to database', err)
})

app.listen(port, () => {
    console.log('Server runing on port 8000')
})