const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src'));


app.get('/', (req, res) => {
    res.render('index'); 
});


app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
