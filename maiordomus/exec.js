var geoffrey = require('maiordomus');

/* default */
geoffrey
    .step(
        'CreateDirectories',
        [ createDirectories ]
    );

/* custom */
function createDirectories() {
    var maiordomus = this;

    maiordomus
        .connect('SSH session created')
            .exec('mkdir -p ~/sshcreated', 'Executing remote command')
        .disconnect()
        .exec('mkdir -p ~/localcreated', 'Executing local command')
        .done();
}

/* export */
module.exports = geoffrey;
