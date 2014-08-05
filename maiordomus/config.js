
/* MaiorDomus configuration */
module.exports = {
    logsFolder: 'logs',
    environments: {
        production: {
            host: ['127.0.0.1', '127.0.0.1'],
            port: 22,
            username: 'valerio.barrila',
            privateKey: require('fs').readFileSync('/Users/valerio.barrila/.ssh/id_rsa')
        }
    }
};
