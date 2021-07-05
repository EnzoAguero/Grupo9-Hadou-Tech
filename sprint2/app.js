const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path')
const port = 3050;

app.listen(port, () => console.log('Server running as ' + port))


app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/carrito', (req,res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/detalle', (req,res) => res.sendFile(path.join(__dirname, 'views', 'detalle.html')))

/* luego cambiamos bien con cada archivo segun como los nombraron */


