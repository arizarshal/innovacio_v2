const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/wallet', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/nft-dev', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/defi', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.get('/coin', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/blockchain', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/staking', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/hybrid', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/dex', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/marginex', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/p2p', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/sec_ex', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/sec_token', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/asset_token', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/stable', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/ico', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/nftGames', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/blog', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/api/blog/product/:productId', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.listen(4000);
