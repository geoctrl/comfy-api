module.exports = server => {


	server.route({
		method: 'GET',
		path: '/file',
		handler(request, reply) {
			reply('hello world!')
		}
	})


};