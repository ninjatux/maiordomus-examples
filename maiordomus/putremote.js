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
            .put('/Users/valerio.barrila/Downloads/GoBootcamp.moBi', '/Users/valerio.barrila/GoBootcamp.mobi', 'Uploading remote file')
        .disconnect()
        .done();
}

/* export */
module.exports = alfred;
