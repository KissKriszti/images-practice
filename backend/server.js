const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.json())
app.use('/public', express.static(__dirname + "/../frontend/public"));
app.use('/dist', express.static(__dirname + "/../frontend/dist"));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + "/../frontend/index.html"));
});

app.get('/image-list', (req,res) => {
    res.sendFile(path.join(__dirname + "/../frontend/data.json"));
});

app.listen(9000, () => {
	console.log("http://127.0.0.1:9000");
});