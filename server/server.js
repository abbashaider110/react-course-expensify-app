//expressjs.com
// yarn add express@4.15.4
const path = require('path');
const publicPath = path.join(__dirname,'..','public');
const express = require('express');  //require is a node way to import 
const app =express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // this means which path we wanna  use

app.get('*',(req,res) =>{
res.sendFile(path.join(publicPath,'index.html'));
}); //lets us run some function when we request get



app.listen(port,() => { // we are assigning port to server
console.log('Server is up!');
});

