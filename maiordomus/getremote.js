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
            .get('<%= getRemoteFilePath %>', '<%= getLocalFilePath %>', 'Retrieving remote file')
        .disconnect() //this is not necessary since on 'done' Maiordomus will close all the connections
        .done();
}

/* export */
module.exports = alfred;
