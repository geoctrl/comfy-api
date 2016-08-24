const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: 3000});

server.start(err => {
	if (err) {
		throw err;
	}
});

require('./files/index')(server);