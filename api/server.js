const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const authRouter = require('../auth/auth-router.js');
const userRouter = require('../user/userRouter.js');


server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

module.exports = server;