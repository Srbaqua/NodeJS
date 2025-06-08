const http = require('http');

const PORT = 3001;
const server = http.createServer((req,res)=>{
        console.log(req.url, req.method);
        if(req.url ==='/home'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1> Welcome to HomePage</h1>');
            res.end();
            return;
        }else if(req.url ==='/men'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1> Welcome to Men Page Section</h1>');
            res.write('<h3> Here we find clothing related to mens </h3>');
            res.end();
            return;
        }
        else if(req.url ==='/women'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1> Welcome to Women Page Section</h1>');
            res.write('<h3> Here we find clothing related to Women </h3>');
            res.end();
            return;
        }
        else if(req.url ==='/kids'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<h1> Welcome to Kids Page Section</h1>');
            res.write('<h3> Here we find clothing related to Kids </h3>');
            res.end();
            return;
        }
        res.write(`<html lang="en">
                <head>
                    <title>Myntra</title>
                </head>
                <body>
                    <head>
                        <nav>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/men">Men</a></li>
                                <li><a href="/women">Women</a></li>
                                <li><a href="/kids">Kids</a></li>
                            </ul>
                        </nav>
                    </head>
                    
                </body>
                </html >`
            );
        
    })
    
    server.listen(PORT,()=>{
        console.log(`Server is running on port http://localhost:${PORT}`);

});