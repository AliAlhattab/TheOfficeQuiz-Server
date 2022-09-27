const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
require('dotenv').config();



app.get('/', (req, res) => {
    res.json('Welcome to TheOfficeQuiz-Server');
});


app.listen(port, () => {
    console.log(`Listening on ${port}`);
})