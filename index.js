const express = require('express');
const math = require('./math');
//const giphy = require('./giphy');
const app = express();
//const port = 3000
app.get('/', (req,res)=>{
   console.log("hey we got this Mie");
   res.json({
       "message": ' you are on the main page index (utility server)',
   });
});

app.listen(process.env.PORT || 3000)
console.log(`listening..`)