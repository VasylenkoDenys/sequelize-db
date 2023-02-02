const express = require('express');
const { errorHandler } = require('./errorHandlers');
const { sequelizeErrorHandler } = require('./errorHandlers/sequelizeErrors');
const router = require('./routers');
const app = express();

app.use(express.json());

app.use(router);

app.use(sequelizeErrorHandler);

app.use(errorHandler);

module.exports = app;