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
        [ flowChanger, flowChanger ],
        'Executes 2 steps'
    )
    .step(
        'Step 2',
        [ flowChanger ],
        'Executes 1 step'
    ).step(
        'Step 3',
        [ flowChanger, flowChanger, flowChanger, flowChanger ],
        'Executes 4 steps'
    );

/* export */
module.exports = alfred;
