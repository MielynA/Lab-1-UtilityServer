const express = require('express');
const math = require('./math');
//const giphy = require('./giphy');
const app = express();
//-- Main page 
app.get('/', (req, res) => {
    console.log("hey we got this Mie");
    res.json({
        "message": ' you are on the main page index (utility server)',
    });
});
//-- Math page
app.get('/math', (req, res) => {
    res.json({
        "message": ' you are on the math page',
    });
});
//-- Math add page
app.get('/math/add', (req, res) => {
    let sum = 0;
    let sumString = '';
    const {query} = req;
    let keyValue = Object.values(query)
    for (let i = 0; i < keyValue.length; i++) {
        const KeyValueI = keyValue[i] 
        sum += parseInt(KeyValueI);
        if (isNaN(KeyValueI)) {
            res.json({
                'error!': 'You passed a non-number value into the parameters.'
            })
            return;
        } else if( i != keyValue.length -1) {
             sumString += KeyValueI + ' + ';

        }else {
            sumString += KeyValueI;
        }
    }
    res.json({
        input: query,
        sumString: sumString,
        sum: sum,
    })

});
//-- Math subtract page
app.get('/math/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const input = math.subtract(a, b);
    const returnObj = {};
    returnObj.input = input;

    res.json({
        input
    });
});
//-- Math multiply page
app.get('/math/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const multiply = math.multiply(a, b);
    const input = {};
    input.multiply = multiply;

    res.json({
        input
    });


});
//-- Math divide page

app.get('/math/divide', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const divide = math.divide(a, b);
    const input = {};
    input.divide = divide;
    input.a = a;
    input.b = b;

    res.json({
        input
    }, );


});

app.listen(process.env.PORT || 3000)
console.log(`listening..`)