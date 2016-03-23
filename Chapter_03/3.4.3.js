// callback function delay implementation by process.nextTick()
process.nextTick(function() {
	console.log('delay implementation');
});
console.log('execute properly');

// callback function delay implementation by setImmediate()
setImmediate(function() {
	console.log('delay implementation');
});
console.log('execute properly');

// comparison 1
process.nextTick(function() {
	console.log('nextTick delay implementation');
});
setImmediate(function() {
	console.log('setImmediate delay implementation');
});
console.log('execute properly');

// comparison 2
// two callback functions by process.nextTick()
process.nextTick(function() {
	console.log('nextTick delay implementation 1');
});
process.nextTick(function() {
	console.log('nextTick delay implementation 2');
});
// two callback functions by setImmediate()
setImmediate(function() {
	console.log('setImmediate delay implementation 1');
	// next Tick loop
	process.nextTick(function() {
		console.log('insert implementation');
	});
});
setImmediate(function() {
	console.log('setImmediate delay implementation 2');
});
console.log('proper implementation');
