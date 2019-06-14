// https://workspaceName-accountName.c9users.io/index.html
// https://workspaceName-accountName.c9users.io/static.html
var server,
    ip = process.env.IP,
    port = process.env.PORT,
    http = require('http'),
    fs = require("fs"),
    folderPath = "static",
    url = require('url'),
    path,
    filePath,
    encode = "utf8";
server = http.createServer(function(req, res) {
    path = url.parse(req.url);
    filePath = folderPath + path.pathname;
    fs.readFile(filePath, encode, function(err, file) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end();
            return;
        }
        res.writeHead(200, {
            'Content-Type': 'text/application'
        });
        res.write(file);
        res.end();
    });
});
server.listen(port, ip);
console.log("Server running at http://" + ip + ":" + port);
