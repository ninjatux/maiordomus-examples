/* MaiorDomus configuration */
module.exports = {
    variables: {
        propertyOne: 'I\'ll not be replaced',
        propertyTwo: 'I\'ll be replaced',
        // Change this for the examples
        // getremote and putremote
        putLocalFilePath: '/local/file/location',
        putRemoteFilePath: '/remote/file/destination',
        getLocalFilePath: '/local/file/destination',
        getRemoteFilePath: '/remote/file/location'
    },
    //Change the environment hosts, port, username and key
    environments: {
        development: {
            host: ['127.0.0.1', '127.0.0.1'],
            port: 22,
            username: 'sshUsername',
            privateKey: require('fs').readFileSync('/path/to/key'),
            variables: {
                propertyTwo: 'I\'m development'
            }
        },
        production: {
            host: ['127.0.0.1', '127.0.0.1'],
            port: 22,
            username: 'sshUsername',
            privateKey: require('fs').readFileSync('/path/to/key'),
            variables: {
                propertyTwo: 'I\'m production'
            }
        }
    }
};