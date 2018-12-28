const express = require('express');
const math = require('./math');
//const giphy = require('./giphy');
const app = express();
//const port = 3000
//-- Main page 
app.get('/', (req,res)=>{
   console.log("hey we got this Mie");
   res.json({
       "message": ' you are on the main page index (utility server)',
   });
});
//-- Math page
app.get('/math', (req,res)=>{
    console.log("hey we got this Mie");
    res.json({
        "message": ' you are on the math page',
    });
 });
//-- Math add page
app.get('/math/add', (req,res)=>{
    //const {query} = req;
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = math.add(a,b);
    const returnObj = {};
    returnObj.result = result;

    res.json(returnObj);
});

app.get('/math/subtract', (req,res)=>{
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);
   const subtract = math.subtract(a,b);
   const returnObj = {};
   returnObj.subtract = subtract;

   res.json({returnObj});
});

app.get('/math/multiply', (req,res)=>{
   const a = parseInt(req.query.a);
   const b = parseInt(req.query.b);
   const multiply = math.multiply(a,b); 
   const input = {};
   input.multiply = multiply;

   res.json({input})


});

app.listen(process.env.PORT || 3000)
console.log(`listening..`)