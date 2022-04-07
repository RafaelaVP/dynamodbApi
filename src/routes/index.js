const { Router } = require('express');
const user = require('./userRoute');


module.exports = (server) => {
  server.use((req, res, next) => {
    user(server, new Router());
    next();
  });
};