// subscribe
emitter.on("event1", function (message) {
    console.log(message);
});
// publish
emitter.emit('event1','I am message!');

//
var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statuCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf-8');
    res.on('data', function(chunk) {
        console.log('BODY:' + chunk);
    });
    res.on('end', function() {
        // TODO
    });
});
