const express = require ('express');
// const mongose = require ('mongose');
const app = express();
const port = 3000

app.get ('/', function(req,res){
    res.send("hello  word");
});

const PORT = process.env.PORT  || 3000;
app.listen(PORT, () => {
    console.log('Serveur démarré sur le port ${PORT}');
});

app.post('/user', function (req, res) {
    res.send('Got a POST request');
});

app.put('/put', function (req, res){
    res.send("Got a PUT request at /put");
});

app.delete('/dlt', function (req, res){
    res.send("Got a DELETTE request at /dlt");
});