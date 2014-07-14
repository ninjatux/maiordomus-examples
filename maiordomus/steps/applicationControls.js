module.exports.stop = function (maiordomus) {
    maiordomus
        .connect(maiordomus.environment)
        .exec('sudo service myApp stop')
        .done('Service started');
};

module.exports.start = function (maiordomus) {
    maiordomus
        .connect(maiordomus.environment)
        .exec('sudo service myApp start')
        .done('Service started');
};
