
let server = require('http').createServer(),
		url = require('url'),
		WebSocketServer = require('ws').Server,
		wss = new WebSocketServer({ server: server }),
		express = require('express'),
		app = express(),
		port = 4080,
		fs = require('fs'),
		path = require('path'),
		basePath = '/Users/tonylefler/comfy-drive-files';

app.use(function (req, res) {
	res.send({ msg: "hello" });
});

wss.on('connection', function connection(ws) {
	let location = url.parse(ws.upgradeReq.url, true);
	// you might use location.query.access_token to authenticate or share sessions
	// or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

	ws.on('message', message => {
		// test
		fs.readdir(basePath, (err, files) => {
			console.log(files);
			// console.log(path.extname(files[0]).slice(1));
		});

		// console.log('received: %s', message);
		//
		// wss.clients.forEach(client => {
		// 	if (client !== ws) client.send(message);
		// })
	});

	ws.send('something');
});

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });