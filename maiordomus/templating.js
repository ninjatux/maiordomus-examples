var alfred = require('maiordomus');

/* default */
alfred
    .step(
        'UseConfigProperties',
        [ useConfigProperties ]
    );

/* custom */
function useConfigProperties() {
    var maiordomus = this;

    maiordomus
        .log('<%= propertyOne %>')
        .log('<%= propertyTwo %>')
        .done();
}

/* export */
module.exports = alfred;
