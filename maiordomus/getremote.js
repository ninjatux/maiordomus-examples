var alfred = require('maiordomus');

/* default */
alfred
    .step(
        'GetRemoteFile',
        [ getFile ]
    );

/* custom */
function getFile() {
    var maiordomus = this;

    maiordomus
        .connect('SSH session created')
            .exec('echo "i was created using an SSH connection!" > ~/sites/remoteFile')
            .get('/Users/valerio.barrila/Downloads/GoBootcamp.mobi', '/Users/valerio.barrila/GoBootcamp.mobi', 'Retrieving remote file')
        .disconnect()
        .done();
}

/* export */
module.exports = alfred;
