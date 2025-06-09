const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    console.log(res.url,res.method);
})

const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`Port is running at http://localhost:${PORT}`);
});