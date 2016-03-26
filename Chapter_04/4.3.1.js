// subscribe
emitter.on("event1", function (message) {
    console.log(message);
});
// publish
emitter.emit('event1','I am message!');

