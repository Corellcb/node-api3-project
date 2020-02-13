const express = require('express');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/users', userRouter);
server.use('/posts', postRouter);

//custom middleware

function logger(req, res, next) {
  const date = new Date();
  console.log(`${req.method} request to ${req.originalUrl} at ${date}`);
  next();
}

module.exports = server;
