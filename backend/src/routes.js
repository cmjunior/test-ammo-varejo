const express = require('express');
const routes = express.Router();

const productsCtrl = require('./controllers/productsController');

routes.get('/', (request,response) => {
    console.log(request);
    return response.json({'ammo-test': 'Server is Up and Running!'});
});

routes.get('/products', productsCtrl.all)

module.exports = routes;