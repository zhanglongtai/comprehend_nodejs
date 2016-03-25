//
var async = function (callback) {
    process.nextTick(callback);
};

try {
    async(callback);
} catch(e) {
    // TODO
}

async(function (err, results) {
    // TODO
});
//
