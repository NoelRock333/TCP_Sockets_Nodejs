var net = require('net');
 
var HOST = "192.168.1.100"; //Intenta conectar hacia esa IP
var PORT = 666;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});
 
client.on('data', function(data) {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});
 
client.on('close', function() {
	console.log('Connection closed');
}); 