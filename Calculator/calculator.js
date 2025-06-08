const http = require('http');
const calculator = require('./main');
const server = http.createServer(calculator);



const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})