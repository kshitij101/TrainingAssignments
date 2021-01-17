const path = require('path');
const express = require('express');
const app = express();
const users = require('./membersData');
const cors = require('cors');


app.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
}));

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'pages')));
app.use('/api/users', require('./routes/api/users'));


app.listen(4200,() => console.log("SERVER LISTENING ON PORT 4200"));
