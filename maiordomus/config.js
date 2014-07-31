
/* MaiorDomus configuration */
module.exports = {
    repository: {
        defaultRemote: {
            name: 'bitbucket',
            cloneUrl: 'git@bitbucket.org:ninjatux/maiordomus-example-app.git'
        },
        defaultBranch: 'master'
    },
    environments: {
        localhost: {
            repository: {
                defaultBranch: 'master'
            },
            dstFolder: '~/sites/myapp-localhost'
        },
        production: {
            host: ['127.0.0.1', '127.0.0.1'],
            port: 22,
            username: 'valerio.barrila',
            privateKey: require('fs').readFileSync('/Users/valerio.barrila/.ssh/id_rsa'),
            dstFolder: '~/sites/myapp-production'
        }
    }
};
