const http = require('http');

const productDetails = [
    {
        productId: 1,
        produtName: "car",
        productPrice: 100
    },
    {
        productId: 2,
        produtName: "truck",
        productPrice: 1000
    },
    {
        productId: 3,
        produtName: "aeroplane",
        productPrice: 100000
    }
]

const server = http.createServer((req,res) =>{
    
    switch(req.method){
        case "POST":

            if(req.headers["content-type"] !== 'application/json'){
                res.statusCode = 400;
                res.write("Bad Request");
                res.end();
                return;
            }

            let data = new Array();

            req.on('data',(chunk)=>{
                data.push(chunk);
                productDetails.push(JSON.parse(chunk));
            });
            req.on('end',()=>{
                res.statusCode = 201;
                res.write(JSON.stringify({
                    code: 201,
                    data: JSON.parse(data) 
                }));
                res.end();
            });
            return;
            break;
        case "GET":
                if(req.url === '/'){
                    // resp.writeHead(200,{'Content-Type': 'application/json'});
                    res.write("BYE WORLD");
                    res.end();
                }
                if(req.url === '/products'){
                    // resp.writeHead(200,{'Content-Type': 'application/json'});
                    res.write(JSON.stringify(productDetails));
                    res.end();
                }
                if(req.url === '/search'){
                    var responseArray = new Array();
                    let params = req.url.split("/");
                    for(let i = params.indexOf("search");i<params.length;i+2){
                        for(let j = 0;j<productDetails.length;j++){
                            if(productDetails[j][params[i]] == params[i+1]){
                                responseArray.push(productDetails[j]);
                            }
                        }
                    }
                    console.log(responseArray);
                    res.write(JSON.parse(responseArray));
                    res.end();
                }
        default:
            res.statusCode = 200;
            res.end();
            break;
    }
});


server.listen(4200);

console.log("SERVER LISTENING ON PORT 4200");
