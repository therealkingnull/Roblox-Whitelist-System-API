const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const wlUser = require('./whiteLists.json');

const app = express();

app.use(new LimitingMiddleware().limitByIp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
    res.json(wlUser)
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));