const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');


// MIDDLEWARE
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'))
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetsRouter);
app.use(launchesRouter);

module.exports = app; 