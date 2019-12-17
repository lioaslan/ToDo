'use strict';

const Hapi = require('@hapi/hapi');

const start = async () => {
  const server = Hapi.server({
    port: 4000,
    host: 'localhost'
  });

  const routes = require('../routes');
  server.route(routes);
  await server.start(); 
  console.log('Sever is running on %s', server.info.uri);
}

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

start();