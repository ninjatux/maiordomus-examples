var geoffrey = require('maiordomus');

/* default */
geoffrey
    .step(
        'InitRepo',
        'Executes 2 steps',
        [ geoffrey.init ]
    );

/* custom */
function () {
    var maiordomus = this;

    maiordomus
        .connect(maiordomus.env)
        .initRepo()
        .clone()
}

/* export */
module.exports = geoffrey;
