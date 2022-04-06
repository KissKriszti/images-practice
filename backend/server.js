const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + "/../frontend/index.html"));
});

app.use('/public', express.static(__dirname + "/../frontend/public"));

app.get('/image-list', (req,res) => {
    const images = fs.readFileSync('../frontend/data.json');
    const imageData = JSON.parse(images);
    res.send(imageData);
});

app.listen(9000, () => {
	console.log("http://127.0.0.1:9000");
});