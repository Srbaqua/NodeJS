console.log('1.Event started');

//microEvent
Promise.resolve().then(()=>{
    console.log('2.Microtask completed');
})

//Timer queue
setTimeout(()=> console.log('3.Tineout completed'),0);

//i/0 queue
const fs = require('fs');
fs.readFile('userDetails.txt',()=>{
    console.log('4.I/O opertaion completed')});

//check queue
setImmediate(()=>console.log('5. Immediate'));

//close queue
process.on('exit',()=>{
    console.log('6. Process exited succesfully');
});

console.log('7. Last code');