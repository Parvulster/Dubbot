path = require('path');
var DubAPI = require('dubapi');
var config = require(path.resolve(__dirname, 'config.json'));

new DubAPI({username: config.username, password: config.password}, function(err, bot) {
	console.log('Running DubAPI Version ' + bot.version);
	console.log('Running Dubbot Version 1.0.0');
	bot.connect(config.roomName);
	console.log('Connected to ' + config.roomName);
	bot.on(bot.events.chatMessage, function(data) {
		console.log('[Chat] ' + data.user.username + ': ' + data.message);
    });
});