var net = require('net');

var HOST = "192.168.1.100"; //A la espera de conexiones en esta IP
var PORT = 666;
 
var server = net.createServer(function(socket) {
	console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
	console.log("Server creado");
	socket.write('Soy el server\r\n'); //Escribiendo contenido para que pueda leer el cliente
	socket.pipe(socket); //Enviando el contenido por el mismo socket hacia el cliente
});
 
server.listen(PORT, HOST); 

console.log('Server listening on ' + HOST +':'+ PORT);
