const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const { wlUser, randomN, data } = require('./handler');

const app = express();

app.use(new LimitingMiddleware().limitByIp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/:user', (req, res) => {
  res.json(wlUser(req.params.user, 1));
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));