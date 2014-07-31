var geoffrey = require('maiordomus');

/* default */
geoffrey
    .step(
        'CreateDirectories',
        'Creates the needed directories for running the app',
        [ createDirectories, deploy ]
    )
    .step(
        'DeployApplication',
        'Init the git repository',
        [ deploy ]
    );

/* custom */
function createDirectories() {
    var maiordomus = this;
    maiordomus
        .sshConnect('SSH session created')
        .sshSend('mkdirp ~/sites/logs')
        .sshSend('echo "Log folder created" >> ~/sites/logs/check')
        .sshSend('cat ~/sites/logs/check')
        .sshSend('service name restart')
        .done();
}

function deploy() {
    var maiordomus = this;
    maiordomus
        .done('Application deployed');
}

/* export */
module.exports = geoffrey;
