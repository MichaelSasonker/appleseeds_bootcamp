const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require('./routes/products.routes');
require('./db/mongoose.db');

const app = express();
const port = process.env.PORT || 8001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/store', productsRoutes);

app.listen(port, () => console.log(`The server starts at port: ${port}`));