var MaiorDomus = require('../../lib'),
    config = require('./config');

/* Creating our maior domus */
var alfred = new MaiorDomus(config);

/* misc functions */


alfred
    .step(
        'setup',
        'Init the project repository in application folder',
        [ initRepo, applicationControls.start ]
    )
    .step(
        'deploy',
        'Deploy the project on the specified environment',
        [ applicationControls.stop, 'pull', applicationControls.start ]
    );

/* export */
module.exports = alfred;
