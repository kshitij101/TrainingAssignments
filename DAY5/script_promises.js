function deleteData(url,value){
    return new Promise((resolve,reject)=>{
         let request  =new XMLHttpRequest();
         request.onload = function(){
             if(request.status == 200){
                 resolve(request.response);
             } else {
                 reject(new Error(request.statusText));
             }
         };
 
         request.onerror = function(){
             reject(new Error('Network Error'));
         };
 
 
         request.open("DELETE",url+"/"+value);
         // define the request header
         request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", "Bearer 5abf71c8d037b17a047e6d35cfcc2f3bebba7738147db36da9fa44184db4f5ce");

         // pass the data as JSON string
         request.send();
     });
 }
function putData(url,value){
    // console.log(value);
    let data = {id:value["id"],name:value["name"],email:value["email"],gender:value["gender"],status:value["status"]};
    return new Promise((resolve,reject)=>{
         let request  =new XMLHttpRequest();
         request.onload = function(){
             if(request.status == 200){
                 resolve(request.response);
                console.log(request.response);
             } else {
                 reject(new Error(request.statusText));
             }
         };
 
         request.onerror = function(){
             reject(new Error('Network Error'));
         };
 
 
         request.open("PUT",url+"/"+value["id"]);
         // define the request header
         request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", "Bearer 5abf71c8d037b17a047e6d35cfcc2f3bebba7738147db36da9fa44184db4f5ce");

         // pass the data as JSON string
         request.send(JSON.stringify(data));
     });
 }

function getProducts(url){
    return new Promise((resolve,reject)=> {
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status== 200) {
                resolve(xhr.response); 
            } else {
                reject('Some Error Occured with the status code');
            }
        };
    
        xhr.onerror = function(){
             reject('Some Error Occured with Http Communication');
        };
    
        xhr.open("GET", url);
        xhr.send();

    });
}

function postData(url,data){
   return new Promise((resolve,reject)=>{
        let request  =new XMLHttpRequest();
        request.onload = function(){
            if(request.status == 200){
                resolve(request.response);
            } else {
                reject(new Error(request.statusText));
            }
        };

        request.onerror = function(){
            reject(new Error('May ne Network Error'));
        };


        request.open("POST",url);
        // define the request header
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", "Bearer 5abf71c8d037b17a047e6d35cfcc2f3bebba7738147db36da9fa44184db4f5ce");
        // pass the data as JSON string
        request.send(JSON.stringify(data));
    });
    
}

async function callMethod(url,propValue=""){
    let value1 = new Array();
    console.log('callMethod is executing....');
    let res = await getProducts(url);
    // console.log(res);
    let res1 = JSON.parse(res);
    const proxyProd = new Proxy(res1, {
        get(target,prop){
            if(typeof(prop) == "string"){
                if(target["meta"] != null){
                    // console.log(target);
                    for(let i=0;i<target["meta"]["pagination"]["total"];i++){
                        if(propValue){
                            if(target["data"][i][prop] == propValue){
                                let userData = [target["data"][i]["id"],target["data"][i]["name"],
                                                target["data"][i]["email"],target["data"][i]["gender"],
                                                target["data"][i]["status"]]
                                value1.push(userData);
                            }
                        }
                        else{
                            let userData = [target["data"][i]["id"],target["data"][i]["name"],
                                            target["data"][i]["email"],target["data"][i]["gender"],
                                            target["data"][i]["status"]]
                            value1.push(userData);
                        }// console.log(value1);
                    }
                }
                else{
                    let userData = [target["data"]["id"],target["data"]["name"],
                                            target["data"]["email"],target["data"]["gender"],
                                            target["data"]["status"]]
                            value1.push(userData);
                }
            } else {
                throw new Error('Not a STRING');
            }
        }
    });
    try {
        proxyProd.status;
        return value1;
    }catch(e){
        console.log(e.message);
    }
}
// function putMethod(prdData){
//     postData("https://jsonplaceholder.typicode.com/posts", prdData)
//     .then((resp)=>{
//         console.log(`Data Created ${resp}`);
//     })
//     .catch((error)=>{
//         console.log(`Data Creation failed ${error}`);
//     });
// }
// callMethod();

function testPost(dataVal,userData){
    // console.log(dataVal,userData);
    proxyData = new Proxy(dataVal, {
        set(target,prop,value){
            if((typeof(value) == "string") && (prop == "name" && value.length < 30)){
                target[prop] = value;
                return true;
            } 
            else {
                return false;
            }
        }
    });
    try{
        proxyData.name = userData["name"];
        proxyData.email = userData["email"];
        proxyData.gender = userData["gender"];
        proxyData.status = userData["status"];

        return true;
    }
    catch(e){
        console.log(e.message);
    }
}

async function postValidData(target,value){
    let validData = testPost(target,value);
    console.log(validData);
    let url = "https://gorest.co.in/public-api/users";

    if(validData){
        let dataAdd = await postData(url,value);
        if(dataAdd){
            console.log("data Added");
        }
        else{
            alert("NO DATA WAS ADDED BY POST");
        }
    }
    else{
        alert("DATA WAS NOT VALIDATED");
    }
}
async function putValidData(target,value){
    let validData = testPost(target,value);
    let url = "https://gorest.co.in/public-api/users";
    if(validData){
        let dataAdd = await putData(url,value);
        if(dataAdd){
            return true;
        }
        else{
            alert("NO DATA WAS ADDED BY PUT");
        }
    }
    else{
        alert("DATA WAS NOT VALIDATED");
    }
}

async function deleteValidData(value){
    let url = "https://gorest.co.in/public-api/users";
    let dataAdd = await deleteData(url,value);
    if(dataAdd){
        console.log(dataAdd);
        return true;
    }
    else{
        alert("NO DATA WAS DELETED BY DELETE");
    }
}

function showData(data){
    console.log(data);
    var userDataTable = document.getElementById('showUsers');
    userDataTable.innerHTML = " ";
    userDataTable.innerHTML = `<tr><td>ID</td><td>NAME</td><td>EMAIL</td><td>GENDER</td><td>STATUS</td></tr>`;
    for(let j=0;j<data.length;j++){
        var respData = data[j];       
        let rowinner = `<tr><td>${respData[0]}</td><td>${respData[1]}</td><td>${respData[2]}</td><td>${respData[3]}</td><td>${respData[4]}</td></tr>`;
        userDataTable.innerHTML += rowinner;
    }
}

window.onload = function(){
    var putValueData = document.getElementById('putValueForm');
    putValueData.style.display = "none";

    var putButton = document.getElementById('putButton');
    putButton.style.display = "none";

    var deleteButton = document.getElementById('deleteButton');
    deleteButton.style.display = "none";

    var changeValue = document.getElementById('putValue');
    changeValue.style.display = "none";

    var getCat = document.getElementById("userCat");
    getCat.style.display = "none";

    var opcat = document.getElementById('getCategories');
    opcat.style.display = "none";
    
    var userid = document.getElementById('userId');
    userid.style.display = "none";

    var userDetails = document.getElementById('userDataInput');
    userDetails.style.display = "none";

    var op = document.getElementById('operation');
    op.addEventListener('change',function(){
        getCat.value = "";
        document.getElementById('showUsers').innerHTML = " ";
        userid.value = " ";
        changeValue.value = " ";
        switch(this.value){
            case "get":
                deleteButton.style.display = "none";
                putButton.style.display = "none";
                changeValue.style.display = "none";
                userid.style.display = "none";
                userDetails.style.display = "none";
                putValueData.style.display = "none";
                getCat.style.display = "block";
                opcat.style.display = "block";
                break;
            case "post":
                getCat.style.display = "none";
                deleteButton.style.display = "none";
                putButton.style.display = "none";
                changeValue.style.display = "none";
                userid.style.display = "none";
                opcat.style.display = "none";
                putValueData.style.display = "none";
                userDetails.style.display = "block";
                break;
            case "put":
                getCat.style.display = "none";
                deleteButton.style.display = "none";
                userDetails.style.display = "none";
                putValueData.style.display = "block";
                changeValue.style.display = "block";
                userid.style.display = "block";
                opcat.style.display = "block";
                putButton.style.display = "block";
                break;
            case "delete":
                getCat.style.display = "none";
                putButton.style.display = "none";
                opcat.style.display = "none";
                putValueData.style.display = "block";
                userid.style.display = "block";
                changeValue.style.display = "none";
                document.getElementById("putValueLabel").style.display = "none";
                deleteButton.style.display = "block";
                break;
            default:
                break;
        }
    });
    document.getElementById("postButton").addEventListener('click',function(event){
        event.preventDefault();
        let userInput = JSON.parse('{"status":" ","name":" ","email":" ","gender":" "}');

        var userName = document.getElementById('name').value;
        var userEmail = document.getElementById('email').value;
        var userGender = document.getElementById('gender').value;

        var status = "Active";

        let userData = {name:userName,gender:userGender,email:userEmail,status:status};
        if(postValidData(userInput,userData)){
            callMethod("https://gorest.co.in/public-api/users?name="+userName+"&email="+userEmail)
            .then(response => {showData(response)});
        }       
    
    });

    putButton.addEventListener("click",function(){
        var userPutId = userid;
        var valuePut = changeValue;
        var opValue = opcat.value;
        let userInput = JSON.parse('{"status":" ","name":" ","email":" ","gender":" "}');

        if((userPutId.value != " " ) && (valuePut.value != " ")){
            console.log(userPutId.value,valuePut.value);
            callMethod("https://gorest.co.in/public-api/users/"+userPutId.value)
            .then(response => {response[1]= {"id":response[0][0],"name":response[0][1],
                                                "email":response[0][2],"gender":response[0][3],
                                                "status":response[0][4]};
                                response[1][opValue] = valuePut.value;
                                putValidData(userInput,response[1])
                                .then(callMethod("https://gorest.co.in/public-api/users/"+userPutId.value)
                                                .then(dataResp => {showData(dataResp)}));
                                });
        }
    });

    getCat.addEventListener("keyup",function(){
        let catSearch = opcat.value;

        console.log(this.value.length);
        if(this.value.length <= 0){
            document.getElementById('showUsers').innerHTML = " ";
        }
        else{
            callMethod("https://gorest.co.in/public-api/users?"+catSearch+"="+this.value)
            .then(response => {showData(response)});
        }
    });

    deleteButton.addEventListener("click",function(){
        if(userid.value != ""){
            let userId = userid.value;
            deleteValidData(userId)
            .then(response => {alert("USER HAS BEEN DELETED")});
        }
    });

    document.getElementById("getCategories").addEventListener("change",function(){
            getCat.value = "";
            document.getElementById('showUsers').innerHTML = " ";
            userid.value = " ";
            changeValue.value = " ";
    });
};
 

