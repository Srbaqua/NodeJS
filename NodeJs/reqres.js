const fs = require('fs');

const userDetails = ((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<h1> Hey buddy you reached Main page! </h1><br>');
        res.write('<h2>Welcome to our server</h2><br><br>');
        res.write('<a href = "/about"> ABOUT PAGE</a><br><br>');
        res.write('<a href = "/"> HOME PAGE</a><br><br>');
        res.write('<a href = "/profile"> PROFILE PAGE</a><br>');
        res.write('</html>');
        res.end();
        return;

    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1> This is About Page </h1>');
        res.write('<h2> Enter Your Details Here.... </h2>');
        res.write('<form action="/details" method="POST">');
        res.write('<input type = "text" id = "name" name = "name" placeholder = "Enter your name"> <br> <br>');
        res.write('<label for="gender"> Gender: </label>');
        res.write('<input type = "radio" id = "male" name = "gender" value ="male">');
        res.write('<label for "male"> Male: </label>');
        res.write('<input type = "radio" id = "female" name = "gender" value ="female">');
        res.write('<label for "Female"> Female: </label><br><br>');
        res.write('<input type = "submit" value = "Submit">');
        res.write('</form>');
        res.end();
        return ;
    }else if(req.url.toLowerCase() === "/details" && req.method ==='POST'){

        req.on('data',chunk=>{
            console.log('Received data chunk:', chunk.toString());
            body.push(chunk);
        })

        const body = [];
        req.on('end', ()=>{
            const valComing = Buffer.concat(body).toString();
            console.log('Received body:', valComing);

            const params = new URLSearchParams(valComing);
            // const bodyObj = {};
            // for(const [key,val] of params.entries()){
            //     bodyObj[key] = val;
            // } //alternative way to convert params to object
             const bodyObj = Object.fromEntries(params.entries());
            console.log(bodyObj);
            fs.writeFileSync('details.txt',JSON.stringify(bodyObj,),'utf-8');
            console.log('File written successfully');
        })

        fs.writeFileSync('details.txt','Saurabh');
        res.statusCode = 302;
        res.setHeader('Location', '/details');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<h2> Hey buddy you reached Details page! </h2>');
        res.write('<a href = "/">Lets Go to Main page</a>');
        res.write('</html>');
        res.end();
        return;
    }
    else if(req.url === '/profile'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1> This is Profile Page </h1>');
        res.write('<h2> Enter Your Details Here.... </h2>');
        res.write('<form action="/" method="POST">');
        res.write('<input type = "text" id = "name" name = "name" placeholder = "Enter your name"> <br> <br>');
        res.end();
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html>');
    res.write('<body> OOPs You reached at wrong server! </body>');
    res.write('<a href = "/"> Go to Home </a>');
    res.write('</html>');
    res.end();  
}
)
module.exports = userDetails;
