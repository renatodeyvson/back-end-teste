const express = require('express');
const routes = express.Router();

const phoneController = require('./controllers/phoneController');

routes.get('/phones', phoneController.index);
routes.post('/phones/find', phoneController.find);
routes.post('/phones', phoneController.add);
routes.put('/phones/:id', phoneController.upd);
routes.delete('/phones/:id', phoneController.del);

module.exports = routes;