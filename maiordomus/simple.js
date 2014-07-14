var alfred = require('maiordomus');

/* GLOBALS */
var FLOW_CONTROL = 0;

/* misc functions */
function flowChanger() {

    var maiordomus = this;

    FLOW_CONTROL++;

    maiordomus
        .done('FLOW_CONTROL = ' + FLOW_CONTROL);
}

alfred
    .step(
        'TwoTimes',
        'Executes 2 steps',
        [ flowChanger, flowChanger ]
    )
    .step(
        'OneTime',
        'Executes 1 step',
        [ flowChanger ]
    ).step(
        'FourTimes',
        'Executes 4 steps',
        [ flowChanger, flowChanger, flowChanger, flowChanger ]
    );

/* export */
module.exports = alfred;
