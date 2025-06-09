const fs = require('fs');
const cal = ((req,res)=>{
    if(req.url ==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`<h1> Welcome To the calculator App.</h1>
            <h2>Click on the link below to start doing sum</h2><br><br>
            <a href = "/calculator">Calculator</a><br><br>
            `)
            res.end();
            return ;
        }
    else if(req.url === '/calculator'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Lets perform some calculations</h1>');
        res.write('<form action = "/calculator-result" method = "POST">');
        res.write('<input type = "number" name = "num1" placeholder = "Enter first number"> <br><br>');
        res.write('<input type = "number" name = "num2" placeholder = "Enter second number"> <br><br>');
        res.write('<button type = "submit" value = "Submit">Calculate</button>');
        res.write('</form>');
        res.end();
        return;
    }
    else if(req.url.toLowerCase() === '/calculator-result' && req.method ==='POST'){
        //  res.statusCode = 302;
        // res.setHeader('Location', '/calculator-result');
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        const body = [];
        req.on('data',chunk =>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const val = Buffer.concat(body).toString();
            const param = new URLSearchParams(val);
            const bodyVal = Object.fromEntries(param.entries());
            // console.log(bodyVal);
            const num1 = parseFloat(bodyVal.num1);
            const num2 = parseFloat(bodyVal.num2);
            const result = num1+num2;
            const dataToadd = {
                num1,num2,result
            };
            console.log(dataToadd);
            fs.writeFileSync('val.txt',JSON.stringify(dataToadd),'utf-8');
            
            res.write(`<h1>This is the Result page </h1>
                <h3>First User Value is =  ${num1}</h3>
                <h3>Second User Value is =  ${num2}</h3>
                <h3>Result is =  ${result}</h3>
                <a href = '/calculator'>Lets Calculate another value</a>`);
                
                })
        return;
    }
    
    
    
})

module.exports = cal;