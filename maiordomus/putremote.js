var alfred = require('maiordomus');

/* default */
alfred
    .step(
        'UploadLocalFile',
        [ putFile ]
    );

/* custom */
function putFile() {
    var maiordomus = this;

    maiordomus
        .connect('Creating SSH sessions')
            .put('<%= putLocalFilePath %>', '<%= putRemoteFilePath %>', 'Uploading remote file')
        .disconnect() //this is not necessary since on 'done' Maiordomus will close all the connections
        .done();
}

/* export */
module.exports = alfred;
