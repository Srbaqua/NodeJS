const http = require('http');
const parsingUserDetails = require('./reqres');
 

const server = http.createServer(parsingUserDetails);




const PORT = 3000;
server.listen(PORT,()=>{
console.log(`Server is running on port http://localhost:${PORT}`);
});