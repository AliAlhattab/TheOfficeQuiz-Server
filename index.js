const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const playersRoutes = require('./routes/players');

app.use(express.json());
app.use(cors());
require('dotenv').config();

app.get('/', (req, res) => {
    res.json('Welcome to TheOfficeQuiz-Server');
});


app.use('/players', playersRoutes);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})

//comment