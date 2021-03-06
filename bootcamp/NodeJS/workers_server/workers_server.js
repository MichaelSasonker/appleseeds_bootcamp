const express = require('express');
const bodyParser = require('body-parser');
const workersRoutes = require('./workers.routes');
const roomsRoutes = require('./rooms.routes');

const app = express();
const PORT = 8003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/workers', workersRoutes);
app.use('/api/rooms', roomsRoutes);

app.listen(PORT, () => console.log(`The app start at port: ${PORT}`));
