// #KEYWORDS :-[ BASIC AND MINIMAL NODE/EXPRESS WEB SERVER CONFIG WITHOUT app.get]

const express=require('express');
const app=express();
const path=require('path');

const port= process.env.PORT || 3000;
const publicPath=path.join(__dirname,'/public')
console.log(`PUBLICPATH :- ${publicPath}`);
app.use(express.static(publicPath));



app.listen(port, () => {
    console.log(` NODE Server started on port:- ${port}`);
});

