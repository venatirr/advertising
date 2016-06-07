var server = require('websocket').server, http = require('http');

var socket = new server({
    httpServer: http.createServer().listen(1337),
});

socket.on('request', function (request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function (message) {
        var totalPages = 10;

        console.log(message.utf8Data + ' ' + totalPages);

        connection.sendUTF('hello .. starting to send ' + totalPages + ' pages');

        for (var i = 0; i < totalPages; i++) {
            (function (index) {
                setTimeout(function () { 
                   connection.sendUTF('this is page ' + index);
                }, i * 4000);
            })(i);
        }

    });

    connection.on('close', function (connection) {
        console.log('connection closed');
    });
});