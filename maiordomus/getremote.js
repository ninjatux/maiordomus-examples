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
        .connect('Creating SSH sessions')
            .exec('echo "i was created using an SSH connection!" > ~/sites/remoteFile')
            .get('/Users/valerio.barrila/Downloads/GoBootcamp.moi', '/Users/valerio.barrila/GoBootcamp.mobi', 'Retrieving remote file')
        .disconnect()
        .done();
}

/* export */
module.exports = alfred;
