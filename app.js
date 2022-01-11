const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
    
    res.sendFile(path.join(__dirname + '/views/home.html')); 
});
app.get('/', (req,res) =>{
   
    res.sendFile(path.join(__dirname + '/css/styles.css'));  
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
  });
  
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
  });
  

app.use(express.static(path.join(__dirname, '/public')));
 


app.listen(process.env.PORT || 3050, function() {
    console.log("servidor corriendo en puerto 3050");
})





