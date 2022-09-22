const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
require('dotenv').config();
<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
=======
>>>>>>> e5d882b28328483f3468720bc2d754ac8efd386a

// config mongoose
require('./server/config/mongoose.config');

//config express
app.use(cors( {
    // credentials: true,
    // origin:'http://localhost:3000'
}))
//POST method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(cookieParser()); //this is new, to use with cookie
=======
>>>>>>> e5d882b28328483f3468720bc2d754ac8efd386a

//routes
require('./server/routes/user.routes')(app);

//port
app.listen(port, () => console.log(`Listening on port: ${port}`) );