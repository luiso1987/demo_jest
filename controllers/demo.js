const { response, request } = require("express");

const { sumar } = require('../helpers/operations');

const demo = (req = request, res = response) => {
    const { valor_1 = 0, valor_2 = 0 } = req.query;
    const resultado = sumar(valor_1, valor_2);
    res.json({
        msg: `Esto suma ${valor_1} + ${valor_2} = ${resultado}`
    });
}


module.exports = {
    demo
}