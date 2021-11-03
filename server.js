const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require("cors");
const https = require('https');



// initializations
const app = express();
let http = require('http').Server(app);
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers');
    next();
});
app.use("/static", express.static('./static/'));

// settings
app.set('port', process.env.PORT || 5600);



// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

//Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});