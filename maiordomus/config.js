
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
            addresses: [ '127.0.0.1', '127.0.0.1' ],
            dstFolder: '',

        }
    }
};
