const http = require('http');
const fs = require('fs');
const url = require('url');
const productsFile = "products.txt";

var productPage = fs.readFileSync('./index.html');


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
fs.writeFileSync(productsFile,"[");
for(let i =0;i<productDetails.length;i++){
    fs.appendFileSync(productsFile,JSON.stringify(productDetails[i]));
    fs.appendFileSync(productsFile,",");
}

let products = fs.readFileSync(productsFile,"utf-8");
console.log(products);

const server = http.createServer((req,res) =>{
    
    switch(req.method){
        case "POST":
            // if(req.headers["content-type"] !== 'application/json'){
            //     res.statusCode = 400;
            //     res.write("Bad Request");
            //     res.end();
            //     return;
            // }
            let data = '';
            req.on('data',(chunk)=>{
                let paramsName = chunk.toString().replace(/&/g,",");
                let params = paramsName.replace(/=/g,":");
                let prevIndex = 0;
                for(let i=0;i<params.length;i++){
                    if(params[i] == ":"){
                        if(params[i+1].match(/[a-z]/i)){
                            data += [params.slice(prevIndex,i),'":"'].join('');
                            prevIndex = i+1;
                        }
                        else{
                            data += [params.slice(prevIndex,i),'":'].join('');
                            prevIndex = i+1;
                        }
                    }
                    else if(params[i] == ","){
                        if(params[i-1].match(/[a-z]/i)){
                            data += [params.slice(prevIndex,i),'","'].join('');
                            prevIndex = i+2;
                        }
                        else{
                            data += [params.slice(prevIndex,i),',"'].join('');
                            prevIndex = i+1;
                        }
                    }
                }
                let data1 = params.split('').reverse().join('');
                data += data1.split(":")[0].split('').reverse().join('');
                data = '{"'+data+'},';
                fs.appendFile(productsFile,data,function(err){
                    if (err) throw err;
                        console.log(err);
                  });
            }).on('end',()=>{
                res.statusCode = 201;
                res.write(JSON.stringify({
                    code: 201,
                    data: fs.readFileSync(productsFile,"utf-8")
                }));
                // res.write(JSON.stringify(data));
                res.end();
            });
            return;
        case "GET":
            if(req.url === '/'){
                // resp.writeHead(200,{'Content-Type': 'application/json'});
                res.write("BYE WORLD");
                res.end();
            }
            if(req.url === '/createProduct'){
                // resp.writeHead(200,{'Content-Type': 'application/json'});
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(productPage);
            }
            if(req.url === '/products'){
                let respData = fs.readFileSync(productsFile,"utf-8").slice(0, -1);
                res.statusCode = 200;
                // res.writeHead(200,{'Content-Type': 'application/json'});
                res.write(JSON.stringify({
                    code: 200,
                    data: JSON.parse(respData+"]")
                }));
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
