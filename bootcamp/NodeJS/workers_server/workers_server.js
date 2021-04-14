const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./users.routes');

const app = express();
const PORT = 8003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/workers', userRoutes);

app.listen(PORT, () => console.log(`The app start at port: ${PORT}`));
