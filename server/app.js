const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
require('./db/conn');
const cors = require('cors');
const PORT = process.env.PORT ;
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

module.exports = app;