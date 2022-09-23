const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
require('dotenv').config();

// config mongoose
require('./server/config/mongoose.config');

//config express
app.use(cors( {
    credentials: true,
    origin:'http://localhost:3000'
}))

//POST method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
require('./server/routes/user.routes')(app);

//port
app.listen(port, () => console.log(`Listening on port: ${port}`) );