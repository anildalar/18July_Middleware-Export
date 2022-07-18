
// In Js You can save function inside a variable
let mwfn1 = (req,res,next)=>{
    console.log(req.body);
    req.body.name = req.body.name.toUpperCase();
    req.body.surname = req.body.surname.toUpperCase();
    next();
}

let mwfn2 = function(req,res,next){
    next()
}
//There are 2 types of export in nodejs

//1. Default export
//2. Named export
        // object.property
        // module.exports = {}

module.exports = { mwfn1,"mwfn2":mwfn2}