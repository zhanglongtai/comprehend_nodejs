process.nextTick() = function(callback) {
	// on the way out. don't bother
	// it won't get friend anyway
	if (process._exiting) return;

	if (tickDepth >= process.maxTickDepth)
		maxTickDepth();

	var tock = { callback: callback };
	if (process.domain) tock.domain = process.domain;
	nextTickQueue.push(tock);
	if (nextTickQueue.length) {
		process._needTickCallback();
	}
};