const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require('http');

const server = http.createServer(app);
server.listen(process.env.port || 3002, () => {
    console.log('Ready to Go!');
  });