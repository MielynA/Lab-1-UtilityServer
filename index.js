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

    let keyValue = Object.values(query)
    for (let i = 0; i < keyValue.length; i++) {
        const KeyValueI = keyValue[i]
        sum += parseInt(KeyValueI);
        if (isNaN(KeyValueI)) {
            res.json({
                'error!': 'You passed a non-number value into the parameters.'
            })
            return;
        } else if (i + 1 != keyValue.length) {
            sumString += KeyValueI + ' + ';

        } else {
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
    let keyValue = Object.values(req.query);
    let ObjectKeys = Object.keys(req.query);
    let diff = {}
    let difference = 0;
    let subtractString = '';
    for (let i = 0; i < keyValue.length; i++) {
        diff[ObjectKeys[i]] = parseInt([keyValue[i]]);
        if (i !== keyValue.length - 1) {
            subtractString += `${keyValue[i]} - `;

        } else {
            subtractString += `${keyValue[i]}`;
        }
        difference = math.subtract(keyValue[i], difference);
        if (isNaN(keyValue[i])) {
            res.json({
                'error!': 'You passed a non-number value into the parameters.'
            })
            return;
        }
    }


    res.json({
        input: diff,
        subtractString: subtractString,
        diff: difference,
    });
});
//-- Math multiply page
app.get('/math/multiply', (req, res) => {
    let keyValue = Object.values(req.query);
    let ObjectKeys = Object.keys(req.query);
    let multiple = {};
    let product = 1;
    let prodString = '';
    for (let i = 0; i < keyValue.length; i++) {
        multiple[ObjectKeys[i]] = parseInt([keyValue[i]])
        if (i !== keyValue.length - 1) {
            prodString += `${keyValue[i]} * `;
        } else {
            prodString += `${keyValue[i]}`;
        }

        product = math.multiply(keyValue[i], product)
        if (isNaN(keyValue[i])) {
            res.json({
                'error!': 'You passed a non-number value into the parameters.'
            })
            return;
        }
    }

    res.json({
        input: multiple,
        prodString: prodString,
        product: product,
    });
});
//-- Math divide page
app.get('/math/divide', (req, res) => {
    let keyValue = Object.values(req.query);
    let ObjectKeys = Object.keys(req.query);
    let div = {};
    let quotient = 1;
    let divString = '';
    for (let i = 0; i < keyValue.length; i++) {
        div[ObjectKeys[i]] = parseInt([keyValue[i]]);

        if (i !== keyValue.length - 1) {
            divString += `${keyValue[i]} / `
        } else {
            divString += `${keyValue[i]}`
        }
        quotient = math.divide(keyValue[i], quotient)
        if (isNaN(keyValue[i])) {
            res.json({
                'error!': 'You passed a non-number value into the parameters.'
            })
            return;
        }
    }
    //quotient = math.divide(div["a"],div["b"]);
    res.json({
        'input': div,
        'divString': divString,
        'quotient': quotient,
    }, );
});

app.listen(process.env.PORT || 3000)
console.log(`listening..`)