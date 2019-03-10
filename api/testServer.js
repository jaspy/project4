const app = require('./index').handler;
const server = require('http').createServer(app);

server.listen();

module.exports = server;
