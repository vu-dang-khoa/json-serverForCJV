const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

/*
    Large part is taken from source :https://github.com/jesperorb/json-server-heroku
*/
server.use(middlewares);
server.use(router);

server.listen(port);