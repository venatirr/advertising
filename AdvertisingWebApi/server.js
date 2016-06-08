var http = require('http');
var url = 'http://api.digicelgroup.com:8802/countries?productTypes=Data&productCurrencyIso=';

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse[0]);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});