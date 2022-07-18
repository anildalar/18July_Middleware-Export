//console.log("Its working");

//const something = require(somelibarary);
const express = require('express');

//const {namedimport1,namedimport2,.....} = require(./somelibarary)
const { mwfn1, mwfn2 } = require('./middlewares/myMiddleware');
//Every function return something
const app = express();

require('dotenv').config();

//console.log(process.env.PORT)
app.use(express.json())

//object.method(actualarg1,actualarg3,....);
//app.get(routename,mwfn1,mwfn2,mwfn3,.....,cbfn);
app.post('/students',mwfn1,mwfn2,(req,res)=>{
    let name = req.body.name;
    let surname = req.body.surname;
    res.json({'msg':`Hi ${name} ${surname}, How are you ? `});
});


const PORT = process.env.PORT;
app.listen(PORT,function(){
    console.log(`The server is running on port ${PORT}`)
});