var net = require('net');
var fs = require('fs');
var stream = require('stream')

var HOST = "192.168.1.100"; //A la espera de conexiones en esta IP
var PORT = 666;

var socket =new stream.Stream();

var server = net.createServer(function(socket) {
	console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
	console.log("Server creado");
	socket.buffer = new Buffer(2048);

	socket.on('data', function(data) {
		//text = String(data).replace(new RegExp('\r?\n','g'), '<br />');
		//console.log('Received: ' +JSON.stringify(data).length);
		/*for(i=356;i<data.length;i++){
			console.log(data[i]);
		}*/
		console.log(data);
		var arrayAux = [];
		for(i=104;i<data.length;i++){
			arrayAux.push(data[i]);
		}
		var sinHeader = new Buffer(arrayAux);
		//console.log(String.fromCharCode(sinHeader));
		console.log('Received: ' + sinHeader.toString('ascii', start=0, end=sinHeader.length) );
		//console.log(data.length);
		//console.log('Received: ' + data.toString('utf-8', start=356, end=data.length) );
		//socket.write('Soy el server\r\n'); //Escribiendo contenido para que pueda leer el cliente
		//socket.pipe(socket); //Enviando el contenido por el mismo socket hacia el cliente
		//console.log('Received: ' + data.toString('hex', start=0, end=data.length) );
		/*fs.writeFile("./datos.txt", data, function(err) {
			if(err)
				console.log(err);
			else
				console.log("The file was saved!");
		});*/ 
	});

	socket.on('close', function() {
		console.log('Connection closed');
	}); 
});

server.listen(PORT, HOST); 


console.log('Server listening on ' + HOST +':'+ PORT);
