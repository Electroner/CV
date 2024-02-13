const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('.'));

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});