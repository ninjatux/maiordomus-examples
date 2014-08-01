var geoffrey = require('maiordomus');

/* default */
geoffrey
    .step(
        'CreateDirectories',
        [ createDirectories ],
        'Creates the needed directories for running the app'
    );

/* custom */
function createDirectories() {
    var maiordomus = this;

    maiordomus
        .connect('SSH session created')
            .exec('mkdir -p ~/sites/sshcreated')
        .disconnect()
            .exec('mkdir -p ~/sites/localcreated')
        .done();
}

/* export */
module.exports = geoffrey;
