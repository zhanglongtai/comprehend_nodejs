// synchronous callback function
var forEach = function (list, callback) {
	for (var i=0; i<list.length; i++) {
		callback(list[i], i, list);
	}
};

// asynchronous callback function, request object
// lib/fs.js
fs.open = function(path, flags, mode, callback) {
	//...
	binding.open(pathModule._makeLong(path),
		            stringToFlags(flags),
		            mode,
		            callback);
};