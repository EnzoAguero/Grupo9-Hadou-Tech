const express = require('express')
const app = express();
app.use(express.static('public'));
const path = require('path')
const port = 3050;

app.listen(port, () => console.log('Server running as ' + port))

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','home.html')))
app.get('/index', (req,res) => res.sendFile(path.join(__dirname, 'viwes','index.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'views','register.html')))


