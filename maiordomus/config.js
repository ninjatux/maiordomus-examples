
/* MaiorDomus configuration */
module.exports = {
    environments: {
        production: {
            host: ['127.0.0.1', '127.0.0.1'],
            port: 22,
            username: 'username',
            privateKey: require('fs').readFileSync('path/to/key'),
            dstFolder: '~/sites/myapp-production'
        }
    }
};
