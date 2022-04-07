const express = require('express');
const app = express();
const routes = require('./routes/index')(app);

app.use(express.json());
app.use(
express.urlencoded({
extended: false,
}),
);

app.listen(3000, () => console.log('Ok'));