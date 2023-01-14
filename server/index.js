const express = require('express');
const cors = require('cors');
const router = require('./routes/employees');
const app =  express();

require("dotenv").config();

app.use(cors({
    origin: process.env.CLIENTURL
}));
app.use(express.json());

app.use('/', router);

app.use('/', router);

app.listen(process.env.PORT || 3001, () => {
    console.log('Server listening on port 3001');
})