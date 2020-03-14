const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("req: ", req.originalUrl)
    if (req.originalUrl === "/test.png") {
        setTimeout(() => {
            next();
        }, 5000) 
    } else if (req.originalUrl === "/style.css") {
        setTimeout(() => {
            next();
        }, 3000) 
    } else if (req.originalUrl === "/startup.js") {
        setTimeout(() => {
            next();
        }, 6000) 
    } else {
        next();
    }
  });
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));