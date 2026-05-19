const http = require('http');
const server = http.createServer((req, res) => {
res.write('Jenkins Advanced Pipeline Success by Guntur anil kumar');
res.end();
});
server.listen(3000);
console.log("Application running on port 3000");
