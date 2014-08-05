var alfred = require('maiordomus');

/* GLOBALS */
var FLOW_CONTROL = 0;

/* misc functions */
function flowChanger() {

    var maiordomus = this;

    FLOW_CONTROL++;

    maiordomus
        .log('My log')
        .done('FLOW_CONTROL = ' + FLOW_CONTROL);
}

alfred
    .step(
        'Step1',
        [ flowChanger, flowChanger ]
    )
    .step(
        'Step2',
        [ flowChanger ]
    ).step(
        'Step3',
        [ flowChanger, flowChanger, flowChanger, flowChanger ]
    );

/* export */
module.exports = alfred;
