const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'html')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/main.html'));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


