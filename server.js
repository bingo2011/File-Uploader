(function(port) {
    var nodeStatic = require('node-static'),
        options = {
            publicDir: __dirname + '/public',
            nodeStatic: {
                cache: 3600
            }
        },
        fileServer = new nodeStatic.Server(options.publicDir, options.nodeStatic),
        serve = function(req, res) {
            fileServer.serve(req, res);
        };

    require('http').createServer(serve).listen(port);
}(8888));
