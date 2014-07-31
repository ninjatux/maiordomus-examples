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
        'Step 1',
        'Executes 2 steps',
        [ flowChanger, flowChanger ]
    )
    .step(
        'Step 2',
        'Executes 1 step',
        [ flowChanger ]
    ).step(
        'Step 3',
        'Executes 4 steps',
        [ flowChanger, flowChanger, flowChanger, flowChanger ]
    );

/* export */
module.exports = alfred;
