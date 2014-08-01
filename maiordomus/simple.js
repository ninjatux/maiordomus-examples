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
        [ flowChanger, flowChanger ],
        'Executes 2 steps'
    )
    .step(
        'Step2',
        [ flowChanger ],
        'Executes 1 step'
    ).step(
        'Step3',
        [ flowChanger, flowChanger, flowChanger, flowChanger ],
        'Executes 4 steps'
    );

/* export */
module.exports = alfred;
