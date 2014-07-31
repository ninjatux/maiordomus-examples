var geoffrey = require('maiordomus');

/* default */
geoffrey
    .step(
        'CreateDirectories',
        [ createDirectories ],
        'Creates the needed directories for running the app'
    )
    .step(
        'DeployApplication',
        [ deploy ],
        'Init the git repository'
    );

/* custom */
function createDirectories() {
    var maiordomus = this;
    maiordomus
        .sshConnect('SSH session created')
        .sshSend('mkdir -p ~/sites/logs')
        .sshSend('echo "Log folder created" >> ~/sites/logs/check')
        .sshSend('cat ~/sites/logs/check')
        .done();
}

function deploy() {
    var maiordomus = this;
    maiordomus
        .done('Application deployed');
}

/* export */
module.exports = geoffrey;
