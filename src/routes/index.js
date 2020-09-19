const express = require('express');
const Calc = require('../controllers/Calc')

const routes = express.Router();

routes.get('/', Calc.main);
routes.get('/somar', Calc.somar);
routes.get('/subtrair', Calc.subtrair);
routes.get('/dividir', Calc.dividir);
routes.get('/multiplicar', Calc.multiplicar);
routes.get('/raizquadrada', Calc.raizquadrada);
routes.get('/potencia', Calc.potencia);
routes.get('/mediaaritmetica', Calc.mediaaritmetica);
routes.get('/mediaharmonica', Calc.mediaharmonica);
routes.get('/moda', Calc.moda);

module.exports = routes;